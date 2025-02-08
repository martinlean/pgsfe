import React from "react";

interface TitleSectionProps {
  title: string;
  subTitle: string;
  text: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  subTitle,
  text
}) => {
  return (
    <div className="text-center text-teal-50 mb-20 flex flex-col justify-center items-center">
      <h2 className="text-lg font-bold text-emerald-500 max-md:max-w-full">
        {title}
      </h2>
      <h3 className="text-4xl font-semibold leading-snug w-full sm:w-[70%] lg:w-[50%]">
        {subTitle}
      </h3>
      <p className="text-base opacity-70 max-md:max-w-full">{text}</p>
    </div>
  );
};

export default TitleSection;
