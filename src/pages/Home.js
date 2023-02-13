import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import ProductSection from "../components/ProductSection";
import Sliders from "../components/Sliders";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Sliders/>
      <ProductSection/>
    </div>
  );
};

export default Home;
