import DatabaseService from "@/infra/DatabaseService";
import { NotFoundError } from "@/infra/helpers/Errors";

export class GetDoctorByIdUseCase {
	constructor(readonly databaseService: DatabaseService) {}

	async execute(id: number) {
		const INCLUDE_AGENDA = true;
		const doctor = await this.databaseService.getDoctorById(id, INCLUDE_AGENDA);

		if (!doctor) {
			throw new NotFoundError("No doctor found");
		}

		return doctor;
	}
}
