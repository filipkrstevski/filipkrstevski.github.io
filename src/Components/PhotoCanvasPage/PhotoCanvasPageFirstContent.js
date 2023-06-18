import React, { useContext } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Group4 from "../../img/home-page/group-04.png";
import Group9 from "../../img/home-page/group-09.png";
import Group258 from "../../img/home-page/group-258.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalContext } from "../../Consts/GlobalContext";
import WoodenFrame2 from "../../img/photo-canvas/woodenframe-2.png";
import WoodenFrame4 from "../../img/photo-canvas/woodenframe-4.png";
import Group531 from "../../img/photo-canvas/group-53-1.png";
import Group532 from "../../img/photo-canvas/group-53-2.png";
import ListArrow from "../../img/list-arrow.svg";
import CustomUploadLink from "../CustomLinkComponent/CustomUploadLink";

const PhotoCanvasPageFirstContentWrapper = styled.div`
  transition: all 0.6s ease-in;
  padding: 70px 375px 100px;
  .content-card {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .card-left {
      flex-basis: 50%;
      > span {
        ${(props) => props.theme.body_semibold_16};
        color: ${(props) => props.theme.secondary_color};
      }
      h2 {
        ${(props) => props.theme.body_semibold_40};
      }
      ul {
        ${(props) => props.theme.body_regular_14};
        color: #6f768a;
        list-style-image: url(${ListArrow});
        margin-left: 25px;
        li {
          &:not(:last-child) {
            margin-bottom: 10px;
          }
        }
      }
      .colors-patterns {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;
        .colors-wrapper {
          display: flex;
          margin-left: -10px;
          margin-right: -10px;
          .colors-circle {
            padding: 0 10px;
            .colors-circle-inner {
              position: relative;
              width: 51px;
              height: 51px;
              background-color: white;
              border-radius: 50%;
              > span {
                position: absolute;
                bottom: -30px;
                left: 50%;
                transform: translateX(-50%);
                opacity: 0;
                visibility: hidden;
                ${(props) => props.theme.body_regular_12};
                transition: all 0.4s ease-out;
                color: #6f768a;
              }

              &:hover {
                > span {
                  opacity: 1;
                  visibility: visible;
                }
              }
            }
            &:nth-child(1) {
              .colors-circle-inner {
                border: 8px solid #6f768a;
              }
            }
            &:nth-child(2) {
              .colors-circle-inner {
                border: 8px solid black;
              }
            }
            &:nth-child(3) {
              .colors-circle-inner {
                border: 8px solid white;
                &:before {
                  content: "";
                  width: 51px;
                  height: 51px;
                  border-radius: 50%;
                  border: 2px solid #d3d8e6;
                  position: absolute;
                  top: -8px;
                  left: -8px;
                }
                &:after {
                  content: "";
                  width: 35px;
                  height: 35px;
                  border-radius: 50%;
                  border: 2px solid #d3d8e6;
                  position: absolute;
                  top: 0px;
                  left: 0px;
                }
              }
            }
            &:nth-child(4) {
              .colors-circle-inner {
                border: 8px solid #7b5e57;
              }
            }
            &:nth-child(5) {
              .colors-circle-inner {
                border: 8px solid #c8b8a2;
              }
            }
          }
        }
      }
    }
    p {
      ${(props) => props.theme.body_regular_18};
      color: #313540;
      margin: 25px 0 30px;
    }
    h3 {
      ${(props) => props.theme.body_semibold_20};
      margin-bottom: 10px;
    }
    .group-text {
      > p {
        margin: 0;
      }
      > h3 {
        color: #313540;
      }
      &:first-of-type {
        margin-top: 30px;
      }
      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
    .card-right {
      width: 500px;
      .slider-images {
        img {
          width: 500px;
          height: 500px;
        }
      }
    }
    &:nth-child(2n + 1) {
      .card-left {
        order: 1;
      }
    }
    &:not(:last-child) {
      margin-bottom: 150px;
    }
    &:nth-child(3) {
      align-items: center;
      row-gap: 50px;
      > h2 {
        flex-basis: 100%;
        ${(props) => props.theme.body_semibold_40};
        text-align: center;
      }
      .card-left {
        order: 0;
        &:first-of-type {
          order: 1;
        }
        h3 {
          color: #313540;
          margin-bottom: 0;
        }
        p {
          margin: 25px 0 0;
        }
      }
      .card-right {
        width: 470px;
        img {
          width: 100%;
        }
      }
    }
    &:nth-child(4) {
      p {
        margin: 25px 0 0;
      }
      h3 {
        color: #313540;
      }
      .card-right {
        img {
          height: 575px;
        }
      }
    }
    &:nth-child(5) {
      p {
        margin: 0;
      }
      h3 {
        margin: 0;
        color: #313540;
      }
      .card-right {
        img {
          width: 500px;
          height: 390px;
        }
      }
    }
  }
  .slick-dots {
    bottom: -30px;
  }
  .slider-images {
    .slider-text {
      text-align: center;
      margin-top: 10px;
      ${(props) => props.theme.body_semibold_16};
      color: #6f768a;
      text-transform: uppercase;
    }
  }

  @media (max-width: 1919px) {
    padding: 70px 150px 100px;
  }
  @media (max-width: 1439px) {
    padding: 70px 50px 100px;
    .content-card {
      .card-right {
        width: 440px;
      }
      &:nth-child(3) {
        .card-right {
          width: 425px;
        }
      }
      &:nth-child(5) {
        .card-right {
          img {
            width: 100%;
            height: auto;
            display: block;
          }
        }
      }
      &:not(:last-child) {
        margin-bottom: 80px;
      }
    }
  }

  @media (max-width: 1023px) {
    padding: 70px 20px 50px;
    .content-card {
      display: block;
      .card-right {
        width: auto;
        text-align: center;
        margin-top: 25px;
      }
      &:nth-child(3) {
        .card-right {
          width: auto;
        }
      }
      &:nth-child(5) {
        .card-right {
          img {
            width: 100%;
            height: auto;
            display: block;
          }
        }
      }
      &:not(:last-child) {
        margin-bottom: 80px;
      }
    }
  }

  @media (max-width: 767px) {
    .content-card {
      .card-left {
        h2 {
          font-size: 28px;
          line-height: 39px;
        }
        .colors-patterns {
          display: block;
          .colors-wrapper {
            justify-content: space-between;
          }
        }
      }
      &:nth-child(3) {
        > h2 {
          font-size: 28px;
          line-height: 39px;
        }
      }
    }
  }
`;

const PhotoCanvasPageFirstContent = () => {
  const { openMenu, t } = useContext(GlobalContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };
  return (
    <PhotoCanvasPageFirstContentWrapper className={openMenu && "opened-menu"}>
      <div className="content-card">
        <div className="card-left">
          <h2>{t("PhotoCanvasPageFirstContentFirstCardTitle")}</h2>
          <p>{t("PhotoCanvasPageFirstContentFirstCardText")}</p>
          <h3>{t("PhotoCanvasPageFirstContentFirstCardListTitle")}</h3>
          <ul>
            <li>{t("PhotoCanvasPageFirstContentFirstCardListText1")}</li>
            <li>{t("PhotoCanvasPageFirstContentFirstCardListText2")}</li>
            <li>{t("PhotoCanvasPageFirstContentFirstCardListText3")}</li>
            <li>{t("PhotoCanvasPageFirstContentFirstCardListText4")}</li>
            <li>{t("PhotoCanvasPageFirstContentFirstCardListText5")}</li>
          </ul>
        </div>
        <div className="card-right">
          <Slider {...settings}>
            <div className="slider-images">
              <img src={Group9} />
            </div>
            <div className="slider-images">
              <img src={Group4} />
            </div>
            <div className="slider-images">
              <img src={Group258} />
            </div>
          </Slider>
        </div>
      </div>
      <div className="content-card">
        <div className="card-left">
          <h2>{t("PhotoCanvasPageFirstContentSecondCardTitle")}</h2>
          <div className="group-text">
            <h3>{t("PhotoCanvasPageFirstContentSecondCardGroupTitle1")}</h3>
            <p>{t("PhotoCanvasPageFirstContentSecondCardGroupText1")}</p>
          </div>
          <div className="group-text">
            <h3>{t("PhotoCanvasPageFirstContentSecondCardGroupTitle2")}</h3>
            <p>{t("PhotoCanvasPageFirstContentSecondCardGroupText2")}</p>
          </div>
          <div className="group-text">
            <h3>{t("PhotoCanvasPageFirstContentSecondCardGroupTitle3")}</h3>
            <p>{t("PhotoCanvasPageFirstContentSecondCardGroupText3")}</p>
          </div>
        </div>
        <div className="card-right">
          <Slider {...settings}>
            <div className="slider-images">
              <img src={Group9} />
              <div className="slider-text">Folded edge</div>
            </div>
            <div className="slider-images">
              <img src={Group4} />
              <div className="slider-text">Mirrored edge</div>
            </div>
            <div className="slider-images">
              <img src={Group258} />
              <div className="slider-text">Torn edge</div>
            </div>
            <div className="slider-images">
              <img src={Group258} />
              <div className="slider-text">White edge</div>
            </div>
          </Slider>
        </div>
        <div className="additional-content-card">
          <div className="group-text">
            <h3>{t("PhotoCanvasPageFirstContentSecondCardGroupTitle4")}</h3>
            <p>{t("PhotoCanvasPageFirstContentSecondCardGroupText4")}</p>
          </div>
          <div className="group-text">
            <h3>{t("PhotoCanvasPageFirstContentSecondCardGroupTitle5")}</h3>
            <p>{t("PhotoCanvasPageFirstContentSecondCardGroupText5")}</p>
          </div>
        </div>
      </div>
      <div className="content-card">
        <h2>{t("PhotoCanvasPageFirstContentThirdCardTitle")}</h2>
        <div className="card-left">
          <h3>{t("PhotoCanvasPageFirstContentThirdCardGroupTitle1")}</h3>
          <p>{t("PhotoCanvasPageFirstContentThirdCardGroupText1")}</p>
        </div>
        <div className="card-right">
          <img src={WoodenFrame2} />
        </div>
        <div className="card-left">
          <h3>{t("PhotoCanvasPageFirstContentThirdCardGroupTitle2")}</h3>
          <p>{t("PhotoCanvasPageFirstContentThirdCardGroupText2")}</p>
        </div>
        <div className="card-right">
          <img src={WoodenFrame4} />
        </div>
      </div>
      <div className="content-card">
        <div className="card-left">
          <span>{t("ThatCertainExtra")}</span>
          <h2>{t("PhotoCanvasPageFirstContentFourthCardTitle")}</h2>
          <p>{t("PhotoCanvasPageFirstContentFourthCardText1")}</p>
          <p>{t("PhotoCanvasPageFirstContentFourthCardText2")}</p>
          <p>{t("PhotoCanvasPageFirstContentFourthCardText3")}</p>
          <div className="colors-patterns">
            <h3>{t("PhotoCanvasPageFirstContentFourthCardColorsTitle")}</h3>
            <div className="colors-wrapper">
              <div className="colors-circle">
                <div className="colors-circle-inner">
                  <span>{t("ColorSilver")}</span>
                </div>
              </div>
              <div className="colors-circle">
                <div className="colors-circle-inner">
                  <span>{t("ColorBlack")}</span>
                </div>
              </div>
              <div className="colors-circle">
                <div className="colors-circle-inner">
                  <span>{t("ColorWhite")}</span>
                </div>
              </div>
              <div className="colors-circle">
                <div className="colors-circle-inner">
                  <span>{t("ColorWalnut")}</span>
                </div>
              </div>
              <div className="colors-circle">
                <div className="colors-circle-inner">
                  <span>{t("ColorOak")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-right">
          <Slider {...settings}>
            <div className="slider-images">
              <img src={Group531} />
            </div>
            <div className="slider-images">
              <img src={Group532} />
            </div>
            <div className="slider-images">
              <img src={Group258} />
            </div>
          </Slider>
        </div>
      </div>
      <div className="content-card">
        <div className="card-left">
          <h2>{t("PhotoCanvasPageFirstContentFifthCardTitle")}</h2>
          <div className="group-text">
            <h3>{t("PhotoCanvasPageFirstContentFifthCardGroupTitle1")}</h3>
            <p>{t("PhotoCanvasPageFirstContentFifthCardGroupText1")}</p>
          </div>
          <CustomUploadLink title="upload your design" />
        </div>
        <div className="card-right">
          <img src={Group9} />
        </div>
      </div>
    </PhotoCanvasPageFirstContentWrapper>
  );
};

export default PhotoCanvasPageFirstContent;
