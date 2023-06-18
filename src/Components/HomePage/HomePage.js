import React from "react";
import Menufixed from "../Menu/MenuFixed";
import FooterComponent from "../Footer/FooterComponent";
import PaySafely from "../PaySafelyComponent/PaySafely";
import Reviews from "../ReviewsComponent/Reviews";
import HomePageIntro from "./HomePageIntro";
import Promotion from "./Promotion";
import YourOwnDesign from "./YourOwnDesign";
import HomePageProducts from "./HomePageProducts";
import LoadingUpload from "../LoadingComponent/LoadingUpload";

const HomePage = () => {
  return (
    <>
      <Menufixed />
      <LoadingUpload />
      <HomePageIntro />
      <Promotion />
      <YourOwnDesign />
      <HomePageProducts />
      <PaySafely />
      <Reviews />
      <FooterComponent />
    </>
  );
};

export default HomePage;
