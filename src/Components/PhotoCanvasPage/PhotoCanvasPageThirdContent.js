import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Consts/GlobalContext";
import Group18894 from "../../img/photo-canvas/group-18894.svg";
import Group18895 from "../../img/photo-canvas/group-18895.svg";
import Group18897 from "../../img/photo-canvas/group-18897.svg";
import Group18898 from "../../img/photo-canvas/group-18898.svg";
const PhotoCanvasPageThirdContentWrapper = styled.div`
  transition: all 0.6s ease-in;
  padding: 150px 375px;
  h2 {
    ${(props) => props.theme.body_semibold_40};
    text-align: center;
    margin-bottom: 100px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 100px;
    margin-left: -30px;
    margin-right: -30px;
    .container-cards {
      padding: 0 30px;
      flex-basis: 50%;
      text-align: center;
      p {
        ${(props) => props.theme.body_semibold_20};
        margin-top: 30px;
      }
      span {
        ${(props) => props.theme.body_regular_14};
        margin-top: 15px;
        display: block;
      }
    }
  }

  @media (max-width: 1919px) {
    padding: 45px 150px 0;
  }
  @media (max-width: 1439px) {
    padding: 45px 50px 0;
    .container {
      margin-left: -15px;
      margin-right: -15px;
      .container-cards {
        padding: 0 15px;
      }
    }
  }
  @media (max-width: 1023px) {
    padding: 45px 20px 0;
    h2 {
      font-size: 32px;
      line-height: 45px;
    }
    .container {
      margin-left: 0;
      margin-right: 0;
      display: block;
      .container-cards {
        padding: 0;
        &:not(:last-child) {
          margin-bottom: 25px;
        }
      }
    }
  }
`;

const PhotoCanvasPageThirdContent = () => {
  const { openMenu, t } = useContext(GlobalContext);

  return (
    <PhotoCanvasPageThirdContentWrapper className={openMenu && "opened-menu"}>
      <h2>{t("PhotoCanvasPageThirdContentTitle")}</h2>
      <div className="container">
        <div className="container-cards">
          <img src={Group18894} />
          <p>{t("PhotoCanvasPageThirdContentFirstCardTitle")}</p>
          <span>{t("PhotoCanvasPageThirdContentFirstCardText")}</span>
        </div>
        <div className="container-cards">
          <img src={Group18897} />
          <p>{t("PhotoCanvasPageThirdContentSecondCardTitle")}</p>
          <span>
            {t("PhotoCanvasPageThirdContentSecondCardText")}
            Our photo canvas prints are a successful mixture of tradition and
            high-tech. The most modern printing processes are paired with
            classic wood processing, UV-resistant latex inks with the inimitable
            elegance of the canvas. Lively colors, strong contrasts and the
            finest image sharpness - the natural radiance of your photo canvas
            will give you years of pleasure.
          </span>
        </div>
        <div className="container-cards">
          <img src={Group18895} />
          <p>
            {t("PhotoCanvasPageThirdContentThirdCardTitle")}Lifelike colors and
            fantastic sharpness
          </p>
          <span>
            {t("PhotoCanvasPageThirdContentThirdCardText")}
            Our photo canvas prints are a successful mixture of tradition and
            high-tech. The most modern printing processes are paired with
            classic wood processing, UV-resistant latex inks with the inimitable
            elegance of the canvas. Lively colors, strong contrasts and the
            finest image sharpness - the natural radiance of your photo canvas
            will give you years of pleasure.
          </span>
        </div>
        <div className="container-cards">
          <img src={Group18898} />
          <p>
            {t("PhotoCanvasPageThirdContentFourthCardTitle")}Lifelike colors and
            fantastic sharpness
          </p>
          <span>
            {t("PhotoCanvasPageThirdContentFourthCardText")}
            Our photo canvas prints are a successful mixture of tradition and
            high-tech. The most modern printing processes are paired with
            classic wood processing, UV-resistant latex inks with the inimitable
            elegance of the canvas. Lively colors, strong contrasts and the
            finest image sharpness - the natural radiance of your photo canvas
            will give you years of pleasure.
          </span>
        </div>
      </div>
    </PhotoCanvasPageThirdContentWrapper>
  );
};

export default PhotoCanvasPageThirdContent;
