import styled from "styled-components";

export const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #333;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    h2 {
      font-size: 2rem;
    }
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const TestimonialContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  transform: translateX(${(props) => props.translate}%);
  transition: transform 0.5s ease-in-out;
  width: 100%;
  flex-shrink: 0;
`;

export const Testimonial = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  max-width: 450px;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (max-width: 480px) {
    max-width: 150px;
  }
`;
