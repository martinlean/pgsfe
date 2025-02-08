import React from "react";
import bgFooter from "./../assets/bg-footer.svg";
import logo from "./../assets/Logo.svg";
import facebook from "./../assets/Facebook.svg";
import linkedin from "./../assets/Linkedin.svg";
import dc from "./../assets/DC.svg";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="flex overflow-hidden flex-col w-full bg-teal-950">
      <div className="flex relative flex-col px-5 md:px-20 pt-12 pb-6 md:pt-24 md:pb-9 w-full min-h-[250px] md:min-h-[381px]">
        <img
          loading="lazy"
          src={bgFooter.src}
          alt=""
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="flex flex-col md:flex-row relative gap-6 md:gap-5 justify-between w-full">
          <div className="flex flex-col flex-1">
            <img
              loading="lazy"
              src={logo.src}
              alt="Pague Safe logo"
              className="object-contain w-32 aspect-[6.41]"
            />
            <div className="mt-4 text-sm text-teal-50">
              O seu gateway de pagamento
            </div>
            <div className="flex gap-3 items-center mt-6">
              <a href="#" aria-label="Facebook">
                <img
                  loading="lazy"
                  src={facebook.src}
                  alt=""
                  className="object-contain w-7 md:w-8 aspect-square"
                />
              </a>
              <a href="#" aria-label="Linkedin">
                <img
                  loading="lazy"
                  src={linkedin.src}
                  alt=""
                  className="object-contain w-7 md:w-8 aspect-square"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col flex-1 min-h-[125px] text-teal-50">
            <h3 className="font-bold text-emerald-500">
              Políticas da Pague Safe
            </h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/politicas-de-privacidade"
                  className="opacity-50 hover:opacity-100"
                >
                  Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/termos-de-uso"
                  className="opacity-50 hover:opacity-100"
                >
                  Termos de uso
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos-proibidos"
                  className="opacity-50 hover:opacity-100"
                >
                  Produtos proibidos
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="opacity-50 hover:opacity-100">
                  Aviso de cookies
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col flex-1 min-h-[125px] text-teal-50">
            <h3 className="font-bold text-emerald-500">Suporte</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/faq" className="opacity-50 hover:opacity-100">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/termos-de-compra"
                  className="opacity-50 hover:opacity-100"
                >
                  Termos de compra
                </Link>
              </li>
              <li>
                <Link
                  href="/espaco-do-consumidor"
                  className="opacity-50 hover:opacity-100"
                >
                  Espaço do consumidor
                </Link>
              </li>
              <li>
                <Link href="/contato" className="opacity-50 hover:opacity-100">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <p className="relative text-xs opacity-50 text-teal-50 max-w-full flex-1 mt-4 md:mt-0">
            A Pague Safe é uma empresa brasileira registrada no CNPJ nº
            31.699.157/0001-80 com sede na Av. Andrômeda, 723 - Alphaville,
            Barueri - SP, 06473-000
          </p>
        </div>
        <div className="relative shrink-0 mt-10 md:mt-16 w-full h-px bg-teal-50 border border-teal-50 border-solid opacity-10" />
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-6 text-xs leading-5 text-teal-50">
          <p className="flex-auto opacity-50 w-full md:w-[70%]">
            A atividade de subcredenciamento é dispensada de autorização do
            Banco Central do Brasil, conforme termos da Circular nº 3.885/2018.
            Demais dispositivos aplicáveis, como o disposto nas Circulares nº
            3.682/2013, 3.886/2018, 3.952/2019 e Resolução nº 24/2020 são
            rigorosamente cumpridos.
          </p>
          <img
            loading="lazy"
            src={dc.src}
            alt="Certification seal"
            className="object-contain aspect-[2.36] w-6 md:w-[26px]"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
