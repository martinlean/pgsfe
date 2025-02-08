import React from "react";
import Button from "./Button";
import arrowUpRight from "./../assets/arrow-up-right.svg";
import users from "../assets/users.svg";
import user1 from "../assets/images-banner/user1.webp";
import user2 from "../assets/images-banner/user2.webp";
import user3 from "../assets/images-banner/user3.webp";
import Link from "next/link";
import { AvatarCircles } from "./AvatarCircles";

const Hero: React.FC = () => {
  return (
    <section className="z-10 left-[3%] absolute flex flex-col mt-[20%] sm:mt-[10%] mb-0 max-w-full font-semibold text-teal-50 sm:w-[30%] lg:w-[33%] xl:w-[27%]">
      <h1 className="text-[40px] leading-[50px] sm:text-[26px] lg:text:[56px] xl:text-[60px] sm:leading-[30px] lg:leading-[40px] xl:leading-[62px] w-full">
        Aumento de imediato 98,4% das suas conversões.
      </h1>
      <div className="flex gap-2 items-center self-start mt-6 sm:text-[14px] lg:text:[18px] xl:text-lg leading-5">
        <AvatarCircles avatarUrls={[user1.src, user2.src, user3.src]} />
        <div className="self-stretch ml-[25%] my-auto w-[75px]">
          +3.900 usuários
        </div>
      </div>
      <p className="mt-6 text-base font-medium leading-5 max-md:max-w-full">
        Gateway de alta conversão, segurança, saque rápido, antifraude eficiente
        e alta aprovação. Tudo que o seu negócio precisa em um só lugar.
      </p>
      <Link href="https://app.zelify.online/register" passHref>
        <Button className="flex gap-2 justify-center items-center self-start px-6 py-3 mt-6 text-sm font-bold rounded-xl min-h-[45px] max-md:px-5">
          <span className="self-stretch my-auto">Quero criar minha conta</span>
          <img
            loading="lazy"
            src={arrowUpRight.src}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </Button>
      </Link>

      {/* <div className="inline sm:hidden mt-10">
        <img
          loading="lazy"
          src={imgOfBannher.src}
          alt=""
          className="object-contain inset-0 w-full"
        />
      </div> */}
    </section>
  );
};

export default Hero;
