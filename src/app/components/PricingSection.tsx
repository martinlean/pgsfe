import React from "react";
import womanPix from "./../assets/woman-pix.png";
import boletos from "./../assets/boleto.png";
import cards from "./../assets/cards.png";
import clsx from "clsx";
import TitleSection from "./TitleSection";
import barcode from "@/app/assets/barcode.svg";
import pixIcon from "@/app/assets/pix-icon.svg";
import creditCardIcon from "@/app/assets/credit-card-icon.svg";

type PricingCard = {
  image: string;
  icon: string;
  title: string[];
};

const pricingCards: PricingCard[] = [
  {
    image: cards.src,
    icon: creditCardIcon.src,
    title: ["Cartão de", "Crédito D+2"]
  },
  {
    image: womanPix.src,
    icon: pixIcon.src,
    title: ["PIX D+0"]
  },
  {
    image: boletos.src,
    icon: barcode.src,
    title: ["Boleto D+0"]
  }
];

const PricingSection: React.FC = () => {
  return (
    <section className="mt-24 w-full ">
      <TitleSection
        title="O que oferecemos"
        subTitle="Taxas e tarifas"
        text="Taxas baixas e aprovações altas, tudo para alavancar o seu negócio."
      />
      <div className="flex flex-col lg:flex-row gap-8 w-full lg:w-full h-fit sm:mt-44 lg:mt-0">
        {pricingCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col grow shrink relative flex-1 aspect-square"
          >
            <div
              className={clsx(
                "flex rounded-3xl gap-2 justify-end items-end flex-1 relative",
                index === 0 && "bg-[#2CEAB0]",
                index === 1 && "bg-[#EFFFFA] overflow-hidden",
                index === 2 && "bg-[#2CEAB0] overflow-hidden"
              )}
            >
              <img
                loading="lazy"
                src={card.image}
                alt={`${card.title} illustration`}
                className={clsx(
                  "object-contain rounded-none aspect-[0.97] absolute ",
                  index === 0 &&
                    "left-[5%] -top-[16%] w-[110%] h-[120%] animate-float",
                  index === 1 && "left-[25%] bottom-0 w-[85%]",
                  index === 2 && "h-full animate-float"
                )}
              />
            </div>
            <div className="flex z-10 absolute bottom-[25%] left-[3%] flex-col justify-start items-start mx-8 mt-0 text-lg font-bold leading-6 text-teal-950 w-[70%]">
              <img
                loading="lazy"
                src={card.icon}
                alt=""
                className="object-contain w-10 aspect-square"
              />
              <div className="mt-12 absolute">
                {card.title.map((text, index) => {
                  return (
                    <h2 className="text-lg" key={text + index}>
                      {text}
                    </h2>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
