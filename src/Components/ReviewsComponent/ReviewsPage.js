import React from "react";
import Footer from "../Footer/Footer";
import FooterLinks from "../Footer/FooterLinks";
import Menufixed from "../Menu/MenuFixed";
import ReviewsPageIntro from "./ReviewsPageIntro";

const ReviewsPage = () => {
  return (
    <>
      <Menufixed />
      <ReviewsPageIntro />
      <FooterLinks />
      <Footer />
    </>
  );
};

export default ReviewsPage;
