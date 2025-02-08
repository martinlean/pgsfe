import React, { useState, useEffect, useRef } from 'react'
import { Progress } from './ui/progress'

const ConversionSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.3 }
    )

    if (progressRef.current) {
      observer.observe(progressRef.current)
    }

    return () => {
      if (progressRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(progressRef.current)
      }
    }
  }, [hasAnimated]) // Adiciona `hasAnimated` como dependência para garantir que o useEffect só seja executado novamente se `hasAnimated` mudar

  return (
    <section
      ref={progressRef}
      className="flex flex-col items-center font-semibold leading-8 text-center text-teal-50 max-w-full mt-24 w-full sm:px-[113px]"
    >
      <h2 className="text-2xl w-[638px] max-md:max-w-full mb-4">
        A Pague Safe é facilidade com conversões altíssimas. Chega de PIX não
        pago!
      </h2>
      <Progress value={hasAnimated ? 98.4 : 0} />{' '}
      {/* Atualiza o valor quando a animação ocorreu */}
      <p className="self-stretch mt-4 text-base max-md:max-w-full">
        98,4% de conversão, testado e comprovado.
      </p>
    </section>
  )
}

export default ConversionSection
