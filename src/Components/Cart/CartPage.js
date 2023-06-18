import React from "react";
import Footer from "../Footer/Footer";
import FooterLinks from "../Footer/FooterLinks";
import LoadingUpload from "../LoadingComponent/LoadingUpload";
import Menufixed from "../Menu/MenuFixed";
import PaySafely from "../PaySafelyComponent/PaySafely";
import Reviews from "../ReviewsComponent/Reviews";
import CartPageIntro from "./CartPageIntro";
const CartPage = () => {
  return (
    <>
      <Menufixed />
      <LoadingUpload />
      <CartPageIntro />
      <PaySafely />
      <Reviews />
      <FooterLinks />
      <Footer />
    </>
  );
};

export default CartPage;
