import React, { useContext } from "react";
import styled from "styled-components";
import BgImage from "../../img/photo-canvas/bg-image.png";
import { GlobalContext } from "../../Consts/GlobalContext";
import ListArrow from "../../img/list-arrow.svg";
import CustomUploadLink from "../CustomLinkComponent/CustomUploadLink";
const PhotoCanvasPageIntroWrapper = styled.div`
  transition: all 0.6s ease-in;
  padding: 45px 375px 0;
  .intro {
    background-image: url(${BgImage});
    background-repeat: no-repeat;
    padding: 45px 85px;
    .intro-text {
      h2 {
        ${(props) => props.theme.body_semibold_40};
      }
      ul {
        ${(props) => props.theme.body_regular_20};
        list-style-image: url(${ListArrow});
        color: #313540;
        margin: 20px 0 30px 25px;
        li {
          &:not(:last-child) {
            margin-bottom: 5px;
          }
        }
      }
      p {
        display: flex;
        align-items: center;
        > span {
          ${(props) => props.theme.body_semibold_16};
          position: relative;
          &:before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background-color: ${(props) => props.theme.secondary_color};
          }
        }
        > hr {
          margin: 0 15px;
          border: 1px solid #000;
          height: 17px;
        }
        a {
          padding: 0;
        }
      }
    }
  }

  @media (max-width: 1919px) {
    padding: 45px 150px 0;
  }
  @media (max-width: 1439px) {
    padding: 45px 50px 0;
  }
  @media (max-width: 1023px) {
    padding: 45px 20px 0;
    .intro {
      padding: 45px 30px;
      .intro-text {
        h2 {
          font-size: 30px;
          line-height: 42px;
        }
        ul {
          margin: 15px 0 20px 25px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    padding: 60px 20px 0;

    .intro {
      padding: 45px 15px;

      .intro-text {
        h2 {
          font-size: 28px;
          line-height: 39px;
        }
        ul {
          margin: 10px 0 10px 25px;
          font-size: 16px;
          line-height: 22px;
        }
        p {
          display: block;
          > hr {
            display: none;
          }
        }
      }
    }
  }
`;

const PhotoCanvasPageIntro = () => {
  const { openMenu, t } = useContext(GlobalContext);

  return (
    <PhotoCanvasPageIntroWrapper className={openMenu && "opened-menu"}>
      <div className="intro">
        <div className="intro-text">
          <h2>{t("PhotoCanvasPageIntroTitle")} </h2>
          <ul>
            <li>{t("PhotoCanvasPageIntroText1")}</li>
            <li>{t("PhotoCanvasPageIntroText2")}</li>
            <li>{t("PhotoCanvasPageIntroText3")}</li>
            <li>{t("PhotoCanvasPageIntroText4")}</li>
          </ul>
          <p>
            <span>{t("ProductsCardsPrice", { price: 5 })}</span>
            <hr></hr>
            <CustomUploadLink title="upload your design" />
          </p>
        </div>
      </div>
    </PhotoCanvasPageIntroWrapper>
  );
};

export default PhotoCanvasPageIntro;
