import { PrismaClient } from "@prisma/client";

export default class DatabaseService {
	constructor(readonly connection: PrismaClient) {}
	listDoctor() {
		// lógica de acesso ao banco de dados
		return this.connection.doctor.findMany();
	}

	getDoctorById(id: number, includeAgenda: boolean) {
		return this.connection.doctor.findUnique({
			where: { id },
			include: {
				agenda: includeAgenda
			}
		});
	}

	getPatientByPhone(phone: string, includeAppointment: boolean) {
		return this.connection.patient.findUnique({
			where: { phone },
			include: {
				appointment: includeAppointment
			}
		});
	}
}

export const database = new DatabaseService(new PrismaClient());
