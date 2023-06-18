import React from "react";
import Menufixed from "../Menu/MenuFixed";
import FooterComponent from "../Footer/FooterComponent";
import PaySafely from "../PaySafelyComponent/PaySafely";
import Reviews from "../ReviewsComponent/Reviews";
import PhotoCanvasPageIntro from "./PhotoCanvasPageIntro";
import PhotoCanvasPageFirstContent from "./PhotoCanvasPageFirstContent";
import PhotoCanvasPageSecondContent from "./PhotoCanvasPageSecondContent";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import PhotoCanvasPageThirdContent from "./PhotoCanvasPageThirdContent";

const PhotoCanvasPage = () => {
  return (
    <>
      <Menufixed />
      <PhotoCanvasPageIntro />
      <PhotoCanvasPageFirstContent />
      <PhotoCanvasPageSecondContent />
      <FrequentlyAskedQuestions />
      <PhotoCanvasPageThirdContent />
      <PaySafely />
      <Reviews />
      <FooterComponent />
    </>
  );
};

export default PhotoCanvasPage;
