import React from "react";
import CheckOutProgressBar from "../CheckOutProgressBar/CheckOutProgressBar";
import Footer from "../Footer/Footer";
import FooterLinks from "../Footer/FooterLinks";
import Menufixed from "../Menu/MenuFixed";
import PaySafely from "../PaySafelyComponent/PaySafely";
import Reviews from "../ReviewsComponent/Reviews";
import CheckOutChoicePageIntro from "./CheckOutChoicePageIntro";
const CheckOutChoicePage = () => {
  return (
    <>
      <Menufixed />
      <CheckOutProgressBar />
      <CheckOutChoicePageIntro />
      <PaySafely />
      <Reviews />
      <FooterLinks />
      <Footer />
    </>
  );
};

export default CheckOutChoicePage;
