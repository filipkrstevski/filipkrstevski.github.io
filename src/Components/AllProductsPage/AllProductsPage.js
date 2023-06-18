import React from "react";
import Menufixed from "../Menu/MenuFixed";
import FooterComponent from "../Footer/FooterComponent";
import PaySafely from "../PaySafelyComponent/PaySafely";
import Reviews from "../ReviewsComponent/Reviews";
import AllProductsPageIntro from "./AllProductsPageIntro";
import AllProductsPageProducts from "./AllProductsPageProducts";
import LoadingUpload from "../LoadingComponent/LoadingUpload";
import HomePageProducts from "../HomePage/HomePageProducts";

const AllProductsPage = () => {
  return (
    <>
      <Menufixed />
      <LoadingUpload />
      <AllProductsPageIntro />
      {/* <AllProductsPageProducts /> */}
      <HomePageProducts />
      <PaySafely />
      <Reviews />
      <FooterComponent />
    </>
  );
};

export default AllProductsPage;
