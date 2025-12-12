import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Banner from "./Banner";
import Navbar from "./Navbar";
import Hero from "./Hero";
import TopProducts from "./TopProducts";
import Products from "./Products";
import Subscribe from "./Subscribe";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <div>
      <Banner/>
      <Navbar/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Subscribe/>
      <Testimonial/>
      <Footer/>
    </div>
  );
};

export default App;
