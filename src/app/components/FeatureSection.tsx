import React from 'react'
import TitleSection from './TitleSection'
import link from './../assets/icons-services/link.svg'
import card from './../assets/icons-services/credit-card.svg'
import handshake from './../assets/icons-services/handshake.svg'
import locationArrow from './../assets/icons-services/location-arrow.svg'
import users from './../assets/icons-services/users-medical.svg'
import shield from './../assets/icons-services/shield-check.svg'

type Feature = {
  icon: string
  description: string
}

const features: Feature[] = [
  {
    icon: link.src,
    description:
      'Integre nosso gateway de forma transparente e eficiente em qualquer sistema ou plataforma.'
  },
  {
    icon: shield.src,
    description:
      'Camada extra de proteção às suas transações, verificamos suas transações com tecnologia de ponta.'
  },
  {
    icon: locationArrow.src,
    description:
      'Facilite compras futuras de seus clientes com nossa API de One click buy, armazenando seus dados do cartão de forma segura.'
  },
  {
    icon: card.src,
    description:
      'Tenha um fluxo de caixa maior em sua empresa, aqui você vai receber suas vendas com cartão de crédito em D+2.'
  },
  {
    icon: handshake.src,
    description:
      'Garantimos que você tenha assistência sempre que precisar, seja dia ou noite.'
  },
  {
    icon: users.src,
    description:
      'Permitimos a atribuição de múltiplos administradores, facilitando a delegação de responsabilidades e o controle de acesso.'
  }
]

const FeatureSection: React.FC = () => {
  return (
    <section className="flex flex-col text-base leading-6 text-teal-50 mt-24 w-full">
      <TitleSection
        title="O que oferecemos"
        subTitle="A solução de pagamentos ideal para o seu negócio"
        text="Escale sua operação sem limitações"
      />
      <div className="grid grid-cols-1 gap-8 w-full md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 justify-center items-center px-8 py-10 h-full rounded-3xl bg-[#EFFFFA]/[2%]"
          >
            <div className="flex flex-col justify-center items-start w-full min-w-[240px]">
              <img
                loading="lazy"
                src={feature.icon}
                alt=""
                className="object-contain w-10 aspect-square"
              />
              <p className="mt-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureSection
