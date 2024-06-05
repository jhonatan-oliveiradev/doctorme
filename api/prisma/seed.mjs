import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const specialities = [
	"Cardiologista",
	"Endocrinologista",
	"Clinico Geral",
	"Pediatra",
	"Urologista",
	"Dermatologista",
	"Ginecologista",
	"Oftalmologista",
	"Ortopedista",
	"Otorrinolaringologista",
	"Psiquiatra",
	"Nutricionista"
];

function createDoctor() {
	const speciality =
		specialities[Math.floor(Math.random() * specialities.length)];
	const experience = `${Math.floor(Math.random() * 5) + 1} anos de experiência`;

	const doctor = {
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		city: faker.location.city(),
		state: faker.location.state(),
		speciality,
		bio: `Dr formado em ${speciality} com ${experience}`,
		picture: `photo-${Math.floor(Math.random() * 9)}.jpg`,
		price: Number(faker.commerce.price({ min: 100, max: 500 })),
		availability: "Segunda à Sexta das 10:00 às 16:00",
		experience,
		attendances: Math.floor(Math.random() * 10),
		address: faker.location.streetAddress()
	};

	return doctor;
}

function generateAgenda(quantity) {
	const dates = [
		"2024-06-09 14:00:00",
		"2024-06-07 10:30:00",
		"2024-06-15 13:00:00",
		"2024-06-09 11:00:00",
		"2024-06-11 09:00:00",
		"2024-06-20 15:00:00",
		"2024-06-06 10:00:00"
	];

	return dates.splice(0, quantity);
}

async function main() {
	console.log(`Seed está iniciando... 🌱`);
	const ROWS_QUANTITY = 10;

	for (let index = 0; index < ROWS_QUANTITY; index++) {
		// quantidade de médicos para serem inseridos
		const ITEMS_AGENDA = Math.floor(Math.random() * 5);

		const doctor = createDoctor();
		const agenda = generateAgenda(ITEMS_AGENDA);

		await prisma.doctor.create({
			data: {
				...doctor,
				agenda: {
					createMany: {
						data: agenda.map((item) => ({
							date: new Date(item).toISOString()
						}))
					}
				}
			}
		});
	}
	console.log(`Seed concluído com sucesso... 🎉`);
}

main();
