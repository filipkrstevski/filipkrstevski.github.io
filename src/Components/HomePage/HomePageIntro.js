import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import CustomLink from "../CustomLinkComponent/CustomLink";
import ArrowList from "../../img/list-arrow.svg";
import Group19020 from "../../img/home-page/group-19020.png";
import Group19020C from "../../img/home-page/group-19020-c.png";
import photo from "../../img/home-page/photo.png";
import { GlobalContext } from "../../Consts/GlobalContext";
import $ from "jquery";
import { Trans } from "react-i18next";
const HomePageIntroWrapper = styled.div`
  display: flex;
  transition: all 0.6s ease-in;

  .intro-left {
    padding: 225px 0 70px 275px;
    flex-basis: 50%;
    h1 {
      ${(props) => props.theme.h1_80};
      padding-right: 180px;
    }
    ul {
      list-style-image: url(${ArrowList});
      ${(props) => props.theme.body_regular_20};
      margin: 105px 0 135px;
      padding-right: 225px;
      li {
        span {
          text-decoration: underline;
          font-weight: bold;
        }
        &:not(:last-child) {
          margin-bottom: 25px;
        }
      }
    }
  }
  .intro-right {
    flex-basis: 50%;
    position: relative;
    margin: 0 auto;
    background: url(${Group19020});
    background-repeat: no-repeat;
    // overflow: hidden;
    .intro-right-inner {
      position: absolute;
      top: 210px;
      left: -110px;
      width: 454px;
      height: 622px;

      .image-wrapper {
        position: relative;
        top: 50%;
        left: 230px;
        width: 100%;
        height: 100%;
        transform: translate(-50%, -50%);
        background-repeat: no-repeat;
        background-image: url(${Group19020C});
        background-position: 26% 46%;
        z-index: 1;
        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          background-image: url(${photo});
          width: 100%;
          height: 100%;
        }
        // .image-background {
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        //   z-index: -1;
        //   background-image: url(${photo});
        //   width: 100%;
        //   height: 100%;
        //   transform: rotate(15deg);
        // }
      }
      .image-wrapper.active {
        animation: bannerAnimation 1s linear both;
      }
      .image-wrapper.back-active {
        animation: bannerAnimationBack 1s linear forwards;
      }
    }
  }

  @keyframes bannerAnimation {
    0% {
      left: var(--bannerAniStart);
      background-position: var(--bannerBackgroundAniStart);
    }
    100% {
      left: var(--bannerAniEnd);
      background-position: 78% 46%;
    }
  }
  @keyframes bannerAnimationBack {
    0% {
      left: var(--bannerAniEnd);
      background-position: var(--bannerBackgroundAniEnd);
    }
    100% {
      left: var(--bannerAniStart);
      background-position: 26% 46%;
    }
  }

  @media (max-width: 1919px) {
    .intro-left {
      padding: 150px 0 70px 150px;
      h1 {
        font-size: 70px;
        line-height: 98px;
      }
    }
  }

  @media (max-width: 1439px) {
    .intro-left {
      padding: 150px 0 70px 50px;
      h1 {
        font-size: 50px;
        line-height: 70px;
      }
    }

    .intro-right {
      .intro-right-inner {
        .image-wrapper.active {
          animation: none;
        }
        .image-wrapper.back-active {
          animation: none;
        }
      }
    }
  }

  @media (max-width: 1023px) {
    .intro-left {
      flex-basis: 100%;
    }
    .intro-right {
      display: none;
    }
  }
  @media (max-width: 767px) {
    .intro-left {
      h1 {
        padding-right: 60px;
      }
      ul {
        padding-right: 90px;
        margin: 55px 0 35px;
      }
    }
  }
`;

const HomePageIntro = () => {
  const { openMenu, t } = useContext(GlobalContext);
  useEffect(() => {
    $(".intro-right").on("mouseenter", function (e) {
      document.documentElement.style.setProperty("--bannerAniEnd", "669px");
      document.documentElement.style.setProperty(
        "--bannerAniStart",
        $(".image-wrapper").css("left")
      );
      document.documentElement.style.setProperty(
        "--bannerBackgroundAniStart",
        $(".image-wrapper").css("background-position")
      );
      $(".image-wrapper").addClass("active").removeClass("back-active");
    });

    $(".intro-right").on("mouseleave", function (e) {
      document.documentElement.style.setProperty(
        "--bannerAniEnd",
        $(".image-wrapper").css("left")
      );
      document.documentElement.style.setProperty(
        "--bannerBackgroundAniEnd",
        $(".image-wrapper").css("background-position")
      );
      document.documentElement.style.setProperty("--bannerAniStart", "230px");
      document.documentElement.style.setProperty(
        "--bannerBackgroundAniStart",
        "26% 46%"
      );
      $(".image-wrapper").removeClass("active").addClass("back-active");
    });
  }, []);
  return (
    <HomePageIntroWrapper className={openMenu && "opened-menu"}>
      <div className="intro-left">
        <h1>{t("HomePageIntroTitle")}</h1>
        <ul>
          <li>{t("HomePageIntroText1")}</li>
          <li>{t("HomePageIntroText2")}</li>
          <li>
            <Trans components={{ span: <span /> }}>HomePageIntroText3</Trans>
          </li>
        </ul>
        <CustomLink title="VIEW PRODUCTS" to="/products" />
      </div>
      <div className="intro-right">
        <div className="intro-right-inner">
          <div className="image-wrapper">
            <div className="image-background"></div>
          </div>
        </div>
      </div>
    </HomePageIntroWrapper>
  );
};

export default HomePageIntro;
