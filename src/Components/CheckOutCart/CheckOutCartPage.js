import React from "react";
import CheckOutProgressBar from "../CheckOutProgressBar/CheckOutProgressBar";
import ErrorModal from "../ErrorModal/ErrorModal";
import Footer from "../Footer/Footer";
import FooterLinks from "../Footer/FooterLinks";
import LoadingUpload from "../LoadingComponent/LoadingUpload";
import Menufixed from "../Menu/MenuFixed";
import PaySafely from "../PaySafelyComponent/PaySafely";
import Reviews from "../ReviewsComponent/Reviews";
import CheckOutCartPageFirstContent from "./CheckOutCartPageFirstContent";
import CheckOutCartPageIntro from "./CheckOutCartPageIntro";
const CheckOutCartPage = () => {
  return (
    <>
      <Menufixed />
      <LoadingUpload />
      <ErrorModal />
      <CheckOutProgressBar />
      <CheckOutCartPageIntro />
      <CheckOutCartPageFirstContent />
      <PaySafely />
      <Reviews />
      <FooterLinks />
      <Footer />
    </>
  );
};

export default CheckOutCartPage;
