import React, { useContext } from "react";
import styled from "styled-components";
import Group18866B from "../../img/photo-canvas/group-18866-b.svg";
import Group18866Y from "../../img/photo-canvas/group-18866-y.svg";
import Group18867B from "../../img/photo-canvas/group-18867-b.svg";
import Group18867Y from "../../img/photo-canvas/group-18867-y.svg";
import Group18868B from "../../img/photo-canvas/group-18868-b.svg";
import Group18868Y from "../../img/photo-canvas/group-18868-y.svg";
import Group18869B from "../../img/photo-canvas/group-18869-b.svg";
import Group18869Y from "../../img/photo-canvas/group-18869-y.svg";
import { GlobalContext } from "../../Consts/GlobalContext";
const PhotoCanvasPageSecondContentWrapper = styled.div`
  transition: all 0.6s ease-in;
  padding: 45px 375px 0;
  h2 {
    ${(props) => props.theme.body_semibold_40};
    margin-bottom: 80px;
    text-align: center;
  }
  .container {
    display: flex;
    margin-left: -15px;
    margin-right: -15px;
    .card {
      flex-basis: 25%;
      position: relative;
      min-height: 255px;
      .card-wrapper {
        margin: 0 15px;
        box-shadow: 0px 4px 10px #1a284d14;
        padding: 30px 15px 15px;
        background-color: #fff;
        border-radius: 5px;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        min-height: 255px;
        p {
          text-align: center;
          ${(props) => props.theme.body_regular_20};
          transition: all 0.4s ease-in-out;
        }
        img {
          display: block;
          margin: 20px auto 0;
          &:first-of-type {
            transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out,
              visibility 0.4s ease-in-out;
          }
          &:last-of-type {
            height: 0px;
            opacity: 0;
            margin: 0;
            transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out,
              visibility 0.4s ease-in-out;
          }
        }
        ul {
          margin-top: 25px;
          list-style: none;
          max-height: 0;
          overflow: hidden;
          text-align: center;
          transition: all 0.4s ease-in-out;
          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 25px;
            position: relative;
            span {
              text-align: center;
              &:first-child {
                ${(props) => props.theme.body_semibold_16};
              }
              &:last-child {
                ${(props) => props.theme.body_regular_16};
              }
            }
            .dot {
              width: 6px;
              height: 6px;
              background-color: #d3d8e6;
              border-radius: 50%;
            }
          }
        }
        &:hover {
          p {
            font-size: 24px;
            font-weight: 600;
          }
          img {
            &:first-of-type {
              height: 0;
              visibility: hidden;
              transform: scale(1.1);
              margin: 0;
            }
            &:last-of-type {
              opacity: 1;
              transform: scale(1.1);
              height: auto;
              visibility: visible;
              margin: 20px auto 0;
            }
          }
          ul {
            max-height: 200px;
          }
        }
      }
    }
  }
  @media (max-width: 1919px) {
    padding: 45px 150px 0;
  }
  @media (max-width: 1439px) {
    padding: 45px 50px 0;
    .container {
      flex-wrap: wrap;
      row-gap: 100px;
      .card {
        flex-basis: 50%;
      }
    }
  }

  @media (max-width: 1023px) {
    padding: 45px 20px 0;
    h2 {
      font-size: 34px;
      line-height: 47px;
    }
    .container {
    }
  }
  @media (max-width: 767px) {
    h2 {
      font-size: 28px;
      line-height: 39px;
    }
    .container {
      .card {
        flex-basis: 100%;
      }
    }
  }
`;

const PhotoCanvasPageSecondContent = () => {
  const { openMenu, t } = useContext(GlobalContext);
  return (
    <PhotoCanvasPageSecondContentWrapper className={openMenu && "opened-menu"}>
      <h2>{t("PhotoCanvasPageSecondContentTitle")}</h2>
      <div className="container">
        <div className="card">
          <div className="card-wrapper">
            <p>{t("PhotoCanvasPageSecondContentSquare")}</p>
            <img src={Group18866B} />
            <img src={Group18866Y} />
            <ul>
              <li>
                <span>40 x 30 cm</span>
                <span className="dot"></span> <span>€ 17.90</span>
              </li>
              <li>
                <span>40 x 30 cm</span>
                <span className="dot"></span> <span>€ 17.90</span>
              </li>
              <li>
                <span>40 x 30 cm</span>
                <span className="dot"></span> <span>€ 17.90</span>
              </li>
              <li>
                <span>40 x 30 cm</span>
                <span className="dot"></span> <span>€ 17.90</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-wrapper">
            <p>4:3</p>
            <img src={Group18867B} />
            <img src={Group18867Y} />
            <ul>
              <li>
                <span>40 x 30 cm</span>
                <span className="dot"></span> <span>€ 17.90</span>
              </li>
              <li>
                <span>80 x 60 cm</span>
                <span className="dot"></span> <span>€ 34.90</span>
              </li>
              <li>
                <span>100 x 75 cm</span>
                <span className="dot"></span> <span>€ 59.90</span>
              </li>
              <li>
                <span>120 x 90 cm</span>
                <span className="dot"></span> <span>€ 74.90</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-wrapper">
            <p>3:2</p>
            <img src={Group18868B} />
            <img src={Group18868Y} />
            <ul>
              <li>
                <span>40 x 30 cm</span>
                <span className="dot"></span> <span>€ 17.90</span>
              </li>
              <li>
                <span>40 x 30 cm</span>
                <span className="dot"></span> <span>€ 17.90</span>
              </li>
              <li>
                <span>40 x 30 cm</span>
                <span className="dot"></span> <span>€ 17.90</span>
              </li>
              <li>
                <span>40 x 30 cm</span>
                <span className="dot"></span> <span>€ 17.90</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-wrapper">
            <p>{t("PhotoCanvasPageSecondContentLandscape")}</p>
            <img src={Group18869B} />
            <img src={Group18869Y} />
            <ul>
              <li>
                <span>40 x 30 cm</span>
                <span className="dot"></span> <span>€ 17.90</span>
              </li>
              <li>
                <span>40 x 30 cm</span>
                <span className="dot"></span> <span>€ 17.90</span>
              </li>
              <li>
                <span>40 x 30 cm</span>
                <span className="dot"></span> <span>€ 17.90</span>
              </li>
              <li>
                <span>40 x 30 cm</span>
                <span className="dot"></span> <span>€ 17.90</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PhotoCanvasPageSecondContentWrapper>
  );
};

export default PhotoCanvasPageSecondContent;
