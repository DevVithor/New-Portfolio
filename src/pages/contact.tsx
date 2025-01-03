import { Instagram, Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <div className="flex h-screen w-full flex-col items-center bg-zinc-50 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-100">
      <div className="flex h-full w-full max-w-[1320px] flex-col text-start">
        <div className="flex h-full max-h-[20%] w-full flex-col items-center text-start">
          <h1 className="underline-offset-6 flex w-full items-center justify-center pb-10 text-center text-8xl font-extrabold underline decoration-yellow-500 decoration-4 underline-offset-8">
            CONTATO
          </h1>
          <p className="h-full w-full max-w-[800px] text-center">
            Se por acaso você se interessou pelos meus serviços, abaixo estão
            alguns meios de contato.
          </p>
        </div>
        <div className="mt-5 flex h-full w-full items-center justify-center gap-5">
          <div className="flex w-full max-w-[300px] flex-col items-center justify-center gap-2">
            <Phone size={70} className="text-zinc-300" />
            <h3 className="text-xl">Telefone de contato:</h3>
            <p>(41) 9 8769-4897</p>
          </div>
          <div className="flex w-full max-w-[300px] flex-col items-center justify-center gap-2">
            <Mail size={70} className="text-zinc-300" />
            <h3 className="text-xl">Email de contato:</h3>
            <p>devVithor@gmail.com</p>
          </div>
          <div className="flex w-full max-w-[300px] flex-col items-center justify-center gap-2">
            <Instagram size={70} className="text-zinc-300" />
            <h3 className="text-xl">Instagram profissional:</h3>
            <p>devVithor</p>
          </div>
        </div>
      </div>
    </div>
  );
}
