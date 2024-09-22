import React, { useState, useEffect } from "react";
import DepoimentoHarmonic1 from "./../../assets/depoimentos/dpHarmonic1.png";
import DepoimentoHarmonic2 from "./../../assets/depoimentos/dpHarmonic2.png";
import DepoimentoHarmonic3 from "./../../assets/depoimentos/dpHarmonic3.png";
import DepoimentoHarmonic4 from "./../../assets/depoimentos/dpHarmonic4.png";
import DepoimentoRetinol1 from "./../../assets/depoimentos/dpRetinol1.png";
import DepoimentoRetinol2 from "./../../assets/depoimentos/dpRetinol2.png";
import DepoimentoRetinol3 from "./../../assets/depoimentos/dpRetinol3.png";
import DepoimentoRetinol4 from "./../../assets/depoimentos/dpRetinol4.png";
import {
  TestimonialsSection,
  TestimonialContainer,
  Testimonial,
  CarouselWrapper,
} from "./styles";

function Testimonials() {
  const [currentContainer, setCurrentContainer] = useState(0);

  const testimonialContainers = [
    <TestimonialContainer key="1">
      <Testimonial>
        <img src={DepoimentoHarmonic1} alt="Depoimento Harmonic 1" />
      </Testimonial>
      <Testimonial>
        <img src={DepoimentoHarmonic2} alt="Depoimento Harmonic 2" />
      </Testimonial>
      <Testimonial>
        <img src={DepoimentoHarmonic3} alt="Depoimento Harmonic 3" />
      </Testimonial>
      <Testimonial>
        <img src={DepoimentoHarmonic4} alt="Depoimento Harmonic 4" />
      </Testimonial>
    </TestimonialContainer>,
    <TestimonialContainer key="2">
      <Testimonial>
        <img src={DepoimentoRetinol1} alt="Depoimento Retinol 1" />
      </Testimonial>
      <Testimonial>
        <img src={DepoimentoRetinol2} alt="Depoimento Retinol 2" />
      </Testimonial>
      <Testimonial>
        <img src={DepoimentoRetinol3} alt="Depoimento Retinol 3" />
      </Testimonial>
      <Testimonial>
        <img src={DepoimentoRetinol4} alt="Depoimento Retinol 4" />
      </Testimonial>
    </TestimonialContainer>,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContainer((prevContainer) =>
        prevContainer === testimonialContainers.length - 1
          ? 0
          : prevContainer + 1
      );
    }, 50000); // Muda o container a cada 10 segundos

    return () => clearInterval(interval);
  }, [testimonialContainers.length]);

  return (
    <TestimonialsSection>
      <h2>Depoimentos de Clientes</h2>
      <CarouselWrapper translate={-currentContainer * 100}>
        {testimonialContainers[currentContainer]}
      </CarouselWrapper>
    </TestimonialsSection>
  );
}

export default Testimonials;
