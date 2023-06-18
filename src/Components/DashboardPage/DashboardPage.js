import React from "react";
import Footer from "../Footer/Footer";
import FooterLinks from "../Footer/FooterLinks";
import Menufixed from "../Menu/MenuFixed";
import DashboardPageIntro from "./DashboardPageIntro";

const DashboardPage = () => {
  return (
    <>
      <Menufixed />
      <DashboardPageIntro />
      <FooterLinks />
      <Footer />
    </>
  );
};

export default DashboardPage;
