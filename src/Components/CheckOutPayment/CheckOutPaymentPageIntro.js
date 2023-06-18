import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Consts/GlobalContext";
import Group258 from "../../img/home-page/group-258.png";
import { Edit } from "@styled-icons/material/Edit";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { ErrorCircle } from "@styled-icons/fluentui-system-regular/ErrorCircle";

const stripePromise = loadStripe(
  "pk_test_51KZ2xDJvayqSBhAAqoRg1N8jqNZsGJdEzyD8iHFA30Ne9zjTci6o4YD5OkY6x8iYSnV7ZojPcURIDbccqpVNR1Zu00pqilsAVL"
);

const CheckOutPaymentPageIntroWrapper = styled.div`
  transition: all 0.6s ease-in;
  padding: 150px 375px 0;
  .parallax-effect {
    position: absolute;
    top: 0;
    left: 0;
    background: #ffc815;
    width: 100%;
    z-index: -2;
    height: 320px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    column-gap: 30px;
    .left {
      flex-basis: 58%;
      .left-wrapper {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 4px 4px 40px #1a284d29;
        padding: 70px;
        h3 {
          margin-bottom: 25px;
          ${(props) => props.theme.body_semibold_20};
          color: #313540;
          position: relative;
        }
        .delivery-address {
          p {
            ${(props) => props.theme.body_regular_18};
            color: #313540;
            &:nth-child(2) {
              margin-bottom: 30px;
            }
            &:nth-child(5) {
              margin-bottom: 30px;
            }
          }
          hr {
            border: 0;
            border-top: 1px solid #d3d8e6;
            margin: 30px 0 15px;
          }
          span {
            ${(props) => props.theme.body_regular_12};
            color: #6f768a;
          }
        }
      }
      .payment {
        margin-top: 35px;
        .payment-options {
          .payment-options-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .payment-btn {
              display: flex;
              align-items: center;
              column-gap: 10px;
              input {
                margin: 0;
              }
              label {
                ${(props) => props.theme.body_regular_18};
                color: #313540;
              }
            }
            .payment-img {
              display: flex;
              align-items: center;
            }
          }
          .payment-credit-card {
            max-height: 0;
            overflow: hidden;
            transition: all 0.6s ease-in;
            form {
              padding: 15px 30px 0;
              .form-group {
                label {
                  display: block;
                  ${(props) => props.theme.body_semibold_14};
                  color: #6f768a;
                  margin-bottom: 5px;
                }
                p {
                  ${(props) => props.theme.body_regular_12};
                  text-align: right;
                  margin-top: 5px;
                }
                input {
                  width: 100%;
                  border: 1px solid #d3d8e6;
                  border-radius: 3px;
                  padding: 18px 20px;
                  ${(props) => props.theme.body_semibold_16};
                  outline: none;
                }
                &:not(:last-child) {
                  margin-bottom: 15px;
                }
                .form-group-inner {
                  display: flex;
                  column-gap: 30px;
                  .date-expiry {
                    flex-basis: 30%;
                    input {
                      text-align: center;
                    }
                  }
                  .card-verification-number {
                    flex-grow: 1;
                  }
                }
              }
            }
          }
          .payment-credit-card.payment-active {
            max-height: 500px;
          }
        }
        hr {
          border: 0;
          border-top: 1px solid #d3d8e6;
          margin: 35px 0;
        }
      }
    }
    .edit-cart {
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      column-gap: 5px;
      .edit-cart-img {
        width: 24px;
        height: 24px;
        background-color: #000;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
      p {
        ${(props) => props.theme.body_semibold_14}
      }
    }
    .right {
      flex-basis: 39%;
      padding: 70px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 4px 4px 40px #1a284d29;
      position: sticky;
      top: 0;
      .right-wrapper {
        position: relative;
        h3 {
          ${(props) => props.theme.body_semibold_20};
          color: #313540;
          display: inline-block;
          margin-bottom: 35px;
        }
        hr {
          border: 0;
          border-top: 1px solid #d3d8e6;
          margin: 25px 0;
        }
        .cart-items {
          .item {
            display: flex;
            column-gap: 30px;
            img {
              width: 100px;
              height: 100px;
            }
            .item-text {
              flex-grow: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              h4 {
                ${(props) => props.theme.body_semibold_16}
              }
              p {
                ${(props) => props.theme.body_regular_14}
              }
              .item-price {
                display: flex;
                justify-content: space-between;
                align-items: center;
                span {
                  ${(props) => props.theme.body_semibold_20};
                  color: #313540;
                }
              }
            }
            &:not(:first-child) {
              margin-top: 15px;
            }
          }
        }

        .sub-total {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          p {
            span {
              display: block;
              &:first-child {
                ${(props) => props.theme.body_regular_20};
                color: #313540;
              }
              &:last-child {
                ${(props) => props.theme.body_regular_12}
                color:#6F768A;
              }
            }
          }
          > span {
            ${(props) => props.theme.body_semibold_20};
            color: #313540;
          }
        }
        .shipping {
          display: flex;
          justify-content: space-between;
          p {
            span {
              display: block;
              &:first-child {
                ${(props) => props.theme.body_regular_20};
                color: #313540;
              }
              &:last-child {
                ${(props) => props.theme.body_regular_12}
                color:#6F768A;
              }
            }
          }
          > span {
            ${(props) => props.theme.body_semibold_20};
            color: #313540;
          }
        }
        .total {
          display: flex;
          justify-content: space-between;
          p {
            ${(props) => props.theme.body_semibold_20};
            span {
              display: block;
              &:last-child {
                ${(props) => props.theme.body_regular_12};
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 1919px) {
    padding: 150px 150px 0;
  }
  @media (max-width: 1439px) {
    padding: 150px 50px 0;
    .container {
      column-gap: 20px;
      .left {
        flex-basis: 55%;
      }
    }
  }
  @media (max-width: 1023px) {
    padding: 150px 20px 0;
    .container {
      .left {
        .left-wrapper {
          padding: 30px;
        }
      }
      .right {
        padding: 30px;
      }
    }
  }
  @media (max-width: 1023px) {
    padding: 150px 20px 0;
    .container {
      .left {
        .left-wrapper {
          padding: 30px;
        }
      }
      .right {
        padding: 30px;
      }
    }
  }
  @media (max-width: 767px) {
    padding: 200px 20px 0;
    .container {
      display: block;
      .right {
        margin-top: 35px;
      }
    }
  }
`;

const CheckOutPaymentPageIntro = () => {
  const {
    openMenu,
    productObject,
    setProductObject,
    productsList,
    shippingPrice,
    whichAddress,
    shippingTotal,
    getUserData,
    userInfo,
    cookies,
    t,
    axiosHandler,
  } = useContext(GlobalContext);
  const [clientSecret, setClientSecret] = useState("");

  const handleEditCartClick = (e) => {
    e.preventDefault();
    window.location.pathname = "/check-out/cart";
  };

  const handleEditAddress = (e) => {
    setProductObject({
      ...productObject,
      address: null,
    });

    window.location.pathname = "/check-out/address";
  };

  useEffect(() => {
    console.log(window.constants);
    getUserData();
    if (window.constants) {
      if (localStorage.getItem("orderId")) {
        let orderId = localStorage.getItem("orderId");
        console.log(orderId);

        axiosHandler(
          "POST",
          `/api/v1/orders/${orderId}/payment`,
          null,
          window.constants.auth.token,
          {
            onSuccess: (response) => {
              setClientSecret(response.data);
            },
            onError: (error) => {
              return true;
            },
          }
        );
      }
    }
  }, []);
  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#FFC815",
      colorBackground: "#ffffff",
      colorText: "#313540",
      colorDanger: "#df1b41",
      fontFamily: "Montserrat,sans-serif",
      fontSizeBase: "20px",
      spacingUnit: "6px",
      borderRadius: "4px",
      colorIconTabSelected: "#FFC815",
      spacingGridRow: "30px",
      colorLogoTabSelected: "light",
      colorLogoTab: "light",
      colorIconTabMoreHover: "#FFC815",
      colorIconSelectArrow: "#FFC815",
      colorLogo: "light",
    },
  };
  const options = {
    // passing the client secret obtained from the server
    clientSecret,
    appearance,
  };

  return (
    <CheckOutPaymentPageIntroWrapper className={openMenu && "opened-menu"}>
      <div className="parallax-effect"></div>
      {/* <div className={isMessagePayment ? "errors active" : "errors"}>
        <ErrorCircle size="32" />
        <p>{messagePayment}</p>
      </div> */}
      <div className="container">
        <div className="left">
          <div className="left-wrapper">
            <h3>
              {t("DeliveryAddress")}
              <div className="edit-cart" onClick={(e) => handleEditAddress(e)}>
                <div className="edit-cart-img">
                  <Edit size="12" />
                </div>
                <p>{t("EditAddress")}</p>
              </div>
            </h3>
            <div className="delivery-address">
              {whichAddress === "sameBilling" &&
                productObject &&
                productObject.address && (
                  <>
                    <p>
                      {userInfo
                        ? `${userInfo.firstName} ${userInfo.lastName}`
                        : `${productObject.firstName} ${productObject.lastName}`}
                    </p>
                    <p>{userInfo ? userInfo.email : productObject.email}</p>
                    <p>{productObject.address.line1}</p>
                    <p>
                      {t("PostalCode")} {productObject.address.postalCode},{" "}
                      {productObject.address.city}
                    </p>
                    <p>{productObject.address.country}</p>
                  </>
                )}
              {whichAddress === "diffrentAddress"
                ? productObject &&
                  productObject.deliveryAddress && (
                    <>
                      <p>{`${productObject.deliveryAddress.firstName} ${productObject.deliveryAddress.lastName}`}</p>
                      <p>{productObject.deliveryAddress.email}</p>
                      <p>{productObject.deliveryAddress.line1}</p>
                      <p>
                        {t("Postal Code")}{" "}
                        {productObject.deliveryAddress.postalCode},{" "}
                        {productObject.deliveryAddress.city}
                      </p>
                      <p>{productObject.deliveryAddress.country}</p>
                    </>
                  )
                : cookies.isLoggedin &&
                  userInfo &&
                  userInfo.deliveryAddresses &&
                  userInfo.deliveryAddresses.map((el) => {
                    if (el.country) {
                    }
                  })}
              <hr />
              <span>{t("CheckOutPaymentPageIntroCheckYourAddress")}</span>
            </div>
          </div>
          <div className="left-wrapper payment">
            <h3>Payment Methods</h3>
            {clientSecret && (
              <Elements stripe={stripePromise} options={options}>
                <CheckOutForm />
              </Elements>
            )}
          </div>
        </div>
        <div className="right">
          <div className="right-wrapper">
            <div className="edit-cart" onClick={(e) => handleEditCartClick(e)}>
              <div className="edit-cart-img">
                <Edit size="12" />
              </div>
              <p>{t("EditCart")}</p>
            </div>
            <h3>{t("Summary")}</h3>
            <div className="cart-items">
              {productObject &&
                productObject.items &&
                productObject.items.map((item) => (
                  <div className="item">
                    <img src={Group258} />
                    <div className="item-text">
                      <div>
                        <h4>
                          {productsList &&
                            productsList.map(
                              (el) => el.id === item.productId && t(el.type)
                            )}
                        </h4>
                        <p>{item.format}cm</p>
                      </div>
                      <div className="item-price">
                        <p>
                          {t("Amount")} {item.quantity}
                        </p>
                        <span>€ {item.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <hr />
            <div className="sub-total">
              <p>
                <span>{t("SubTotal")}</span>
                <span>{t("IncludingVat")}</span>
              </p>
              <span>
                €{" "}
                {productObject &&
                  (
                    productObject.total +
                    productObject.total * (19 / 100)
                  ).toFixed(2)}
              </span>
            </div>
            <div className="shipping">
              <p>
                <span>{t("Shipping")}</span>
                <span>{shippingPrice && shippingPrice.name}</span>
              </p>
              <span>
                € {shippingTotal && parseFloat(shippingTotal).toFixed(2)}
              </span>
            </div>
            <hr />
            <div className="total">
              <p>
                <span>{t("Total")}</span>
                <span>{t("IncludingVatAndShipping")}</span>
              </p>
              <p>
                €{" "}
                {productObject &&
                  shippingPrice &&
                  (
                    productObject.total +
                    productObject.total * (19 / 100) +
                    parseFloat(shippingTotal)
                  ).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </CheckOutPaymentPageIntroWrapper>
  );
};

export default CheckOutPaymentPageIntro;
