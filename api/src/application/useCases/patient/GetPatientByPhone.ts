import DatabaseService from "@/infra/DatabaseService";
import { NotFoundError } from "@/infra/helpers/Errors";

export default class GetPatientByPhoneUseCase {
	constructor(readonly databaseService: DatabaseService) {}

	async execute(phone: string) {
		const INCLUDE_APPOINTMENT = true;
		const INCLUDE_DOCTOR = true;
		const patient = await this.databaseService.getPatientByPhone(
			phone,
			INCLUDE_APPOINTMENT,
			INCLUDE_DOCTOR
		);

		if (!patient) {
			throw new NotFoundError("No patient found");
		}

		return patient;
	}
}
