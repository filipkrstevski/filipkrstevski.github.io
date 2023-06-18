import React from "react";
import styled from "styled-components";
import GiftBox from "../../img/home-page/gift-box.png";
import BusinessCard from "../../img/home-page/business-card.png";
import CustomLink from "../CustomLinkComponent/CustomLink";
import { useContext } from "react";
import { GlobalContext } from "../../Consts/GlobalContext";

const PromotionWrapper = styled.div`
  padding: 150px 375px;
  transition: all 0.6s ease-in;

  .promotion-card {
    background-color: #d3d8e6;
    display: flex;
    justify-content: space-between;
    padding: 58px 100px;
    .card-left {
      flex-basis: 50%;
      position: relative;
      z-index: 1;
      img {
        &:first-child {
          transform: translateY(-70px) rotate(-40deg);
          transition: all 0.6s ease-in-out;
        }
        &:nth-child(2) {
          position: absolute;
          bottom: 0;
          left: 35%;
          transform: translateX(-35%) rotate(-4deg);
          z-index: -1;
          transition: all 0.6s ease-in-out;
        }
      }
      &:hover {
        img {
          &:first-child {
            transform: translate(100px, -30px) rotate(-60deg);
          }
          &:nth-child(2) {
            left: 0;
            transform: translateX(0) rotate(4deg);
          }
        }
      }
    }
    .card-right {
      flex-basis: 35%;
      > span {
        ${(props) => props.theme.body_semibold_16};
        color: #6f768a;
        text-transform: uppercase;
      }
      > h2 {
        ${(props) => props.theme.body_semibold_40}
      }
      > p {
        ${(props) => props.theme.body_regular_18};
        color: #313540;
        margin: 15px 0 30px;
      }
    }
  }

  @media (max-width: 1919px) {
    padding: 150px 150px;
  }

  @media (max-width: 1439px) {
    padding: 150px 50px;
  }

  @media (max-width: 1023px) {
    padding: 100px 20px;
    .promotion-card {
      padding: 30px 25px;
      .card-left {
        img {
          &:first-child {
            transform: translate(20px, 30px) rotate(-40deg);
            width: 175px;
          }
          &:nth-child(2) {
            transform: translateX(-35%) rotate(-4deg);
            width: 150px;
          }
        }
        &:hover {
          img {
            &:first-child {
              transform: translate(50px, 0px) rotate(-60deg);
            }
            &:nth-child(2) {
              left: 0;
              transform: translateX(0) rotate(4deg);
            }
          }
        }
      }
      .card-right {
        flex-basis: 60%;
        h2 {
          font-size: 30px;
          line-height: 42px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    padding: 50px 20px;

    .promotion-card {
      display: block;
      .card-left {
        display: none;
      }

      .card-right {
        p {
          font-size: 16px;
          line-height: 22px;
        }
      }
    }
  }
`;

const Promotion = () => {
  const { openMenu, t } = useContext(GlobalContext);

  return (
    <PromotionWrapper className={openMenu && "opened-menu"}>
      <div className="promotion-card">
        <div className="card-left">
          <img src={GiftBox} />
          <img src={BusinessCard} />
        </div>
        <div className="card-right">
          <span>{t("new")}</span>
          <h2>{t("PromotionTitle")}</h2>
          <p>{t("PromotionText")}</p>
          <CustomLink title="discover now" to="/" />
        </div>
      </div>
    </PromotionWrapper>
  );
};

export default Promotion;
