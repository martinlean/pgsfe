import React, { useState, useRef } from 'react'
import TitleSection from './TitleSection'
import plusCircle from './../assets/plus-circle.svg'

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'O que é gateway de pagamento?',
    answer:
      'Um gateway de pagamento é um serviço que processa transações de cartão de crédito para empresas online e físicas.'
  },
  {
    question: 'Na Pague Safe tenho um gerente de conta?',
    answer:
      'Sim, na Pague Safe você terá um gerente de conta dedicado para auxiliar em todas as suas necessidades.'
  },
  {
    question: 'Qual a taxa de aprovação?',
    answer:
      'Nossa taxa de aprovação média é de 98,4%, uma das mais altas do mercado.'
  },
  {
    question: 'Minha conta será bloqueada se eu vender infoproduto?',
    answer:
      'Não, a Pague Safe aceita a venda de infoprodutos, desde que estejam em conformidade com nossas políticas.'
  },
  {
    question: 'A Pague Safe funciona para meu e-commerce?',
    answer:
      'Sim, a Pague Safe é compatível com a maioria das plataformas de e-commerce e pode ser facilmente integrada ao seu negócio online.'
  }
]

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="flex flex-col mt-24 max-w-full text-base font-medium tracking-tight leading-none text-teal-50 w-full max-md:mt-10 ">
      <TitleSection
        title="FAQ"
        subTitle="Dúvidas frequentes"
        text="Taxas baixas e aprovações altas, tudo para alavancar o seu negócio."
      />
      <div className="flex flex-col w-full lg:w-3/6 justify-center items-center self-center">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center p-6 w-full rounded-xl bg-teal-950 mb-px max-md:px-5 max-md:max-w-full"
          >
            <button
              className="flex flex-wrap gap-6 items-center w-full max-md:max-w-full"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full text-left">
                {item.question}
              </div>
              <img
                loading="lazy"
                src={plusCircle.src}
                alt=""
                className={`object-contain shrink-0 self-stretch my-auto w-6 aspect-square transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            <div
              ref={(el) => {
                contentRefs.current[index] = el
              }}
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                openIndex === index
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
              style={{
                maxHeight:
                  openIndex === index
                    ? `${contentRefs.current[index]?.scrollHeight}px`
                    : '0'
              }}
            >
              <div className="mt-4 text-sm opacity-70">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQSection
