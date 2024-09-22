import React, { useState, useEffect } from "react";
import bannerImage1 from "./../../assets/banners/harmonic.png";
import bannerImage2 from "./../../assets/banners/retinol.png";
import {
  BannerSection,
  BannerImage,
  Carousel,
  CarouselItem,
  PrevButton,
  NextButton,
} from "./styles";

const images = [bannerImage1, bannerImage2];

function Banner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); // Troca a imagem a cada 5 segundos
    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, [current]);
  return (
    <BannerSection>
      <PrevButton onClick={prevSlide}>{"<"}</PrevButton>
      <Carousel style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <BannerImage src={image} alt={`Produto ${index + 1}`} />
          </CarouselItem>
        ))}
      </Carousel>
      <NextButton onClick={nextSlide}>{">"}</NextButton>
    </BannerSection>
  );
}

export default Banner;
