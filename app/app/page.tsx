import { Header } from "@/components/header";
import { Icon } from "@/components/icon";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Header href="/sign-in" iconName="appointment" iconClassName="h-5 w-5">
        <div className="inline-flex items-center gap-[10px]">
          <Image
            src="/logo-doctorme.png"
            alt="DoctorMe"
            width={48}
            height={48}
          />
          <span className="text-3xl font-bold">DoctorMe</span>
        </div>
      </Header>
      <h1 className="text-2xl font-bold">
        Assistente pessoal{" "}
        <span className="flex w-full">para agendar consultas</span>
      </h1>
      <div className="flex flex-col gap-2">
        <div className="flex w-full gap-3">
          <div className="inline-flex rounded-xl bg-green-500 p-3">
            <div className="font-roboto text-white">
              <h2 className="text-sm font-semibold">Agendamento Hoje</h2>
              <p className="w-30 truncate text-xs">10:00 - Clínico Geral</p>
            </div>
          </div>
          <div className="inline-flex rounded-xl bg-green-500 p-3">
            <div className="font-roboto text-white">
              <h2 className="text-sm font-semibold">Agendamento Amanhã</h2>
              <p className="w-30 truncate text-xs">10:00 - Clínico Geral</p>
            </div>
          </div>
        </div>
        <div className="inline-flex">
          <Link
            href="/"
            className="inline-flex gap-2 rounded-2xl bg-green-500/50 p-2 pr-3 text-sm text-white"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white font-roboto text-xs font-semibold text-green-500/50">
              3
            </span>
            Meus agendamentos
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Médicos disponíveis</h2>
        <div className="flex justify-between">
          <Doctor
            doctorId="1"
            name="Dr. João Silva"
            speciality="Clínico Geral"
            location="São Paulo"
          />
          <Doctor
            doctorId="2"
            name="Dr. Mario Souza"
            speciality="Pediatra"
            location="São Paulo"
          />
        </div>
      </div>
    </div>
  );
}

type DoctorProps = Readonly<{
  doctorId: string;
  name: string;
  speciality: string;
  location: string;
}>;

function Doctor({ name, speciality, doctorId, location }: DoctorProps) {
  return (
    <Link
      href={`doctor/${doctorId}`}
      className="inline-flex w-full max-w-[150px] flex-col gap-3 rounded-xl border border-zinc-50 p-4 shadow"
    >
      <Image
        src={`/photos/photo-${doctorId}.jpg`}
        alt={name}
        width={76}
        height={76}
        className="rounded-lg"
      />
      <div className="flex flex-col gap-3">
        <h3 className="truncate text-base font-semibold">{name}</h3>
        <p className="truncate font-roboto text-sm text-gray-400">
          {speciality}
        </p>
      </div>
      <p>
        <Icon name="map" className="h-4 w-4 text-[#FFBB63]">
          {location}
        </Icon>
      </p>
    </Link>
  );
}
