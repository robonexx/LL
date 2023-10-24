import React from 'react';

interface HeroWithImageProps {
  headline: string;
  text: string;
  imageSrc: string;
  imageOnRight?: boolean;
  cta?: string; // Call to Action button text
}

const HeroWithImage: React.FC<HeroWithImageProps> = ({ headline, text, imageSrc, imageOnRight = true, cta }) => {
  const imageOrder = imageOnRight ? 'order-2' : 'order-1';

  return (
    <div className="flex px-80 pt-112 pb-320">
      <div className={`flex-1 ${imageOrder}`}>
        <img src={imageSrc} alt="Hero Image" className="w-full h-auto" />
      </div>
      <div className="flex-1 p-8">
        <h1 className="text-5xl mb-16">{headline}</h1>
        <p className="text-base mb-16">{text}</p>
        {cta && <button className="bg-blue-500 text-white px-4 py-2">{cta}</button>}
      </div>
    </div>
  );
};

export default HeroWithImage;

