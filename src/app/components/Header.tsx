import React, { useState } from "react";
import Button from "./Button";
import menu from "../assets/Menu.svg";
import ModalMobile from "./ModalMobile";
import Link from "next/link";

type HeaderProps = {
  logo: string;
};

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex relative flex-wrap gap-5 justify-between w-full text-sm font-bold max-md:max-w-full">
      <Link href="/">
        <img
          loading="lazy"
          src={logo}
          alt="Company logo"
          className="object-contain shrink-0 my-auto max-w-full aspect-[6.13] w-[196px]"
        />
      </Link>
      <nav className="gap-2 items-center hidden sm:flex">
        <Link href="https://app.zelify.online/login" passHref>
          <Button
            variant="outline"
            className="gap-2 self-stretch px-6 py-3.5 my-auto rounded-xl border border-solid max-md:px-5 "
          >
            Acessar Checkout
          </Button>
        </Link>
        <Link href="https://app.zelify.online/login" passHref>
          <Button className="gap-2 self-stretch px-6 py-3.5 my-auto rounded-xl max-md:px-5 ">
            Acessar Gateway
          </Button>
        </Link>
      </nav>
      <button className="inline sm:hidden" onClick={handleToggleModal}>
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
    </header>
  );
};

export default Header;
