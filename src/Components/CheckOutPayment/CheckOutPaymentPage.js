import React from "react";
import CheckOutProgressBar from "../CheckOutProgressBar/CheckOutProgressBar";
import Footer from "../Footer/Footer";
import FooterLinks from "../Footer/FooterLinks";
import Menufixed from "../Menu/MenuFixed";
import PaySafely from "../PaySafelyComponent/PaySafely";
import Reviews from "../ReviewsComponent/Reviews";
import CheckOutPaymentPageIntro from "./CheckOutPaymentPageIntro";
const CheckOutPaymentPage = () => {
  return (
    <>
      <Menufixed />
      <CheckOutProgressBar />
      <CheckOutPaymentPageIntro />
      <PaySafely />
      <Reviews />
      <FooterLinks />
      <Footer />
    </>
  );
};

export default CheckOutPaymentPage;
