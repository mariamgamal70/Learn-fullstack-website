import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Intro from "./Intro";
import ProductPackage from "./ProductPackage";
import ProductKeyFeatures from "./ProductKeyFeatures";
import Footer from "../Footer";

function Homepage() {
  React.useEffect(() => {
    AOS.init(); // Initialize the "aos" library
  }, []);
  return (
    <main>
      <Intro />
      <ProductPackage />
      <ProductKeyFeatures />
      <Footer />
    </main>
  );
}

export default Homepage;
