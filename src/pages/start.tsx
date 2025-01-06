import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";

export function Start() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="flex h-svh w-full bg-zinc-500">
      <div className="itens-center flex h-full w-full max-w-[50%] flex-col justify-center bg-zinc-50 ps-20 text-start dark:bg-zinc-800 dark:text-zinc-100">
        <button className="absolute top-5" onClick={() => darkModeHandler()}>
          {dark && <SunIcon />}
          {!dark && <MoonIcon />}
        </button>
        <p className="text-2xl font-extrabold text-zinc-950 dark:text-zinc-100">
          Hello
        </p>
        <span className="break-normal bg-clip-text text-8xl font-extrabold text-transparent text-zinc-950 dark:text-zinc-100">
          I'M <strong className="text-yellow-500">VITHOR</strong>
        </span>
        <p className="mt-5 w-fit bg-yellow-500 px-5 font-bold text-zinc-950 dark:text-zinc-100">
          Desenvoledor Back-End
        </p>
        <p className="w-full max-w-[50%] pt-5 text-sm font-extralight text-zinc-950 dark:text-zinc-100">
          Tenho aproximadamente um ano de experiência como desenvolvedor e já
          participei de diversos projetos. Caso queira saber mais, é só{" "}
          <strong className="font-semibold">clicar abaixo</strong>!
        </p>
        <div className="mt-10">
          <button
            onClick={(e) => {
              let about = document.getElementById("about");
              e.preventDefault();
              about && about.scrollIntoView();
            }}
            className="rounded-3xl bg-yellow-400 px-4 py-2 font-bold text-zinc-50 dark:text-zinc-900"
          >
            Explore Mais
          </button>
        </div>
      </div>
      <div className="flex h-full w-full items-end justify-center">
        <img src={"./assets/eu3.png"} className="h-[130%]" alt="" />
      </div>
    </div>
  );
}
