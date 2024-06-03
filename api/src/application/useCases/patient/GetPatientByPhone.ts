import DatabaseService from "@/infra/DatabaseService";

export default class GetPatientByPhoneUseCase {
	constructor(readonly databaseService: DatabaseService) {}

	async execute(phone: string) {
		const INCLUDE_APPOINTMENT = true;
		const patient = await this.databaseService.getPatientByPhone(
			phone,
			INCLUDE_APPOINTMENT
		);

		if (!patient) {
			throw new Error("No patient found");
		}

		return patient;
	}
}
