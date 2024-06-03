import "express-async-errors";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import DoctorController from "@/infra/controller/DoctorController";
import PatientController from "@/infra/controller/PatientController";
import {
	authenticationSchema,
	createAppointmentAgendaIdSchema,
	createPatientPatientIdSchema,
	getDoctorByIdSchema,
	getPatientByPhoneSchema
} from "@/infra/ValidationSchemas";
import { validateBody, validateParams } from "@/infra/ValidationMiddleware";
import { errorHandling } from "./helpers/ErrorHandling";

export default class Router {
	app: express.Express;

	constructor(
		readonly doctorController: DoctorController,
		readonly patientController: PatientController
	) {
		this.app = express();
		this.app.use(cors());
		this.app.use(helmet());
		this.app.use(express.json());
		this.app.use(errorHandling);

		this.setRoutes();
	}

	private setRoutes() {
		// rotas da aplicação
		this.app.get("/", (req, res) => {
			res.send("Hello World");
		});

		this.app.post(
			"/authenticate",
			validateBody(authenticationSchema),
			this.patientController.authenticate
		);
		this.app.get("/doctors", this.doctorController.listDoctor);
		this.app.get(
			"/doctor/:id",
			validateParams(getDoctorByIdSchema),
			this.doctorController.getDoctorById
		);
		this.app.post("/patient", this.patientController.createPatient);
		this.app.get(
			"/patient/:phone",
			validateParams(getPatientByPhoneSchema),
			this.patientController.getPatientByPhone
		);
		this.app.post(
			"/patient/:patientId/appointment",
			validateParams(createPatientPatientIdSchema),
			validateBody(createAppointmentAgendaIdSchema),
			this.patientController.createAppointment
		);
	}

	public start(port: number) {
		this.app.listen(port, () => {
			console.log(`Server is running on port ${port}`);
		});
	}
}
