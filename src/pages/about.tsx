import "swiper/css/bundle";
import { HardSkills } from "../components/hardSkills";
export function About() {
  return (
    <div className="screen flex min-h-screen w-full flex-col items-center justify-center bg-zinc-50 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-100">
      <div className="flex h-full max-h-[20%] w-full">
        <h1 className="flex w-full items-center justify-center pb-10 text-center text-8xl font-extrabold underline decoration-yellow-500 decoration-4 underline-offset-8">
          SOBRE
        </h1>
      </div>
      <div className="flex max-w-[1320px] flex-col items-center justify-center">
        <h1 className="pb-5 text-lg">
          Olá, me chamo <strong>Vithor Mitsuyoshi Saito</strong>, sou de
          Curitiba PR, e atualmente atuo como desenvolvedor back-end,
          especializado na construção de aplicações web e integração de{" "}
          <strong>APIs</strong>. Participei de diversos projetos que trouxeram
          desafios variados, todos realizados com sucesso!
        </h1>
        <p className="pb-5 text-sm">
          Com aproximadamente um ano de experiência como desenvolvedor, tive a
          oportunidade de explorar diversas tecnologias para aprimorar o
          desenvolvimento de aplicações. Durante esse período, adquiri
          conhecimento em ferramentas como{" "}
          <strong>
            Node, Fastify, Express, Vitest, Vite, GitHub, GitLab, TypeORM,
            Prisma, React, Docker, MySQL, Oracle, DBeaver, Figma
          </strong>{" "}
          e <strong>Notion</strong>. Essas ferramentas fazem parte do meu dia a
          dia e contribuem significativamente para o desenvolvimento eficiente
          de projetos.
        </p>
        <p className="pb-5 text-sm">
          Além de utilizar essas ferramentas, aprofundei meus conhecimentos em
          <strong>Typescript e Javascript</strong>, o que me permitiu enfrentar
          problemas complexos de forma criativa e encontrar soluções eficazes.
          Estou sempre em busca de novos desafios para evoluir como profissional
          e contribuir para o sucesso das equipes em que atuo.
        </p>
        <div className="flex h-full w-full max-w-[1320px]">
          <HardSkills />
        </div>
        <div className="flex w-full">
          <div className="w-full max-w-[40%] pt-5">
            <h2 className="pb-5 text-xl">Soft Skills</h2>
            <h3 className="text-md font-semibold">Trabalho em Equipe</h3>
            <p className="pb-2 text-sm">
              Aprimorado ao longo de vários anos de trabalho com diversas
              pessoas, sendo especialmente reforçado no contexto da área de
              tecnologia.
            </p>
            <h3 className="text-md font-semibold">Resolução de Problemas</h3>
            <p className="pb-2 text-sm">
              Com foco na análise de cenários complexos e na busca constante
              pela otimização de processos.
            </p>
            <h3 className="text-md font-semibold">Atenção aos Detalhes</h3>
            <p className="pb-2 text-sm">
              Sempre atento às melhores práticas para o desenvolvimento de
              aplicações, com foco na qualidade e eficiência.
            </p>
            <h3 className="text-md font-semibold">Facilidade em Comunicação</h3>
            <p className="pb-2 text-sm">
              Aprimorada diariamente em trocas de ideias e no alinhamento
              constante entre a equipe.
            </p>
          </div>
          <div className="flex w-full flex-col ps-5 pt-5">
            <h2 className="pb-5 text-xl">Formação Acadêmica</h2>
            <div className="flex h-full flex-col gap-3">
              <div className="flex gap-5">
                <img
                  src={"public/assets/pucpr.png"}
                  className="w-24 bg-zinc-50 dark:bg-zinc-100"
                  alt=""
                />
                <p>
                  <strong>Análise em Desenvolvimento de Sistemas</strong> - ADS.
                  Atualmente cursando o último período, tive contato com
                  diversos temas, como: POO, Desenvolvimento Mobile, Arquitetura
                  de Software, Metodologias Ágeis, entre outros.
                </p>
              </div>
              <div className="flex gap-5">
                <img
                  src={"/assets/alura.png"}
                  className="w-24 bg-zinc-50 dark:bg-zinc-100"
                  alt=""
                />
                <p>
                  <strong>Alura</strong> - Com um ano de curso, aprofundei meus
                  conhecimentos nas linguagens de programação{" "}
                  <strong>Javascript</strong> e <strong>Typescript</strong>.
                </p>
              </div>
              <div className="flex gap-5">
                <img
                  src={"./public/assets/rockseat.png"}
                  className="w-24 bg-zinc-50 dark:bg-zinc-100"
                  alt=""
                />
                <p>
                  <strong>Rocketseat</strong> - Realizei projetos reais com
                  ênfase em boas práticas de desenvolvimento e ferramentas
                  modernas utilizadas no cotidiano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
