"use client";

import React from "react";
import Header from "../components/HeaderSecundary";
import Footer from "../components/Footer";
import PolicySection from "../components/PolicySection";
import { HelpCircleIcon } from "lucide-react";

const ConsumerSpace: React.FC = () => {
  const consumerSpaceSections = [
    {
      title:
        "Não reconheço um boleto DDA da Pague Safe na minha conta bancária",
      content: `A Pague Safe atua como intermediador de pagamentos de algumas lojas virtuais. Portanto, disponibilizamos uma carteira de boletos aos nossos clientes para a realização de vendas em seus sites. Caso tenha gerado um boleto em algum deles, os dados da Pague Safe acabaram aparecendo no seu DDA (débito direto autorizado). Para identificar o gerador deste boleto, recomendamos os seguintes passos:

1 - Primeiro, verifique se você ou alguém da sua família ou amigos usou seu CPF para fazer alguma compra online, ou mesmo inscrição em algum site ou curso.

2 - No aplicativo ou internet banking do seu banco, você consegue visualizar o nome e CNPJ do lojista no campo sacador avalista. Confira os exemplos para os bancos Itaú e Bradesco.

3 - Verifique também seu e-mail, pois pode ter recebido alguma explicação sobre a cobrança emitida, diretamente do site.

4 - Utilize nossa ferramenta de Reconhecimento de boletos e DDA. Após preencher alguns dados do boleto, você verá o site que emitiu o boleto para você 🙂

Importante! Caso não reconheça o boleto, e acredite se tratar de uma cobrança indevida, você pode não pagá-lo. O Pague Safe não gera nenhuma multa e nem protesta boletos. Essa cobrança sumirá do seu DDA em até 60 dias do vencimento.`
    },
    {
      title: "Por que recebi um e-mail de cobrança da Pague Safe?",
      content: `Você recebe cobranças pelo nosso e-mail pois este é um serviço que oferecemos para nossos clientes. No caso, você realizou uma assinatura no site de algum dos nossos clientes, que tem configurado na conta dele um modelo de cobrança que habilita o envio de e-mails para seus clientes. Como somos apenas a intermediadora de pagamento, fazemos a cobrança, porém o serviço à que ela se refere é de responsabilidade do comércio online e pedimos que contate o mesmo para obter mais informações.`
    },
    {
      title:
        "Paguei o boleto da Pague Safe e não confirmaram minha compra. Como proceder?",
      content: `Envie um e-mail para o lojista com o comprovante de pagamento, e ele poderá fazer a verificação do status da sua compra. Caso o boleto tenha sido pago para outro código de barras, ou com um valor inferior àquele da compra, o lojista entrará em contato conosco para buscarmos solucionar a ocorrência.`
    },
    {
      title: "Ainda não recebi meu produto, quem devo contatar?",
      content: `Você deve contatar a loja na qual realizou a compra. Qualquer assunto relacionado à entrega do produto ou serviço prestado devem ser conversados com a loja em questão, visto que fazemos apenas o processamento do pagamento, e não a gerência do processo de entrega ou prestação dos serviços. Caso tenha alguma dúvida em relação ao seu pagamento, pedimos que também contate o lojista, ele é a melhor pessoa para sanar suas dúvidas.`
    },
    {
      title: "Por que apareceu Pague Safe na minha fatura do cartão?",
      content: `A Pague Safe é um intermediador de pagamentos, e você comprou em algum de nossos clientes. Normalmente é enviado na fatura o nome da loja, porém, em alguns casos, não conseguimos enviar o nome do lojista por uma limitação da bandeira - acaba aparecendo "Pague Safe" ao invés do nome da loja na qual realizou a compra. Por questões relacionadas à proteção de dados dos nossos clientes, não conseguimos enviar as informações da loja em que a compra foi realizada. Para qualquer dúvida e maiores informações, você pode buscar suporte junto à sua instituição bancária.`
    }
  ];

  return (
    <div className="flex overflow-hidden flex-col justify-center bg-[#09160F]">
      <Header title="Espaço do Consumidor" />
      <main className="flex flex-col items-center w-full max-md:max-w-full">
        <section className="flex flex-col my-16 max-w-full text-sm leading-6 w-[90%] lg:w-[70%] max-md:mt-10 text-teal-50 gap-4">
          <p className="text-teal-400 font-bold">Perguntas Frequentes</p>
          <p>
            Aqui você encontra respostas para as dúvidas mais comuns dos
            consumidores sobre os serviços da Pague Safe.
          </p>

          {consumerSpaceSections.map((section, index) => (
            <PolicySection
              key={index}
              title={section.title}
              content={section.content}
              gapBottom
            />
          ))}
          <p className="text-teal-50">
            Se você não encontrou a resposta para sua dúvida, entre em contato
            com nosso suporte ao cliente.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ConsumerSpace;
