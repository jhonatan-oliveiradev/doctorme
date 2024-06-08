import { Header } from "@/components/header";
import { Icon } from "@/components/icon";
import { formatHour } from "@/other/helpers";
import Image from "next/image";

export default function Doctor({
  params,
}: Readonly<{ params: { id: string } }>) {
  const doctor = {
    firstName: "Vinicius",
    lastName: "Campos",
    specialty: "Oftalmologista",
    address: "Av. Paulista, 123",
    state: "SP",
    city: "São Paulo",
    photo: "/photos/photo-4.jpg",
    bio: "Médico formado pela FMU com especialidade em Oftalmologia",
    phone: "(11) 1234-5678",
    email: "vinicius.campos@gmail.com",
    price: "R$ 200,00",
    attendances: 40,
    experience: "8 anos",
    availability: "Segunda à sexta - 8h às 18h",
    agenda: [
      {
        id: 1,
        date: "2024-06-07T12:00:00.0002",
        available: true,
      },
      {
        id: 2,
        date: "2024-06-07T13:00:00.0002",
        available: true,
      },
      {
        id: 3,
        date: "2024-06-07T14:00:00.0002",
        available: false,
      },
      {
        id: 4,
        date: "2024-06-07T15:00:00.0002",
        available: true,
      },
      {
        id: 5,
        date: "2024-06-07T16:00:00.0002",
        available: true,
      },
      {
        id: 6,
        date: "2024-06-07T17:00:00.0002",
        available: true,
      },
      {
        id: 7,
        date: "2024-06-07T18:00:00.0002",
        available: true,
      },
      {
        id: 8,
        date: "2024-06-07T19:00:00.0002",
        available: true,
      },
      {
        id: 9,
        date: "2024-06-07T20:00:00.0002",
        available: true,
      },
    ],
  };
  const fullNameDoctor = doctor.firstName + " " + doctor.lastName;
  const fullLocation =
    doctor.address + " - " + doctor.city + ", " + doctor.state;

  return (
    <>
      <Header href="/" title="Agenda" iconClassName="w-4 h-4" />
      <div className="mt-5 flex flex-col gap-5">
        <div className="flex gap-4 rounded-xl bg-[#459487] p-4 text-white">
          <Image
            src={doctor.photo}
            alt={fullNameDoctor}
            width={76}
            height={76}
            className="rounded-xl"
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-sm font-semibold">Dr. {fullNameDoctor}</h1>
            <p className="text-xs">{doctor.specialty}</p>
            <p>
              <Icon name="map" className="h-4 w-4">
                <span className="text-xs">
                  {doctor.city}, {doctor.state}
                </span>
              </Icon>
            </p>
          </div>
        </div>

        <p className="border border-zinc-100 p-4 text-sm">
          Médico formado pela FMU com especialidade em Oftalmologia
        </p>
        <div className="flex justify-center border-b border-b-zinc-100 py-2">
          <div className="w-1/2 text-sm">
            <h2 className="text-zinc-400">Valor Consulta</h2>
            <p className="font-semibold">{doctor.price}</p>
          </div>
          <div className="w-1/2 text-sm">
            <h2 className="text-zinc-400">Atendimentos</h2>
            <p className="font-semibold">{doctor.attendances}</p>
          </div>
        </div>
        <div className="flex justify-center border-b border-b-zinc-100 py-2">
          <div className="w-1/2 text-sm">
            <h2 className="text-zinc-400">Formação</h2>
            <p className="font-semibold">Dr - Especialista</p>
          </div>
          <div className="w-1/2 text-sm">
            <h2 className="text-zinc-400">Experiência</h2>
            <p className="font-semibold">{doctor.experience}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center border-b border-b-zinc-100 py-2">
          <div className="w-1/2 text-sm">
            <h2 className="text-zinc-400">Disponibilidade</h2>
            <p className="font-semibold">{doctor.availability}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center border-b border-b-zinc-100 py-2">
          <div className="w-1/2 text-sm">
            <h2 className="text-zinc-400">Localização</h2>
            <p className="font-semibold">{fullLocation}</p>
          </div>
        </div>

        <div>
          <h2 className="text-center font-semibold">Horários disponíveis</h2>
          <div>
            <div>Hoje</div>
            <Agenda agenda={doctor.agenda} />
          </div>
        </div>
      </div>
    </>
  );
}

type AgendaProps = {
  id: number;
  date: string;
  available: boolean;
};

function Agenda({ agenda }: { agenda: AgendaProps[] }) {
  return (
    <div>
      {agenda.map((item) => (
        <AgendaButton availability={true} key={item.id} {...item} />
      ))}
    </div>
  );
}

function AgendaButton({
  date,
  availability,
}: {
  date: string;
  availability: boolean;
}) {
  return (
    <button className="rounded-md bg-green-100 text-sm font-semibold text-green-500">
      {formatHour(new Date(date))}
    </button>
  );
}
