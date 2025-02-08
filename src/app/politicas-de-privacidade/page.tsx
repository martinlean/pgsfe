"use client";

import React from "react";
import Header from "./../components/HeaderSecundary";
import Footer from "./../components/Footer";
import PolicySection from "./../components/PolicySection";

const PrivacyPolicy: React.FC = () => {
  const policySections = [
    {
      number: "01",
      title: "Introdução",
      content: `Esta Política de Privacidade ("Política") se aplica a todos os serviços prestados pela PAGUE SAFE LTDA, pessoa jurídica de direito privado, com sede na cidade de Cubatão, no Estado de São Paulo, Av. Andrômeda, 723 – Alphaville, Barueri – SP, 06473-0000, inscrita no CNPJ/MF sob o no 31.699.157/0001-80 ("PAGUE SAFE").

Visando proteger a sua privacidade, além de garantir a liberdade e o exercício de direitos ao titular de dados, a PAGUE SAFE apresenta a presente Política de Privacidade. Este documento tem o objetivo de informar, de forma clara e objetiva, sobre como é realizada a coleta, tratamento e armazenamento de dados pessoais essenciais para a prestação de seus serviços.
O titular dos dados pessoais declara-se ciente com esta Política e dá expresso consentimento para o Tratamento de suas Informações Pessoais pela PAGUE SAFE. Caso não concorde com o Tratamento de suas Informações Pessoais, na forma prevista nesta Política, deverá se abster de utilizar os serviços da PAGUE SAFE.

Caso o usuário seja Pessoa Jurídica, algumas condições previstas nesta Política poderão não ser aplicáveis, nos termos da Lei 13.709/2018.`
    },
    {
      number: "02",
      title: "Conceito",
      content: `Sem prejuízo de outras definições constantes nesta Política, as palavras e expressões abaixo indicadas, sempre que utilizadas pela primeira letra maiúscula, terão as seguintes definições:

"LGPD": Lei Geral de Proteção de Dados, a legislação brasileira no 13.709/2018, que regula o tratamento, proteção e privacidade de Dados Pessoais. Este documento estabelece diretrizes importantes e obrigatórias para a coleta, processamento e armazenamento de dados pessoais.

"Titular de dados pessoais": toda pessoa natural a quem se referem os dados que são objeto de tratamento.

"Dados Pessoais": informações pessoais que podem ser associadas a uma pessoa física identificada ou identificável. São exemplos de dados pessoais: nome completo, endereço, número de telefone, e-mail, dados bancários, data de nascimento, filiação e número de documentos oficiais (por exemplo, Carteira de Identidade – RG, passaporte, CPF/MF, dentre outros).

"ANPD": Autoridade Nacional de Proteção de Dados, órgão da administração pública federal responsável por zelar, implementar e fiscalizar o cumprimento da LGPD;

"Tratamento": toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.

"Encarregado de dados": pessoa indicada pelo controlador e operador para atuar como canal de comunicação entre o controlador, os Titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD);`
    },
    {
      number: "03",
      title: "Dados pessoais tratados pela Pague Safe e suas finalidades",
      content: `A PAGUE SAFE valoriza a sua confiança e se compromete a tratar os dados pessoais coletados observando os preceitos legais, a boa-fé e os princípios estritos da finalidade, adequação, necessidade, livre acesso, qualidade dos dados, transparência, segurança, prevenção, não discriminação, e responsabilização e prestação de contas.

A coleta de Dados Pessoais pode variar conforme o tipo de interação do Usuário com o site. Esses dados pessoais podem ser coletados diretamente do Usuário ou coletados automaticamente. A coleta dos dados pessoais pode ser realizada através dos seguintes meios:

• Dados de credenciamento ao sistema: nome completo, firma ou denominação social; número do CPF/MF, número de telefone; endereço de residência ou sede, filiação, endereço de e-mail;

• Execução do serviço prestado pela PAGUE SAFE: identificação de conta bancária de titularidade do usuário, contendo nome e número da instituição bancária, número de agência, número da conta corrente ou conta poupança;

• Recrutamento e seleção de candidatos: nome, foto, e-mail, dados para contato e informações referentes à carreira;

• Atendimento de suporte: Nome, e-mail, CPF e demais informações relacionadas à dúvida ou demanda direcionada à PAGUE SAFE;

• Direcionamento de marketing digital: Nome, e-mail e telefone;

• Registro de acesso à plataforma: Conjunto de informações referentes à data e hora de uso da Plataforma a partir de um determinado endereço IP, incluindo os cookies de acesso;

• Além das finalidades citadas acima, a PAGUE SAFE pode coletar dados pessoais para:

• Desenvolver e melhorar os produtos e serviços;

• Cumprir obrigações legais e regulatórias;

• Prevenir fraudes e garantir a segurança dos clientes;

• Fornecer produtos e serviços solicitados no Site;

A PAGUE SAFE também pode obter Informações Pessoais a partir de bancos de dados privados, com base no seu legítimo interesse e para cumprir obrigações regulatórias e contratuais. O website e serviços de internet da organização podem utilizar informações do dispositivo, dados de uso técnico e localização geográfica do usuário.`
    },
    {
      number: "04",
      title: "Compartilhamento de dados pessoais",
      content: `Os dados pessoais do titular podem ser compartilhados com parceiros e fornecedores para garantir as medidas contratadas; com autoridades competentes, quando requisitado, para apuração de condutas ilícitas; para proteção dos interesses da PAGUE SAFE em qualquer tipo de conflito, incluindo ações judiciais; em operações societárias que envolvam a PAGUE SAFE, como por exemplo, fusão, cisão, aquisição ou incorporação de empresas.

Ao compartilhar os dados, todas as medidas técnicas e organizacionais adequadas serão adotadas, visando à privacidade, confidencialidade e integridade das informações. Da mesma forma, sempre será exigido dos envolvidos nessa forma de tratamento, o cumprimento das mesmas diretrizes de segurança e proteção de Dados Pessoais exigidas pela legislação.`
    },
    {
      number: "05",
      title: "Diretrizes de armazenamento e exclusão de dados pessoais",
      content: `A LGPD busca empoderar e dar mais autonomia ao titular dos dados pessoais e, para isso, em seu artigo 18, determina um rol de direitos a serem exercidos pelo titular dos dados. São esses direitos:

• Confirmação da existência de tratamento de dados pessoais;

• Acesso aos dados pessoais;

• Correção de dados pessoais incompletos, inexatos ou desatualizados;

• Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD;

• Eliminação dos dados pessoais tratados com o consentimento;

• Saber informações das empresas com as quais a PAGUE SAFE compartilhou e/ou recebeu seus dados pessoais;

• Solicitar informações de quais terceiros compartilharam e/ou receberam seus dados pessoais;

• O Titular tem o direito de consentir ou não com determinados tratamentos de dados, mas isso pode impedir que certos processos pertinentes e de interesse sejam executados;

• Revogação do consentimento;

• Solicitar revisão de decisões automatizadas;

• Portabilidade a outros prestadores de serviços e direito de petição perante à Autoridade Nacional de Proteção de Dados (ANPD);

• O titular de dados tem o direito de entrar em contato e/ou peticionar à Autoridade Nacional de Proteção de Dados(ANPD) para apresentar uma reclamação contra as práticas de proteção de dados e privacidade da PAGUE SAFE.

Caso você deseje exercer qualquer um desses direitos, entre em contato conosco por meio do canal privacidade@paguesafe.com

Ademais, cabe ao titular dos dados pessoais que se encarregue de:

• Inserir informações verdadeiras no site PAGUE SAFE

• Manter a confidencialidade de sua conta e senha;

• Cumprir todas as determinações e procedimentos previstos nesta Política;`
    },
    {
      number: "07",
      title: "Medidas de segurança",
      content: `As Informações Pessoais coletadas pela PAGUE SAFE são armazenadas em servidores seguros, fazendo uso de mecanismos criptográficos, com a utilização de medidas de segurança de informação constantemente atualizadas. As informações serão mantidas confidenciais e serão adotadas todas as medidas possíveis contra perda, roubo, uso indevido, alteração e acesso não autorizado.

A PAGUE SAFE emprega padrões de segurança avançados, incluindo firewalls, antivírus e outros softwares que auxiliam na proteção de hackers e o não vazamento das informações pessoais armazenadas.

Apesar de a PAGUE SAFE se dedicar a proteger a Plataforma, o titular é responsável por proteger e manter a privacidade de seu cadastro e informações pessoais. A PAGUE SAFE não se responsabiliza por dados pessoais que o usuário compartilhar com terceiros ou que terceiros tenham conhecimento por falta de zelo/cuidado do titular.

Em caso de suspeita ou confirmação de violação da Plataforma ou de perda de dados pessoais do usuário, a PAGUE SAFE envidará seus melhores esforços e tomará medidas imediatas para eliminar ou reduzir os riscos de danos ao USUÁRIO, bem como informará aos envolvidos potencialmente afetados e às autoridades competentes de tal fato, os possíveis riscos e as medidas necessárias para evitar tais danos.

8 – ALTERAÇÕES DA POLÍTICA

A PAGUE SAFE reserva o direito de fazer correções, alterações ou aditamentos nesta Política de Privacidade a qualquer momento e, desta forma, garante que sempre disponibilizará a versão mais atual da Política no seu website, com a correspondente data de elaboração do novo documento.

9 – CONTATO

Qualquer dúvida em relação a esta Política de Privacidade ou solicitação referente aos direitos dos USUÁRIOS poderá ser enviada à Encarregada pelo tratamento de dados da PAGUE SAFE, através do canal: privacidade@paguesafe.com

PAGUE SAFE LTDA.`
    }
  ];

  return (
    <div className="flex overflow-hidden flex-col justify-center bg-[#09160F]">
      <Header title="Política de privacidade" />
      <main className="flex flex-col items-center w-full max-md:max-w-full">
        <section className="flex flex-col my-16 max-w-full text-sm leading-6 w-[90%] lg:w-[70%] max-md:mt-10">
          {policySections.map((section, index) => (
            <PolicySection
              key={index}
              number={section.number}
              title={section.title}
              content={section.content}
              gapBottom
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
