import DatabaseService from "@/infra/DatabaseService";

export default class ListDoctorUseCase {
	constructor(readonly database: DatabaseService) {}

	async execute() {
		// lógica de negócio
		const doctors = await this.database.listDoctor();

		if (!doctors) {
			throw new Error("No doctors found");
		}

		return doctors;
	}
}
