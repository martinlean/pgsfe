import React from "react";
import Button from "./Button";
import arrowUpRight from "./../assets/arrow-up-right.svg";
import bgSoundRequest from "./../assets/bg-sound-request.svg";
import Link from "next/link";

const CTASection: React.FC = () => {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-20 py-32 mt-12 sm:mt-40 w-full min-h-[519px] text-teal-950">
      <img
        loading="lazy"
        src={bgSoundRequest.src}
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col justify-center px-4 py-6 mb-0 max-w-full bg-teal-50 w-[410px] max-md:mb-2.5">
        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="text-4xl font-semibold leading-10 text-center">
            Você fatura mais de 100 mil por mês?
          </h2>
          <p className="self-stretch mt-4 text-base leading-6 text-center opacity-70 text-neutral-950">
            Temos taxas exclusivas para seu negócio, clique abaixo e entre em
            contato conosco.
          </p>
          <Link
            href="https://api.whatsapp.com/send?phone=551699875-3742&text=Ol%C3%A1,%20faturo%20mais%20que%20R$100k%20por%20m%C3%AAs%20e%20queria%20negociar%20as%20taxas..."
            passHref
          >
            <Button className="flex gap-2 justify-center items-center px-6 py-3.5 mt-4 text-sm font-bold rounded-xl max-md:px-5">
              <span className="self-stretch my-auto">
                Solicitar taxas exclusivas
              </span>
              <img
                loading="lazy"
                src={arrowUpRight.src}
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
