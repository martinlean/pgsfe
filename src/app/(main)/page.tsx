"use client";

import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import PartnerSection from "../components/PartnerSection";
import CheckoutSection from "../components/CheckoutSection";
import SupportSection from "../components/SupportSection";
import PricingSection from "../components/PricingSection";
import ConversionSection from "../components/ConversionSection";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import ruido from "../assets/images-banner/ruido.png";
import sounds from "../assets/images-banner/sounds.png";
import ayrton from "../assets/images-banner/ayrton.webp";
import crown from "../assets/images-banner/crown.svg";
import iphone from "../assets/images-banner/iphone.png";
import porcent from "../assets/images-banner/porcent.png";
import chatSetaCrescimento from "../assets/images-banner/chat-seta-crescimento.svg";
import cofrinho from "../assets/images-banner/cofrinho.svg";
import dolar from "../assets/images-banner/dolar.svg";
import { FadeInSection } from "../components/FadeInSection";
import CreateNewAccount from "../components/CreateNewAccount";
import logo from "../assets/Logo.svg";
import CreateNewAccountMobile from "../components/CreateNewAccountMobile";
import bgModal from "../assets/bg-modal-mobile.svg";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-[#09160F]">
      <main className="flex overflow-hidden flex-col self-stretch pb-12 sm:pb-48 w-full">
        <div className="relative">
          <Hero />
          <Image
            loading="lazy"
            src={ruido.src}
            width={1920}
            height={1080}
            alt=""
            className="hidden sm:inline object-cover inset-0 min-h-[50vh]  w-full filter contrast-[2] brightness-100 bg-[#09160F]"
          />
          <div className="w-full h-[870px] sm:hidden" />
          <Image
            loading="lazy"
            src={sounds.src}
            width={1920}
            height={1080}
            alt=""
            className="absolute object-cover w-full bottom-0 transform translate-y-[10%] hidden sm:block"
          />
          <Image
            loading="lazy"
            src={bgModal.src}
            width={400}
            height={400}
            alt=""
            className="object-cover absolute inset-0 size-full sm:hidden"
          />

          <div className="">
            <div
              className="
            absolute flex justify-center overflow-hidden bg-primary 
            w-[44%] max-w-[220px] sm:max-w-full sm:w-[38%] md:w-[32%] lg:w-[28%] xl:w-[25%] 
            h-[33%] max-h-[400px] sm:max-h-full sm:h-[90%] md:h-[83%] lg:h-[83%] xl:h-[80%] 2xl:h-[79%]
            top-[65%] left-[4%] sm:top-1/2 sm:left-1/2 transform sm:-translate-x-1/2 translate-y-[3%] sm:-translate-y-[37%] lg:-translate-y-[40%] xl:-translate-y-[53%] rounded-[24px] lg:rounded-[30px] 2xl:rounded-[40px] 
            mix-blend-screen filter backdrop-filter backdrop-saturate-0 backdrop-contrast-200 backdrop-brightness-[2]"
            />

            <div
              className="absolute 
          w-[44%] max-w-[220px] sm:max-w-full sm:w-[38%] md:w-[32%] lg:w-[28%] xl:w-[25%] 
          h-[33%] max-h-[400px] sm:max-h-full sm:h-[90%] md:h-[83%] lg:h-[83%] xl:h-[80%] 2xl:h-[79%] 
          top-[65%] left-[4%] sm:top-1/2 sm:left-1/2 transform sm:-translate-x-1/2 translate-y-[3%] sm:-translate-y-[37%] lg:-translate-y-[40%] xl:-translate-y-[53%] rounded-[24px] lg:rounded-[30px] 2xl:rounded-[40px]"
            >
              <div className="absolute flex flex-col justify-start w-[42%] gap-y-3 h-full p-2 sm:p-4 md:p-4 lg:p-5 xl:p-6">
                <div className="flex justify-center items-center w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] bg-white rounded-full">
                  <Image
                    loading="lazy"
                    src={crown.src}
                    width={24}
                    height={24}
                    alt=""
                    className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]"
                  />
                </div>
                <p className="font-bold text-[#022C2A] text-[8px] sm:text-xs lg:text-sm 2xl:text-lg">
                  O melhor gateway de pagamento do mercado.
                </p>
              </div>

              <Image
                loading="lazy"
                src={ayrton.src}
                width={600}
                height={635}
                alt=""
                className="absolute object-cover -bottom-[1px] min-w-[101%] -left-[1px] rounded-[24px] lg:rounded-[30px] 2xl:rounded-[40px]"
              />
            </div>

            <div
              className="absolute bg-[#DBEBE6]
            w-[39%] sm:w-[30%] md:w-[30%] lg:w-[30%] xl:w-[30%] 
            h-[12%] sm:h-[35%] md:h-[31%] lg:h-[35%] xl:h-[35%] 2xl:h-[35%] 
            top-[78%] sm:top-[44%] xl:top-[43%] left-[72%] sm:left-[83%] lg:left-[81%] xl:left-[79.7%] transform -translate-x-1/2 -translate-y-1/2 lg:-translate-y-1/2 rounded-[20px] sm:rounded-[24px] lg:rounded-[30px] 2xl:rounded-[40px]
            "
            >
              <Image
                loading="lazy"
                src={porcent.src}
                width={400}
                height={300}
                alt=""
                className="absolute object-cover bottom-1/2 transform translate-y-1/2 min-w-full left-0"
              />
              <Image
                loading="lazy"
                src={iphone.src}
                width={400}
                height={300}
                alt=""
                className="absolute object-cover bottom-0 min-w-full left-0 rounded-[20px] sm:rounded-[24px] lg:rounded-[30px] 2xl:rounded-[40px]"
              />
            </div>
            <div
              className="
            absolute flex justify-between items-center overflow-hidden bg-[#022C2A] 
            w-[49%] sm:w-[38%] md:w-[36%] lg:w-[28%] xl:w-[25%] 
            h-[10%] sm:h-[30%] md:h-[22%] lg:h-[18%] xl:h-[16%] 
            top-[89%] left-[70%] sm:top-[73%] sm:left-[75%] xl:left-[72%] transform -translate-x-1/2 -translate-y-[35%] lg:-translate-y-[43%] xl:-translate-y-[53%] rounded-[20px] sm:rounded-[24px] lg:rounded-[30px] 2xl:rounded-[40px] px-[3%] sm:px-[2%]"
            >
              <div className="flex justify-center items-center w-[47px] h-[47px] sm:w-[72px] sm:h-[72px] lg:w-[76px] lg:h-[76px] xl:w-[84px] xl:h-[84px] 2xl:w-[94px] 2xl:h-[94px] bg-[#2CEAB0] rounded-[10px] sm:rounded-[19px]">
                <Image
                  loading="lazy"
                  src={dolar.src}
                  width={24}
                  height={24}
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="flex justify-center items-center w-[47px] h-[47px] sm:w-[72px] sm:h-[72px] lg:w-[76px] lg:h-[76px] xl:w-[84px] xl:h-[84px] 2xl:w-[94px] 2xl:h-[94px] bg-[#EFFFFA] rounded-[10px] sm:rounded-[19px]">
                <Image
                  loading="lazy"
                  src={chatSetaCrescimento.src}
                  width={24}
                  height={24}
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="flex justify-center items-center w-[47px] h-[47px] sm:w-[72px] sm:h-[72px] lg:w-[76px] lg:h-[76px] xl:w-[84px] xl:h-[84px] 2xl:w-[94px] 2xl:h-[94px] bg-[#09160F] rounded-[10px] sm:rounded-[19px]">
                <Image
                  loading="lazy"
                  src={cofrinho.src}
                  width={24}
                  height={24}
                  alt=""
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute px-[3%] pt-7 lg:pt-14 w-full">
          <Header logo={logo.src} />
        </div>
        <div className="px-6 sm:px-8 md:px-[50px] lg:px-[60px] w-full flex flex-col">
          <PartnerSection />
          <FadeInSection>
            <CheckoutSection />
          </FadeInSection>
          <FadeInSection>
            <FeatureSection />
          </FadeInSection>
          <FadeInSection>
            <SupportSection />
          </FadeInSection>
          <FadeInSection>
            <PricingSection />
          </FadeInSection>
          <ConversionSection />
          <FadeInSection>
            <div className="hidden md:inline">
              <CreateNewAccount />
            </div>
            <div className="inline md:hidden">
              <CreateNewAccountMobile />
            </div>
          </FadeInSection>
          <FAQSection />
        </div>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
}
