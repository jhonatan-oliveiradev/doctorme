import { Button } from "@/components/button";
import { Field } from "@/components/form";
import { Header } from "@/components/header";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <Header href="/" title="Crie conta" iconClassName="w-4 h-4" />
      <div className="py-4">
        <h1 className="text-xl font-bold">Criar conta</h1>
        <p className="text-sm">
          Por favor, informe seu nome e uma senha para criar sua conta.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Field
          labelProps={{ children: "Nome" }}
          inputProps={{
            placeholder: "Informe seu nome",
            type: "text",
            defaultValue: "",
            autoFocus: true,
          }}
        />
        <Field
          labelProps={{ children: "Telefone" }}
          inputProps={{
            placeholder: "Informe seu número de telefone",
            type: "text",
            defaultValue: "",
            autoFocus: true,
          }}
        />
        <Field
          labelProps={{ children: "Senha" }}
          inputProps={{
            placeholder: "Informe sua senha",
            type: "password",
            defaultValue: "",
          }}
        />

        <Button>Criar conta</Button>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center">
        <div className="relative mb-4 flex h-5 w-full items-center justify-center">
          <span className="absolute z-10 m-auto bg-white px-2 text-sm">Ou</span>
          <div className="absolute w-full border-b border-b-zinc-100"></div>
        </div>
        <p className="text-sm">
          Já está cadastrado?{" "}
          <Link
            href="/sign-in"
            className="font-semibold text-green-600 underline"
          >
            Acesse sua conta
          </Link>
        </p>
      </div>
    </>
  );
}
