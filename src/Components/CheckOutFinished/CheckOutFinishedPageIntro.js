import React, { useContext, useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
  CardElement,
} from "@stripe/react-stripe-js";
import styled from "styled-components";
import { GlobalContext } from "../../Consts/GlobalContext";
import CustomProductLink from "../CustomLinkComponent/CustomProductLink";
import BgImage from "../../img/check-out/bg-image.png";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import CustomLink from "../CustomLinkComponent/CustomLink";
import { ErrorCircle } from "styled-icons/fluentui-system-regular";
import axios from "axios";

const CheckOutFinishedPageIntroWrapper = styled.div`
  transition: all 0.6s ease-in;
  padding: 555px 375px 0;
  .parallax-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -2;
    height: 720px;
    background-image: url(${BgImage});
    background-repeat: no-repeat;
  }
  .container {
    border-radius: 10px;
    padding: 70px;
    text-align: center;
    background-color: white;
    box-shadow: 4px 4px 40px #1a284d14;

    > p {
      ${(props) => props.theme.body_regular_24};
      color: #313540;
      margin: 25px 0 45px;
    }
    h2 {
      ${(props) => props.theme.body_semibold_40};
      margin-bottom: 35px;
    }
    .invoice-btn {
      margin-bottom: 25px;
      a {
        display: inline-block;
        padding: 20px 90px;
      }
    }
  }

  @media (max-width: 1919px) {
    padding: 555px 150px 0;
  }
  @media (max-width: 1439px) {
    padding: 555px 50px 0;
    .parallax-effect {
      background-position: 50% 0%;
    }
  }
  @media (max-width: 1023px) {
    padding: 555px 20px 0;
    .container {
      padding: 30px;
    }
  }

  @media (max-width: 767px) {
    padding: 220px 20px 0;

    .parallax-effect {
      background-position: 0% 0%;
      height: 350px;
    }
    .container {
      .invoice-btn {
        a {
          padding: 20px 40px;
        }
      }
    }
  }
`;

const CheckOutFinishedPageIntro = () => {
  const { openMenu, t } = useContext(GlobalContext);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const paymentStatus = new URLSearchParams(window.location.search).get(
      "redirect_status"
    );
    console.log(paymentStatus);
    if (paymentStatus === "succeeded") {
      localStorage.removeItem("fileType");
      localStorage.removeItem("imageFormats");
      localStorage.removeItem("orderId");
      localStorage.removeItem("order");
      localStorage.removeItem("itemsProduct");
      localStorage.removeItem("shippingTotal");
      localStorage.removeItem("whichAddress");
      localStorage.removeItem("shippingDestination");

      Object.keys(localStorage).map((el) => {
        localStorage.removeItem(el);
      });
    }
    if (window.constants.userInfo) {
      axios({
        method: "GET",
        url: `${window.baseurl}/api/v1/users/${window.constants.userInfo.id}`,
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          Authorization: window.constants.auth.token,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  }, []);

  return (
    <CheckOutFinishedPageIntroWrapper className={openMenu && "opened-menu"}>
      <div className="parallax-effect"></div>
      <div className="container">
        <CheckCircleFill size="48" />
        <p>{t("PaymentSuccessful")}</p>
        <h2>{t("ThankYouForYourPurchase")}</h2>
        <div className="invoice-btn">
          <CustomProductLink title="PRINT INVOICE" />
        </div>
        <CustomLink
          title="DISCOVER MORE PRODUCTS"
          to="/products"
          align="center"
        />
      </div>
    </CheckOutFinishedPageIntroWrapper>
  );
};

export default CheckOutFinishedPageIntro;
