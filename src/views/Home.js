import React from "react";
import "./styles.css";

import Banner from "./../components/Banner";
import ProductHighlights from "../components/ProductHighlights";
import Benefits from "./../components/Benefits";
import Testimonials from "./../components/Testimonials";
import Blog from "./../components/Blog";
import Newsletter from "./../components/Newsletter";

function Home() {
  return (
    <div>
      <Banner />
      <ProductHighlights />
      <Benefits />
      <Testimonials />
      {/*
      <Blog />
      {/*
      <Newsletter />
      */}
    </div>
  );
}

export default Home;
