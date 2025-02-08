import React from "react";
import bgModal from "../assets/bg-modal-mobile.svg";
import facebook from "../assets/Facebook.svg";
import linkedin from "../assets/Linkedin.svg";
import close from "../assets/Fechar.svg";
import logo from "../assets/Logo.svg";
import Button from "./Button";
import Link from "next/link";

interface ModalMobileProps {
  handleToggleModal: () => void;
}

const ModalMobile: React.FC<ModalMobileProps> = ({ handleToggleModal }) => {
  return (
    <main className="flex flex-col mx-auto w-full">
      <header className="flex items-center justify-between w-full z-40 top-[45px] absolute px-6">
        <img src={logo.src} alt="Logo" className="object-contain" />
        <button className="inline md:hidden" onClick={handleToggleModal}>
          <img loading="lazy" src={close.src} alt="" className="object-cover" />
        </button>
      </header>

      <section className="flex relative flex-col justify-center px-6 w-full aspect-[0.462]">
        <img
          loading="lazy"
          src={bgModal.src}
          alt=""
          className="object-cover absolute inset-0 size-full"
        />

        <div className="flex relative flex-col items-center">
          <h1 className="self-stretch text-3xl font-semibold leading-8 text-center text-teal-50">
            Acesse nosso Checkout ou o Gateway.
          </h1>
          <div className="flex flex-col justify-center items-center mt-14 w-full gap-2">
            <Link href="https://app.zelify.online/login" passHref>
              <Button className="w-full py-4 rounded-2xl" variant="outline">
                Acessar Checkout
              </Button>
            </Link>
            <Link href="https://app.zelify.online/login" passHref>
              <Button className="w-full py-4 rounded-2xl">
                Acessar Gateway
              </Button>
            </Link>
          </div>
          <footer className="flex flex-col justify-center mt-14 max-w-full w-[166px]">
            <p className="text-sm text-center text-teal-50">
              O seu gateway de pagamento
            </p>
            <div className="flex gap-3 items-center self-center mt-6">
              <img
                loading="lazy"
                src={facebook.src}
                alt="Payment gateway logo 1"
                className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
              />
              <img
                loading="lazy"
                src={linkedin.src}
                alt="Payment gateway logo 2"
                className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
              />
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
};

export default ModalMobile;
