import { PrismaClient } from "@prisma/client";

export default class DatabaseService {
	constructor(readonly connection: PrismaClient) {}
	listDoctor() {
		// lógica de acesso ao banco de dados
		return this.connection.doctor.findMany();
	}
}

export const database = new DatabaseService(new PrismaClient());
