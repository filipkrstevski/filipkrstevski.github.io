import React from "react";
import CheckOutProgressBar from "../CheckOutProgressBar/CheckOutProgressBar";
import Footer from "../Footer/Footer";
import FooterLinks from "../Footer/FooterLinks";
import Menufixed from "../Menu/MenuFixed";
import PaySafely from "../PaySafelyComponent/PaySafely";
import Reviews from "../ReviewsComponent/Reviews";
import CheckOutAddressPageIntro from "./CheckOutAddressPageIntro";
const CheckOutAddressPage = () => {
  return (
    <>
      <Menufixed />
      <CheckOutProgressBar />
      <CheckOutAddressPageIntro />
      <PaySafely />
      <Reviews />
      <FooterLinks />
      <Footer />
    </>
  );
};

export default CheckOutAddressPage;
