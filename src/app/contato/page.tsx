"use client";

import React, { useState } from "react";
import arrowUpRight from "./../assets/arrow-up-right.svg";
import Header from "./../components/HeaderSecundary";
import Footer from "./../components/Footer";
import envelope from "@/app/assets/envelope.svg";
import facebook from "@/app/assets/Facebook.svg";
import linkedin from "@/app/assets/Linkedin.svg";

const Contato: React.FC = () => {
  const [enviado, setEnviado] = useState(false);

  if (!enviado)
    return (
      <div className="flex overflow-hidden flex-col justify-center bg-[#09160F]">
        <Header title="Entre em contato" />
        <main className="flex flex-col items-center w-full max-md:max-w-full">
          <section className="flex my-16 max-w-full text-sm flex-col sm:flex-row leading-6 gap-8 w-[90%] lg:w-[70%] max-md:mt-10 text-[#EFFFFA]">
            <div className="w-full sm:w-1/2 pr-4">
              <h1 className="text-[#2CEAB0] font-bold text-2xl mb-4">
                Para falar conosco, preencha o formulário ao lado ou envie um
                e-mail.
              </h1>
              <p className="mb-4">
                Digite seu melhor e-mail e revise os detalhes antes de enviar.
                Dessa forma, um de nossos especialistas poderá entrar em
                contato.
              </p>

              <div className="h-px w-full bg-[#EFFFFA]/20 my-9" />
              <div className="flex flex-col">
                <p className="mb-4">Envie um e-mail para nosso time</p>
                <div className="flex items-end gap-2">
                  <img
                    loading="lazy"
                    src={envelope.src}
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                  <p className="underline">contact@paguesafe.com</p>
                </div>
              </div>
              <div className="h-px w-full bg-[#EFFFFA]/20 my-9" />
              <div className="flex flex-col">
                <p className="text-[#2CEAB0] font-bold text-sm mb-4">
                  Onde Estamos
                </p>

                <p className="underline">
                  Av. Andrômeda, 723 - Alphaville, Barueri - SP, 06473-000
                </p>
              </div>

              <div className="h-px w-full bg-[#EFFFFA]/20 my-9" />

              <p className="mb-4">Siga nossas redes sociais</p>
              <div className="flex items-end gap-3">
                <img
                  loading="lazy"
                  src={facebook.src}
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <img
                  loading="lazy"
                  src={linkedin.src}
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <form
                className="flex flex-col self-stretch my-auto text-sm leading-snug text-teal-400 min-w-[240px] w-[489px] max-md:max-w-full"
                onSubmit={() => {
                  setEnviado(true);
                }}
              >
                <label htmlFor="name" className="sr-only">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  className="bg-transparent gap-2 self-stretch p-4 w-full rounded-xl border border-solid border-teal-50 border-opacity-20 max-md:max-w-full"
                  placeholder="Nome*"
                  required
                />
                <label htmlFor="email" className="sr-only">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  className="bg-transparent gap-2 self-stretch p-4 mt-3 w-full rounded-xl border border-solid border-teal-50 border-opacity-20 max-md:max-w-full"
                  placeholder="E-mail*"
                  required
                />
                <label htmlFor="whatsapp" className="sr-only">
                  Whatsapp
                </label>
                <input
                  id="whatsapp"
                  type="tel"
                  className="bg-transparent flex-1 shrink gap-2 self-stretch p-4 mt-3 w-full rounded-xl border border-solid border-teal-50 border-opacity-20 max-md:max-w-full"
                  placeholder="Whatsapp*"
                  required
                />
                <label htmlFor="message" className="sr-only">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  className="bg-transparent gap-2 px-4 pt-4 pb-24 mt-3 w-full rounded-xl border border-solid border-teal-50 border-opacity-20 min-h-[136px] max-md:max-w-full"
                  placeholder="Mensagem*"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="flex gap-2 justify-center items-center self-start px-6 py-3 mt-3 font-bold bg-teal-400 rounded-xl min-h-[45px] text-teal-950 max-md:px-5"
                >
                  <span className="self-stretch my-auto">Enviar mensagem</span>
                  <img
                    loading="lazy"
                    src={arrowUpRight.src}
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </button>
              </form>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );

  return (
    <div className="flex overflow-hidden flex-col justify-center bg-[#09160F]">
      <Header title="Entre em contato" />
      <main className="flex flex-col items-center w-full max-md:max-w-full">
        <section className="flex flex-col my-24 max-w-full text-sm text-center w-[400px]  max-md:mt-10 text-teal-50  justify-center items-center gap-2 py-24">
          <p>Obrigado</p>
          <h1 className="text-[40px] font-bold text-teal-400 leading-10">
            Mensagem enviada com sucesso!
          </h1>
          <p>
            Agradecemos seu contato. Um de nossos especialistas entrará em
            contato com você em breve. Até mais tarde.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
