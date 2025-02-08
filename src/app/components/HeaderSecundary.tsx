import bgHeaderSecundary from "../assets/bg-header-secundary.png";
import React, { useState } from "react";
import Button from "./Button";
import menu from "../assets/Menu.svg";
import ModalMobile from "./ModalMobile";
import Link from "next/link";
import logo from "@/app/assets/Logo.svg";

interface HeaderSecundaryProps {
  title: string;
}

const HeaderSecundary: React.FC<HeaderSecundaryProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex overflow-hidden relative flex-col px-20 py-16 w-full min-h-[266px] max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src={bgHeaderSecundary.src}
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-wrap gap-5 justify-between w-full text-sm font-bold max-md:max-w-full">
        <Link href="/">
          <img
            loading="lazy"
            src={logo.src}
            alt="Pague Safe Logo"
            className="object-contain shrink-0 my-auto max-w-full aspect-[6.13] w-[196px]"
          />
        </Link>
        <nav className="gap-2 items-center hidden sm:flex">
          <a
            href="https://app.zelify.online/login"
            className="gap-2 self-stretch px-6 py-3.5 my-auto text-teal-50 rounded-xl border border-teal-400 border-solid max-md:px-5"
          >
            Acessar Checkout
          </a>
          <a
            href="https://app.zelify.online/login"
            className="gap-2 self-stretch px-6 py-3.5 my-auto bg-teal-400 rounded-xl text-teal-950 max-md:px-5"
          >
            Acessar Gateway
          </a>
        </nav>

        <button className="inline md:hidden" onClick={handleToggleModal}>
          <img
            loading="lazy"
            src={menu.src}
            alt="Menu"
            className="object-contain"
          />
        </button>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center h-dvh">
            <ModalMobile handleToggleModal={handleToggleModal} />
          </div>
        )}
      </div>
      <h1 className="relative self-center mt-20 text-3xl font-semibold leading-loose text-center text-teal-50 max-md:mt-10">
        {title}
      </h1>
    </header>
  );
};

export default HeaderSecundary;
