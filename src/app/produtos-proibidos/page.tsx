"use client";

import React from "react";
import Header from "../components/HeaderSecundary";
import Footer from "../components/Footer";
import PolicySection from "../components/PolicySection";
import { BanIcon } from "lucide-react";

const BlockedProducts: React.FC = () => {
  const blockedProductsSections = [
    {
      number: <BanIcon className="text-red-600  " />,
      title: "Produtos proibidos",
      content: `
• Antenas de TV e dispositivos para decodificação de sinais;

• Árvores de Natal;

• Consórcios/Seguros;

• Dispositivos TV Box de qualquer marca;

• Eletrodomésticos em geral;

• Purificadores de água;

• Móveis;

• Fraldas;

• Andaimes;

• Notebooks, peças, computadores, smartphones e tablets;

• Produtos com valor superior a R$ 1 mil;

• Venda online de cupons de ofertas;

• Veículos automotores (motos, carros, patinetes);

• Kits de vinho;

• Bicicletas;

• Kits de panela Red Silver;

• Medicamentos de qualquer tipo;

• Aparelho de jantar;

• Arma de CO2;

• Produtos alimentícios em geral;

• Itens não alinhados com nossos termos serão notificados para remoção;

• Robôs da loteria, do Pix, rifas, sorteios, entre outros;

• Assinaturas de streaming e aplicativos;

• Apps espiões ou de clonagem de celular;

• Conteúdo com nudez explícita;

• Cursos de terceiros (drive com + de 100 cursos);

• Produtos com promessas não cumpríveis;

• Seguidores/Curtidas de redes sociais;

• Venda de ingressos;

• Qualquer produto com características de vaquinha ou doação de dinheiro.

Caso seja identificada a venda de algum desses itens, você estará sujeito a bloqueio de saque, sendo necessário remover o item da comercialização.`
    },
    {
      number: <BanIcon className="text-red-600  " />,
      title: "Lista de produtos altamente proibidos",
      content: `
• Lotes de produtos, lotes de leilão, lotes de correio;

• Produtos relacionados a programas do Governo Federal, como o Voa Brasil;

• Produtos relacionados a acordos, limpar nome, acordo Serasa (termos como: Acordo, Valores a Receber, Resgate de valores, Resgate da Prosperidade, entre outros).

Caso seja identificada a venda de algum desses itens, você estará sujeito a bloqueio da conta, sendo descredenciado da plataforma.`
    }
  ];

  return (
    <div className="flex overflow-hidden flex-col justify-center bg-[#09160F]">
      <Header title="Produtos Proibidos" />
      <main className="flex flex-col items-center w-full max-md:max-w-full">
        <section className="flex flex-col my-16 max-w-full text-sm leading-6 w-[90%] lg:w-[70%] max-md:mt-10 text-teal-50 gap-4">
          <p className="text-teal-400 font-bold">Lista de produtos proibidos</p>
          <p>
            Lista de produtos proibidos Produtos que não podem ser
            comercializados ao utilizar os serviços da Pague Safe.
          </p>

          <p>
            Na Pague Safe, dedicamos esforços para proporcionar uma experiência
            segura e confiável a todos os nossos usuários. Para assegurar isso,
            estabelecemos políticas transparentes sobre produtos proibidos.
            Conheça a lista desses itens e compreenda as consequências caso
            sejam identificados em sua loja.
          </p>

          {blockedProductsSections.map((section, index) => (
            <PolicySection
              key={index}
              number={section.number}
              title={section.title}
              content={section.content}
              defaultExpanded={true}
              gapBottom
            />
          ))}
          <p className="text-teal-50">
            Na Pague Safe, valorizamos sua experiência, garantindo transparência
            para evitar surpresas futuras. Estamos aqui para proporcionar um
            ambiente confiável a todos os nossos usuários!
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlockedProducts;
