import React from "react";
import CheckOutProgressBar from "../CheckOutProgressBar/CheckOutProgressBar";
import Footer from "../Footer/Footer";
import FooterLinks from "../Footer/FooterLinks";
import Menufixed from "../Menu/MenuFixed";
import Reviews from "../ReviewsComponent/Reviews";
import CheckOutFinishedPageIntro from "./CheckOutFinishedPageIntro";
const CheckOutFinishedPage = () => {
  return (
    <>
      <Menufixed />
      <CheckOutProgressBar />
      <CheckOutFinishedPageIntro />
      <Reviews />
      <FooterLinks />
      <Footer />
    </>
  );
};

export default CheckOutFinishedPage;
