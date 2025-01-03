import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

export function Projects() {
  return (
    <div className="dark: flex h-screen w-full flex-col items-center bg-zinc-50 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-100">
      <div className="flex h-full w-full max-w-[1320px] flex-col justify-center">
        <div className="flex h-full max-h-[20%] w-full">
          <h1 className="underline-offset-6 flex w-full items-center justify-center pb-10 text-center text-8xl font-extrabold underline decoration-yellow-500 decoration-4 underline-offset-8">
            PROJETOS
          </h1>
        </div>
        <h2 className="text-sm"></h2>
        <div className="swiper-3 flex h-full max-h-[600px] w-full pt-10">
          <Swiper spaceBetween={5} slidesPerView={3} className="swiper-3">
            <SwiperSlide className="h-full w-full text-center">
              <div className="h-full w-full">
                <div className="h-[50%] w-full bg-project1 bg-cover bg-center"></div>
                <h1 className="pt-2 text-xl">Integração Ifood</h1>
                <p className="flex h-full items-start justify-start pt-5 text-sm">
                  Realizei uma integração entre o sistema Consinco e o iFood,
                  automatizando o processo de atualização dos itens de venda no
                  iFood. Por meio dessa solução, os dados dos produtos eram
                  extraídos diretamente do endPoint da Consinco e enviados para
                  a plataforma do iFood, garantindo que as informações
                  estivessem sempre atualizadas e alinhadas com o inventário.
                  Essa integração otimizou o tempo de operação e reduziu erros
                  manuais no gerenciamento de cardápios.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full w-full text-center">
              <div className="h-full w-full">
                <div className="h-[50%] w-full bg-project2 bg-cover bg-center"></div>
                <h1 className="pt-2 text-xl">Efi Payment</h1>{" "}
                <p className="flex h-full items-start justify-start pt-5 text-sm">
                  Integração com a plataforma Efi Payment, utilizando seus
                  endpoints de pagamento para otimizar transações e operações
                  financeiras. A solução permitiu consumir os dados de forma
                  segura e eficiente, garantindo a automação de processos e a
                  confiabilidade nas transações realizadas. Essa integração foi
                  fundamental para simplificar o fluxo de pagamentos e melhorar
                  a experiência dos usuários.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-full w-full text-center">
              <div className="h-full w-full">
                <div className="h-[50%] w-full bg-project3 bg-cover bg-center"></div>
                <h1 className="pt-2 text-xl">Telegram Bot</h1>
                <p className="flex h-full items-start justify-start pt-5 text-sm">
                  Desenvolvi uma aplicação integrada ao Telegram que
                  automatizava o envio de dados extraídos de uma página para um
                  grupo do Telegram de forma periódica. A solução foi projetada
                  para capturar e processar as informações da página, garantindo
                  a atualização constante do grupo com dados relevantes e em
                  tempo hábil.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
