import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Consts/GlobalContext";
import Group57742 from "../../img/check-out/group-57742.png";
import ItemComponent from "./ItemComponent";
import CustomLink from "../CustomLinkComponent/CustomLink";
import CustomProductLink from "../CustomLinkComponent/CustomProductLink";
import CustomNormalProductLink from "../CustomLinkComponent/CustomNormalProductLink";
import axios from "axios";
const CheckOutCartPageIntroWrapper = styled.div`
  transition: all 0.6s ease-in;
  padding: 190px 375px 0;

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
    column-gap: 30px;
    .left {
      align-self: baseline;
      flex-basis: 58%;
      background-color: #fff;
      border-radius: 10px;
      padding: 70px;
      box-shadow: 4px 4px 40px #1a284d29;
      > hr {
        margin: 77px 0;
        border: 0;
        border-top: 1px solid #d3d8e6;
      }
    }
    .right {
      flex-basis: 40%;
      .right-wrapper {
        background-color: #fff;
        border-radius: 10px;
        padding: 70px;
        box-shadow: 4px 4px 40px #1a284d29;
        position: sticky;
        top: 0;
      }
      input {
        width: 100%;
        border: none;
        background-color: #f6f8fc;
        padding: 18px 0;
        text-align: center;
        ${(props) => props.theme.body_semibold_16};
        outline: none;
        margin-bottom: 35px;
        &::placeholder {
          ${(props) => props.theme.body_regular_16};
        }
      }
      .sub-total {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
        p {
          ${(props) => props.theme.body_regular_20};
          span {
            display: block;
            &:last-child {
              ${(props) => props.theme.body_regular_12}
            }
          }
        }
        > span {
          ${(props) => props.theme.body_semibold_20};
        }
      }
      .shipping {
        margin-bottom: 25px;
        p {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;

          span {
            &:first-child {
              ${(props) => props.theme.body_regular_20};
            }
            &:last-child {
              ${(props) => props.theme.body_semibold_20};
            }
          }
        }
        select {
          -webkit-appearance: button;
          -moz-appearance: button;
          -webkit-user-select: none;
          -moz-user-select: none;
          -webkit-padding-end: 20px;
          -moz-padding-end: 20px;
          -webkit-padding-start: 20px;
          -moz-padding-start: 20px;
          background-color: white;

          background-position: center right;
          background-repeat: no-repeat;
          border: 1px solid #d3d8e6;
          border-radius: 3px;
          color: #6f768a;
          margin: 0;
          overflow: hidden;
          padding-top: 20px;
          padding-bottom: 20px;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
          ${(props) => props.theme.body_regular_16};
        }
      }
      .total {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
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

  @media (max-width: 1919px) {
    padding: 190px 150px 0;
  }

  @media (max-width: 1439px) {
    padding: 190px 50px 0;
    .container {
      .left {
        padding: 40px;
      }
      .right {
        .right-wrapper {
          padding: 40px;
        }
      }
    }
  }
  @media (max-width: 1023px) {
    padding: 190px 20px 0;
    .container {
      display: block;
      .right {
        margin-top: 25px;
      }
    }
  }
`;

const CheckOutCartPageIntro = () => {
  const {
    openMenu,
    productObject,
    shippingPrice,
    setShippingPrice,
    itemsProduct,
    shippingCountries,
    bearerToken,
    setProductObject,
    shippingTotal,
    setShippingTotal,
    handlingShippingDestinationChanges,
    t,
  } = useContext(GlobalContext);

  const handleShippingChange = (e) => {
    e.preventDefault();
    handlingShippingDestinationChanges(e.target.value);
  };

  useEffect(() => {
    if (productObject && productObject.items) {
      setShippingTotal(
        productObject.items.reduce(
          (accumulator, current) => accumulator + current.shippingPrice,
          0
        )
      );
    }
  }, []);

  return (
    <CheckOutCartPageIntroWrapper className={openMenu && "opened-menu"}>
      <div className="parallax-effect"></div>
      {productObject &&
        productObject.items &&
        productObject.items.length > 0 && (
          <div className="container">
            <div className="left">
              {productObject.items &&
                productObject.items.map((el, i) => {
                  return (
                    <ItemComponent
                      image={Group57742}
                      productId={el.productId}
                      format={el.format}
                      price={el.price}
                      quantity={el.quantity}
                      id={el.id}
                      fileId={el.fileId}
                      key={i}
                    />
                  );
                })}
            </div>
            <div className="right">
              <div className="right-wrapper">
                <input type="text" placeholder={t("EnterCouponHere")} />
                <CustomLink title="Redeem Voucher" to="/" align="center" />
                <div className="sub-total">
                  <p>
                    <span>{t("SubTotal")}</span>
                    <span>{t("IncludingVat")}</span>
                  </p>
                  <span>
                    {(productObject.total + productObject.total * 0.19).toFixed(
                      2
                    )}
                  </span>
                </div>
                <div className="shipping">
                  <p>
                    <span>{t("Shipping")}</span>{" "}
                    <span>€ {parseFloat(shippingTotal).toFixed(2)}</span>
                  </p>
                  <select
                    name="shipping"
                    id="shipping"
                    onChange={(e) => handleShippingChange(e)}
                    value={shippingPrice && shippingPrice.id}
                  >
                    {shippingCountries &&
                      shippingCountries.map((el, i) => (
                        <option key={1} value={el.id}>
                          {el.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="total">
                  <p>
                    <span>{"Total"}</span>
                    <span>{t("IncludingVatAndShipping")}</span>
                  </p>
                  <p>
                    €{" "}
                    {productObject &&
                      shippingTotal &&
                      (
                        productObject.total +
                        productObject.total * (19 / 100) +
                        parseFloat(shippingTotal)
                      ).toFixed(2)}
                  </p>
                </div>
                <CustomNormalProductLink
                  title="Check out"
                  to="/check-out/choice"
                />
              </div>
            </div>
          </div>
        )}
    </CheckOutCartPageIntroWrapper>
  );
};

export default CheckOutCartPageIntro;
