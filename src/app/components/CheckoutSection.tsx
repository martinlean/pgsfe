import React from "react";
import Button from "./Button";
import celular from "./../assets/imagem-celular.svg";
import bgSound from "./../assets/bg-sound.svg";
import bgGreen from "./../assets/bg-green.svg";
import { SlideOutSection } from "./SlideOutSection";
import arrowUpRight from "./../assets/arrow-up-right.svg";
import Link from "next/link";

const CheckoutSection: React.FC = () => {
  return (
    <section className="mt-24 w-full">
      <div className="flex gap-5 flex-col lg:flex-row">
        <div className="flex flex-col w-full lg:w-[43%]">
          <div className="flex flex-col justify-center self-stretch my-auto w-full text-sm font-bold text-teal-50">
            <h2 className="text-lg leading-8 text-emerald-500 max-md:max-w-full">
              Checkout próprio, com taxas de alta conversão
            </h2>
            <h3 className="mt-2 text-4xl font-semibold leading-10 max-md:max-w-full">
              Otimize e aumente as vendas do seu negócio digital com a Pague
              Safe
            </h3>
            <p className="mt-2 leading-6 opacity-70 max-md:max-w-full">
              Gere links de pagamento customizáveis para você vender online.
              Aumente suas vendas oferecendo produtos adicionais. Reconquiste
              clientes que abandonaram seu checkout com envios de e-mail e SMS.
            </p>
            <Link href="https://app.zelify.online/register" passHref>
              <Button className="flex gap-2 justify-center items-center self-start px-6 py-3 mt-2 rounded-xl min-h-[45px] max-md:px-5">
                <span className="self-stretch my-auto">
                  Quero criar minha conta
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
        <div className="flex w-full lg:w-[57%] justify-center items-center">
          <div className="w-full h-fit relative py-12 flex">
            <div className="w-full h-fit relative overflow-hidden rounded-[40px]">
              <img
                loading="lazy"
                src={bgSound.src}
                alt="Checkout interface demonstration"
                className="object-contain grow w-full rounded-none absolute"
              />
              <SlideOutSection>
                <img
                  loading="lazy"
                  src={bgGreen.src}
                  alt="Checkout interface demonstration"
                  className="object-contain grow w-full rounded-none "
                />
              </SlideOutSection>
            </div>

            <img
              loading="lazy"
              src={celular.src}
              alt="Checkout interface demonstration"
              className="object-contain grow w-full h-full rounded-none absolute top-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
