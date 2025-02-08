"use client";

import React from "react";
import Header from "./../components/HeaderSecundary";
import Footer from "./../components/Footer";
import PolicySection from "./../components/PolicySection";

const Cookies: React.FC = () => {
  const policySections = [
    {
      number: "01",
      title: "O que são Cookies",
      content: `
      São pequenos arquivos que ficam armazenados nos navegadores após o usuário acessar um site. Através deles é possível identificar o dispositivo de acesso utilizado. Os cookies possibilitam o reconhecimento do dispositivo e tornam possível diversas atividades durante a navegação pelo site, melhorando a experiência do usuário.`
    },
    {
      number: "02",
      title: "Por qual motivo a Pague Safe utiliza cookies?",
      content: `Utilizamos cookies para diversas funções, dentre as quais, possibilitar e facilitar a utilização das nossas Plataformas pelos usuários, diminuir a ocorrência de falhas durante o acesso às nossas Plataformas, possibilitar uma navegação personalizada pelos usuários, segmentar a publicidade que exibimos e analisar de forma estatística as preferências dos usuários.`
    },
    {
      number: "03",
      title: "Quando os Cookies são coletados e utilizados pela Pague Safe?",
      content: `A coleta e utilização de cookies ocorrerá durante a navegação em nossas Plataformas, conforme suas preferências.`
    },
    {
      number: "04",
      title: "Quais Cookies são coletados e utilizados pelo Pague Safe?",
      content: `Classificamos, de acordo com o uso, os cookies em: essenciais, desempenho, funcionalidade e publicidade.
Vejamos as características de cada um desses tipos de cookies:`,
      sections: [
        {
          title: "Essenciais",
          content: `
          São cookies necessários para o correto funcionamento de nossas Plataformas, responsáveis, por exemplo, pela manutenção de sessões ativas ou a definição de opções de configuração.
Esses cookies não identificam os usuários, e caso o usuário opte por bloqueá-los diretamente no navegador, nossas Plataformas poderão ficar indisponíveis a este usuário.
          `
        },
        {
          title: "Desempenho",
          content: `Esse tipo de cookie permite que a Pague Safe compreenda como o usuário interage com as nossas Plataformas. São realizadas coletas de dados de performance, tais como número de visitas, áreas acessadas, duração de acessos e mensagens de erro.
Os cookies de performance são coletados e tratados de forma anônima e caso o usuário os desative, nossas Plataformas poderão ficar indisponíveis a este usuário.`
        },
        {
          title: "Funcionalidade",
          content: `São cookies que permitem funcionalidades de personalização para os usuários das Plataformas, guardando e fornecendo escolhas de navegação, tais como idioma, região, login. Por envolver as opções e preferências do usuário, esses cookies podem, dependendo da circunstância, ajudar a identificá-lo.
Caso sejam desativados, algumas opções das Plataformas podem ficar indisponíveis.`
        },
        {
          title: "Publicidade",
          content: `Esses cookies possuem a capacidade de direcionar o conteúdo de marketing de nossas Plataformas de acordo com o perfil de acesso de cada usuário, por meio da coleta de alguns dados pessoais dos usuários.

Caso o usuário desative os cookies, não será possível proporcionar conteúdos com base nos seus interesses.

Os tipos de cookies vistos acima, podem ainda ser classificados quanto à duração de armazenamento e quanto a quem os administra:

• Os cookies não-persistentes são utilizados apenas enquanto o usuário navega em nosso site. Os navegadores os apagam logo após você fechar o nosso site. Já os cookies persistentes permanecem no navegador por maior período, sendo mantidos mesmo após o término da navegação em nosso site.

• Utilizamos em nossos sites tanto cookies persistentes quanto não-persistentes.

• Possuímos cookies próprios, emitidos pela Pague Safe e cookies de terceiros, que são administrados por empresas parceiras, ambos os tipos estão indicados na lista de cookies.

• Utilizamos cookies próprios e de terceiros em todos os nossos sites, conforme suas preferências.
Veja todos os cookies que utilizamos, acessando o nosso Portal de Preferências de Cookies, no rodapé do nosso site.`
        }
      ]
    },
    {
      number: "05",
      title: "Não quero permitir a coleta de Cookies, o que posso fazer?",
      content: `
      O usuário das Plataformas poderá desativar alguns dos cookies, através do Painel de Preferências de Cookies ou pode realizar a configuração do seu navegador, podendo:

      
a) ativar o modo de navegação sigilosa, disponível na maior parte dos navegadores, o qual permite que nenhum cookie permaneça no dispositivo do usuário após fechar a janela do navegador; ou
      

      b) configurar o bloqueio de cookies, nos limites e conforme instruções do navegador do usuário.

      Os navegadores também permitem que o usuário exclua os cookies que já estejam armazenados em seu computador.
Ressaltamos que, caso o usuário opte por não permitir a utilização de cookies, nossas Plataformas poderão não funcionar corretamente, e as suas funcionalidades também poderão tornar-se parcial ou totalmente indisponíveis.`
    }
  ];

  return (
    <div className="flex overflow-hidden flex-col justify-center bg-[#09160F]">
      <Header title="Aviso de cookies" />
      <main className="flex flex-col items-center w-full max-md:max-w-full">
        <section className="flex flex-col my-16 max-w-full text-sm leading-6 w-[90%] lg:w-[70%] max-md:mt-10">
          <p className="mb-4 text-teal-50">
            Para a Pague Safe transparência é fundamental, por isso, preparamos
            este aviso para informar de forma clara e direta como e em que
            momentos utilizamos cookies em nossos sites, portais e plataformas
            (“Plataformas”).
          </p>
          {policySections.map((section, index) => (
            <PolicySection
              key={index}
              number={section.number}
              title={section.title}
              content={section.content}
              sections={section.sections}
              gapBottom
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
