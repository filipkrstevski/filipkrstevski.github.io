import React, { useContext, useState } from "react";
import styled from "styled-components";
import amazonPay from "../../img/payment-methods/amazon.svg";
import americanExpressPay from "../../img/payment-methods/american-express.svg";
import klarnaPay from "../../img/payment-methods/klarna.svg";
import mastercardPay from "../../img/payment-methods/mastercard.svg";
import visaPay from "../../img/payment-methods/visa.svg";
import paypalPay from "../../img/payment-methods/paypal.svg";
import barzahlenPay from "../../img/payment-methods/barzahlen.png";
import piggy from "../../img/payment-methods/piggy.svg";
import { Lightbulb, BoxOpen } from "@styled-icons/fa-solid";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { InstagramAlt, Tiktok } from "@styled-icons/boxicons-logos";
import ListArrow from "../../img/list-arrow.svg";
import CustomLink from "../CustomLinkComponent/CustomLink";
import { GlobalContext } from "../../Consts/GlobalContext";
import { Trans } from "react-i18next";
import CustomNormalProductLink from "../CustomLinkComponent/CustomNormalProductLink";
import axios from "axios";
import SuccessMessageComponent from "../SuccessMessageComponent/SuccessMessageComponent";

const PaySafelyWrapper = styled.div`
  padding: 100px 375px;
  transition: all 0.6s ease-in;
  > p {
    ${(props) => props.theme.body_semibold_40};
    text-align: center;
  }
  .payment-methods {
    padding: 45px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #d3d8e6;
    margin: 60px 0 30px;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    .left-wrapper {
      background-color: ${(props) => props.theme.secondary_color};
      padding: 50px 100px;
      flex-basis: 65%;
      > p {
        text-align: center;
        &:first-of-type {
          ${(props) => props.theme.body_semibold_20};
          margin-bottom: 20px;
        }
        &:last-of-type {
          ${(props) => props.theme.body_regular_20};
        }
      }
      .cards-container {
        margin: 55px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .card {
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
          justify-content: center;
          min-height: 70px;
          > p {
            ${(props) => props.theme.body_semibold_12};
            flex-basis: 100%;
            text-align: center;
            align-self: flex-end;
          }
          icons {
            display: block;
            flex-basis: 100%;
          }
          &:first-child {
            .icons {
              margin-bottom: 10px;
              width: 45px;
            }
          }
          &:nth-child(2) {
            .icons {
              width: 45px;
            }
          }
          &:last-child {
            .icons {
              width: 25px;
            }
          }
        }
      }
      .email-input {
        display: flex;
        input {
          padding: 18px 13px;
          ${(props) => props.theme.body_semibold_16};
          border: none;
          outline: none;
          flex-basis: 75%;
          &::placeholder {
            color: #c1c6d2;
            ${(props) => props.theme.body_regular_16};
          }
        }
        .btn-subscribe {
          flex-basis: 25%;
          background-color: #000;
          color: white;
          display: flex;
          align-items: center;
          padding: 0 35px;
          border: 2px solid #000;
          text-decoration: none;
          span {
            ${(props) => props.theme.body_semibold_16};
            text-transform: uppercase;
          }
          .btn-arrow {
            margin-left: 10px;
          }
        }
      }
      .accept-privacy {
        flex-basis: 100%;
        display: flex;
        align-items: center;
        padding-left: 0 !important;
        margin: 20px 0 40px;
        label {
          display: inline-block;
          ${(props) => props.theme.body_regular_12};
          line-height: 19px;
        }
        input {
          width: unset;
          display: inline-block;
          margin: 0;
          margin-right: 10px;
          width: 24px;
          height: 24px;
          border: 1px solid #dce3eb;
          border-radius: 3px;
        }
      }
      .social-media {
        text-align: center;
        padding-top: 30px;
        border-top: 1px solid #fff;
        p {
          ${(props) => props.theme.body_semibold_20};
        }
        span {
          ${(props) => props.theme.body_regular_16};
          display: block;
          margin: 10px 0 30px;
        }
        .social-media-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          .social-links {
            width: 24px;
            height: 24px;
            color: #000;
            display: block;
            &:not(:last-of-type) {
              margin-right: 40px;
            }
          }
        }
      }
    }

    .right-wrapper {
      flex-basis: 32.5%;
      background-color: #000;
      color: #fff;
      padding: 50px 70px 30px;
      text-align: center;
      p {
        ${(props) => props.theme.body_semibold_20};
      }
      > span {
        ${(props) => props.theme.body_regular_16};
        display: block;
        margin: 20px 0 45px;
      }
      ul {
        list-style-image: url(${ListArrow});
        text-align: left;
        margin-bottom: 50px;
        li {
          ${(props) => props.theme.body_regular_16};
          &:not(:last-child) {
            margin-bottom: 30px;
          }
        }
      }
    }
  }

  @media (max-width: 1919px) {
    padding: 100px 150px;
  }
  @media (max-width: 1439px) {
    padding: 100px 50px;
  }
  @media (max-width: 1023px) {
    padding: 50px 20px;
    .payment-methods {
      padding: 35px 20px;
    }
    .wrapper {
      .left-wrapper {
        padding: 30px 25px;
      }
      .right-wrapper {
        padding: 30px 25px;
        ul {
          margin-left: 10px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    > p {
      font-size: 34px;
      line-height: 47px;
    }
    .payment-methods {
      flex-wrap: wrap;
      row-gap: 20px;
    }
    .wrapper {
      display: block;
      .left-wrapper {
        padding: 25px 10px;
        .email-input {
          display: block;
          input {
            width: 100%;
          }
        }
      }
      .right-wrapper {
        ul {
          margin-left: 15px;
        }
      }
    }
  }
`;

const PaySafely = () => {
  const {
    openMenu,
    t,
    bearerToken,
    setIsSuccess,
    setSuccessMessage,
    axiosHandler,
  } = useContext(GlobalContext);

  const [subscribeEmail, setSubscribeEmail] = useState();

  const handleEmailChange = (e) => {
    setSubscribeEmail(e.target.value);
  };

  const handleSubscribeClick = (e) => {
    e.preventDefault();
    if (subscribeEmail) {
      axiosHandler(
        "POST",
        `/api/v1/users/subscribe`,
        {
          email: subscribeEmail,
        },
        bearerToken,
        {
          onSuccess: (response) => {
            setIsSuccess(true);
            setSuccessMessage("SuccessfullySubscribed");
            setSubscribeEmail();
          },
          onError: (error) => {
            return true;
          },
        }
      );
    }
  };

  return (
    <PaySafelyWrapper className={openMenu && "opened-menu"}>
      <SuccessMessageComponent />
      <p>{t("PaySafelyComponentTitle")}</p>

      <div className="payment-methods">
        <img src={paypalPay} alt="" />
        <img src={visaPay} alt="" />
        <img src={americanExpressPay} alt="" />
        <img src={mastercardPay} alt="" />
        <img src={amazonPay} alt="" />
        <img src={klarnaPay} alt="" />
        <img src={barzahlenPay} alt="" />
      </div>
      <div className="wrapper">
        <div className="left-wrapper">
          <p>{t("PaySafelyComponentLeftWrapperTitle")}</p>
          <p>
            <Trans components={{ br: <br /> }}>
              PaySafelyComponentLeftWrapperText
            </Trans>
          </p>
          <div className="cards-container">
            <div className="card">
              <img className="icons" src={piggy} alt="" />
              <p>{t("PaySafelyComponentCard1")}</p>
            </div>
            <div className="card">
              <BoxOpen className="icons" />
              <p>{t("PaySafelyComponentCard2")}</p>
            </div>
            <div className="card">
              <Lightbulb className="icons"></Lightbulb>
              <p>{t("PaySafelyComponentCard3")}</p>
            </div>
          </div>
          <div className="email-input">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => handleEmailChange(e)}
              value={subscribeEmail}
            />
            <div onClick={(e) => handleSubscribeClick(e)}>
              <CustomNormalProductLink title="Subscribe" />
            </div>
          </div>
          <div className="accept-privacy">
            <input type="checkbox" name="acceptPP" />
            <label htmlFor="acceptPP">{t("PaySafelyComponentAcceptPP")}</label>
          </div>
          <div className="social-media">
            <p>{t("PaySafelyComponentSocialMediaTitle")}</p>
            <span>{t("PaySafelyComponentSocialMediaText")}</span>
            <div className="social-media-wrapper">
              <a
                href="https://www.facebook.com/myfotoart-100129875968673/"
                rel="noreferrer"
                className="social-links"
                target="_blank"
              >
                <FacebookRoundedIcon />
              </a>
              <a href="/" className="social-links" target="_blank">
                <InstagramAlt />
              </a>
              <a href="/" className="social-links" target="_blank">
                <YouTubeIcon />
              </a>
              <a href="/" className="social-links" target="_blank">
                <Tiktok />
              </a>
              <a href="/" className="social-links" target="_blank">
                <PinterestIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="right-wrapper">
          <p>{t("PaySafelyComponentRightWrapperTitle")}</p>
          <span>{t("PaySafelyComponentRightWrapperDesc")}</span>
          <ul>
            <li>{t("PaySafelyComponentRightWrapperText1")}</li>
            <li>{t("PaySafelyComponentRightWrapperText2")}</li>
            <li>{t("PaySafelyComponentRightWrapperText3")}</li>
            <li>{t("PaySafelyComponentRightWrapperText4")}</li>
            <li>{t("PaySafelyComponentRightWrapperText5")}</li>
            <li>{t("PaySafelyComponentRightWrapperText6")}</li>
          </ul>
          <CustomLink title="to the b2b shop" colorTheme="white" />
        </div>
      </div>
    </PaySafelyWrapper>
  );
};

export default PaySafely;
