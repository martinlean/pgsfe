"use client";

import React from "react";
import Header from "../components/HeaderSecundary";
import Footer from "../components/Footer";
import PolicySection from "../components/PolicySection";

const TermsOfPurchase: React.FC = () => {
  const termsOfPurchaseSections = [
    {
      title: "Preâmbulo",
      content: `PAGUE SAFE LTDA, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 31.699.157/0001-80, com sede na Av. Andrômeda, 723 – Alphaville, Barueri – SP, 06473-000, Brasil, única e exclusiva proprietária do domínio: www.paguesafe.com, doravante denominada ("PAGUE SAFE"), e ("VOCÊ"), pessoa física ou jurídica, que leu, entendeu, está de acordo, e deu o aceite eletrônico, doravante denominado ("Usuário/Produtor"", "Usuário/Afiliado" ou simplesmente "Usuário"), firmam o presente Contrato de Licença de Uso não exclusiva da PAGUE SAFE ("Termos de Uso"), do qual são parte integrante os Termos de Compra e a Políticas de Segurança, Privacidade, e de Direitos Autorais da PAGUE SAFE, com acesso por meio do link https://paguesafe.com/termos-uso/`
    },
    {
      title: "Da atividade empresarial da Pague Safe",
      content: `A PAGUE SAFE é uma plataforma de processamento e gerenciamento de pagamento online, via cartão de crédito ou boleto bancário. Logo, é uma prestadora de serviços, não fazendo parte da cadeia de fornecedores do Produto. De acordo com a legislação brasileira vigente, a PAGUE SAFE não exerce atividade exclusiva de instituição financeira, de prestadora de serviços financeiros ou de administradora de cartões de crédito.`
    },
    {
      title: "Do objeto",
      content: `Ao realizar a compra deste produto, a PAGUE SAFE será responsável pela gestão do pagamento feito pelo USUÁRIO. A PAGUE SAFE irá receber e transmitir as informações do USUÁRIO, de modo digital, sigiloso e seguro.

Os créditos provenientes desta compra e venda serão depositados na Conta Virtual do VENDEDOR (Produtor e/ou Afiliado), conforme previsto nos "TERMOS DE USO" da PAGUE SAFE do qual o presente Contrato é parte integrante.

Nos presentes Termos, a terminologia VENDEDOR refere-se ao PRODUTOR do Produto adquirido, não compreendendo o USUÁRIO AFILIADO.

Para o COMPRADOR, o serviço da PAGUE SAFE é gratuito. Contudo, poderá haver cobrança de taxas, nas compras parceladas, de acordo com o tipo de produto adquirido, podendo ocorrer, também, variações nas condições de pagamento.
A PAGUE SAFE reserva-se o direito de alterar os presentes Termos, a qualquer tempo, sem consulta prévia, e ao seu exclusivo critério.

Qualquer alteração ou modificação destes termos entrará em vigor, imediatamente, após a publicação em nossa página.
O presente Contrato integra e deve ser interpretado, em conjunto com os "TERMOS DE USO" e a "POLÍTICA DE PRIVACIDADE", aos quais o USUÁRIO declara conhecer e concordar com suas cláusulas e condições.`
    },
    {
      title: "Dos dados do usuário",
      content: `Ao clicar em comprar na página de venda do produto, o USUÁRIO será encaminhado para a página de checkout da PAGUE SAFE, na qual deverá preencher corretamente:

a) seu nome completo;

b) número do CPF;

c) endereço de entrega (somente na compra de produtos físicos);

d) endereço de e-mail válido;

e) número do telefone;

f) dados do seu cartão de crédito.

Sempre que realizar uma transação pela PAGUE SAFE, o USUÁRIO deverá informar tais dados. As informações prestadas pelo COMPRADOR, no momento da compra, são definidas pelo VENDEDOR do Produto, podendo variar de acordo com o tipo de Produto e/ou Serviço adquirido.

A PAGUE SAFE, não armazena o código de segurança do cartão de crédito de seus USUÁRIOS. A veracidade e exatidão de suas informações pessoais é de responsabilidade exclusiva do USUÁRIO, que poderá responder civil e criminalmente, por eventuais danos causados.

A PAGUE SAFE não se responsabiliza por eventuais transações realizadas por terceiros, em nome do USUÁRIO, caso esse terceiro tenha acesso a tais dados.

O preenchimento errado de suas informações pessoais por parte do USUÁRIO, tais como nome completo, endereço, e-mail, telefone, – poderá resultar no atraso e/ou na não entrega do produto pelo VENDEDOR.

O USUÁRIO autoriza, expressamente, que a PAGUE SAFE mantenha seus dados cadastrais em seu BANCO DE DADOS, e, que tais informações sejam fornecidas:

a) às autoridades públicas competentes que as solicitem formalmente, de acordo com a Legislação brasileira, em especial a LEI No 12.965, DE 23 DE ABRIL DE 2014 – (MARCO CIVIL DA INTERNET);

b) aos seus parceiros estratégicos, comerciais ou técnicos, com a finalidade de disponibilizar melhores conteúdos e/ou serviços ao USUÁRIO O USUÁRIO declara que autoriza, expressamente, que a PAGUE SAFE colete suas informações, para análise de tráfego com o objetivo de identificar grupos perfil de usuários e para fins publicitários.`
    },
    {
      title: "Da entrega do produto",
      content: `O VENDEDOR é o único e exclusivo responsável pela entrega de produtos físicos.
O COMPRADOR declara estar ciente de que a PAGUE SAFE não é responsável pelo conteúdo do produto, bem como pela sua entrega.

Os produtos físicos serão enviados conforme anunciado pelo seu VENDEDOR.
Caso o produto não seja entregue, por culpa do COMPRADOR (exemplo: informar endereço errado ou incompleto, não ter alguém no endereço para receber o produto), o VENDEDOR, a seu critério, poderá cobrar o novo frete.
O consumidor declara estar ciente e concorda que, caso o endereço indicado para entrega do produto, seja considerado pelos Correios como: "ÁREA COM DISTRIBUIÇÃO SUJEITA A PRAZO DIFERENCIADO/RESTRIÇÃO DE ENTREGA DOMICILIAR TEMPORÁRIA", ele deverá retirar o produto na agência dos Correios para a qual o produto foi enviado.`
    },
    {
      title:
        "Da relação entre os usuários, cancelamento, estorno, ou reembolso da compra",
      content: `A PAGUE SAFE não é responsável pelo Canal de Suporte do Produto. As reclamações feitas perante o Suporte da PAGUE SAFE, referentes a vícios e/ou defeitos do Produto serão encaminhadas ao seu responsável.
O Usuário/Produtor deverá responder, em até 02 (dois) dias úteis, as solicitações feitas ao seu suporte. Caso não haja resposta, a PAGUE SAFE poderá cancelar a transação e realizar o reembolso ou estorno da compra ao Usuário/Consumidor, independente do produto já ter sido enviado ou entregue. Caso o Consumidor apresente uma solicitação contra o Usuário/ Produtor e/ou Usuário/Afiliado no site "Reclame Aqui", referente à produtos físicos, este terá o prazo de 2 (dois) dias úteis, para apresentar sua resposta ao Consumidor, bem como deverá informá-la à PAGUE SAFE se no prazo estipulado, o Usuário/Produtor e/ou Usuário/Afiliado não apresentar sua resposta ao Consumidor, a PAGUE SAFE irá cancelar imediatamente a transação, efetuando o reembolso ou estorno da compra, independente do produto já ter sido enviado ou entregue.
No caso de produtos físicos, o cancelamento, decorrente do exercício do direito de arrependimento (artigo 49 do Código de Defesa do Consumidor), dependerá da comprovação de devolução do produto, intacto e em sua embalagem original, ao Usuário/Produtor.
Somente após a confirmação de devolução do Produto, a PAGUE SAFE fará o cancelamento, estorno e/ou reembolso da compra.
A PAGUE SAFE irá auxiliar o COMPRADOR resolver qualquer problema originado da venda, como solicitações de informações, cancelamentos, estornos, reembolsos e CHARGEBACK.
As transações realizadas por meio de cartão de crédito, serão estornadas junto a operadora do cartão de crédito do COMPRADOR. Por sua vez, as transações realizadas por meio de boleto bancário, serão reembolsadas por meio de transferência (TED ou DOC), para a conta indicada pelo COMPRADOR. O prazo máximo para estorno e/ou reembolso será de 07 (sete) dias úteis. O procedimento de lançamento do estorno, na fatura de cartão de crédito, varia de acordo com a operadora do cartão.`
    },
    {
      title: "Bloqueio de acesso e negativa de compra",
      content: `O COMPRADOR concorda que a PAGUE SAFE poderá, a seu exclusivo critério, realizar o bloqueio preventivo de seu acesso a PAGUE SAFE, sempre que tomar conhecimento de qualquer indício de ato ou conduta que possa caracterizar uma prática ilegal, violação aos Termos de Uso e Política de Privacidade da PAGUE SAFE ou que represente infração à direitos de USUÁRIOS ou terceiros. O bloqueio preventivo será mantido, em regra, até que: a) constate-se que o ato ou conduta suspeita não caracterizou prática ilegal, com base em critérios e avaliação exclusiva da PAGUE SAFE; b) por ordem judicial ou determinação de autoridades administrativas. Caso reste confirmado a natureza ilegal da conduta, o bloqueio preventivo será convertido em definitivo, sem gerar o direito, ao COMPRADOR, de estorno dos valores pagos. Ademais o bloqueio preventivo também poderá ser realizado caso a compra esteja sendo iniciada por um COMPRADOR que: a) já realizou mais de um pedido de reembolso pela PAGUE SAFE; b) tenham seu nome ou identidade vinculada a listas públicas ou privadas destinadas a identificar pessoas envolvidas em atividades ilícitas/irregulares; c) caso a PAGUE SAFE verifique que o COMPRADOR adotou comportamentos e ações atípicos e suspeitos que podem colocar em risco direitos de USUÁRIOS ou terceiros.`
    },
    {
      title: "Das condições gerais",
      content: `A PAGUE SAFE a fim resguardar seus USUÁRIOS, em caso de suspeita de fraude, poderá entrar em contato com o COMPRADOR, para confirmar seus dados. Caso os dados não sejam confirmados, a compra não será aprovada.

A PAGUE SAFE não emite Nota Fiscal para o COMPRADOR. Tal obrigação é exclusiva do VENDEDOR, conforme disposto nos "TERMOS DE USO" da PAGUE SAFE.

A PAGUE SAFE não se responsabiliza quanto aos riscos, nocividade, periculosidade, defeitos, vícios de qualidade, vícios de quantidade, insuficiência, inadequação de informações, publicidade enganosa e/ou abusiva, do produto e/ou serviço adquirido.

A PAGUE SAFE não se responsabiliza por falhas de sistema, causados por eventos de força maior ou caso fortuito, que atrasem ou impeça a realização de transações em sua plataforma.

A PAGUE SAFE não se responsabiliza pelo conteúdo da página de vendas do VENDEDOR.

A PAGUE SAFE não se responsabiliza pelas obrigações tributárias decorrentes desta transação, cuja obrigação tributária seja exclusiva do VENDEDOR. Estes Termos vigerão por prazo indeterminado.`
    }
  ];

  return (
    <div className="flex overflow-hidden flex-col justify-center bg-[#09160F]">
      <Header title="Termos de Compra" />
      <main className="flex flex-col items-center w-full max-md:max-w-full">
        <section className="flex flex-col my-16 max-w-full text-sm leading-6 w-[90%] lg:w-[70%] max-md:mt-10 text-teal-50 gap-4">
          <p className="text-teal-400 font-bold">Termos de Compra</p>
          <p>Leia atentamente os termos e condições de compra da Pague Safe.</p>

          {termsOfPurchaseSections.map((section, index) => (
            <PolicySection
              key={index}
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

export default TermsOfPurchase;
