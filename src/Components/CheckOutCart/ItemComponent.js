import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../Consts/GlobalContext";
import styled from "styled-components";
import { Edit } from "@styled-icons/material/Edit";
import { Delete } from "@styled-icons/material/Delete";
import axios from "axios";
const ItemComponentWrapper = styled.div`
  padding: 75px 0;
  &:not(:last-child) {
    border-bottom: 1px solid #d3d8e6;
  }
  &:first-child {
    padding-bottom: 75px;
  }
  &:last-child {
    padding-top: 75px;
  }
  .item-comp {
    display: flex;
    column-gap: 30px;
    position: relative;
    img {
      display: block;
      width: 170px;
      height: 170px;
    }
    .item-text {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .text-wrapper {
        h3 {
          ${(props) => props.theme.body_semibold_20};
          color: #313540;
        }
        p {
          ${(props) => props.theme.body_regular_18};
          color: #6f768a;
        }
      }
      .summary-cart {
        > p {
          ${(props) => props.theme.body_regular_18};
          color: #6f768a;
          display: flex;
          align-items: center;
          column-gap: 5px;
          .dot {
            display: block;
            width: 6px;
            height: 6px;
            background-color: #d3d8e6;
            border-radius: 50%;
          }
        }
        .summary-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          .summary-buttons {
            display: flex;
            column-gap: 5px;
            span {
              cursor: pointer;
              width: 40px;
              height: 35px;
              display: block;
              background-color: ${(props) => props.theme.secondary_color};
              display: flex;
              justify-content: center;
              align-items: center;
              ${(props) => props.theme.body_semibold_20};
            }
          }
          p {
            color: #313540;
            ${(props) => props.theme.body_semibold_20};

            span {
              ${(props) => props.theme.body_semibold_12};
              display: block;
              text-align: right;
              text-transform: uppercase;
            }
          }
        }
      }
    }
    .edit {
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
      .edit-comp {
        display: flex;
        align-items: center;
        column-gap: 10px;
        justify-content: space-between;
        .edit-left {
          width: 24px;
          height: 24px;
          background-color: black;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .edit-right {
          ${(props) => props.theme.body_semibold_14}
        }
        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    padding: 20px 0;
    &:first-child {
      padding-bottom: 20px;
    }
    &:last-child {
      padding-top: 20px;
    }
    .item-comp {
      display: block;
      img {
        width: 304px;
        height: 304px;
      }
      .item-text {
        margin-top: 25px;
      }

      .edit {
        top: 330px;
      }
    }
  }
`;

const ItemComponent = ({
  image,
  productId,
  frame,
  border,
  hanging,
  price,
  id,
  format,
  quantity,
  fileId,
}) => {
  const {
    productsList,
    productObject,
    setProductObject,
    setIsChanging,
    bearerToken,
    imageFormats,
    t,
  } = useContext(GlobalContext);

  const handleQuantityChange = (e, item) => {
    e.preventDefault();
    productObject.items.map((el) => {
      let prices;
      let shippingPrices;
      let localImageFormats = JSON.parse(localStorage.getItem("imageFormats"));
      localImageFormats.map((format) => {
        if (format.name === el.format) {
          if (format.newPrice) {
            prices = format.newPrice;
          } else {
            prices = format.price;
          }
          console.log(format);
          console.log(el);
          shippingPrices = format.shippingPrice;
          console.log(shippingPrices, "shippingprices");
        }
      });
      console.log(prices);
      console.log(el);
      if (e.target.classList.contains("increase")) {
        if (el.id === item) {
          el.quantity = el.quantity + 1;
          el.price = prices * el.quantity;
          el.shippingPrice = shippingPrices * el.quantity;
        }
      } else {
        if (el.id === item) {
          if (el.quantity === 1) {
            productObject.items = productObject.items.filter(
              (filter) => el.id !== filter.id
            );
          } else {
            el.quantity = el.quantity - 1;
            el.price = prices * el.quantity;
            el.shippingPrice = shippingPrices * el.quantity;
          }
          setProductObject({
            ...productObject,
            total: parseInt(
              productObject.items.map((el) => productObject.total - el.price)
            ),
          });
        }
      }
    });
    setProductObject({
      ...productObject,
      items: [...productObject.items],
    });
  };
  const sumTotal = () => {
    if (productObject.items) {
      setProductObject({
        ...productObject,
        total: productObject.items.reduce(
          (accumulator, current) =>
            accumulator +
            current.price +
            current.hanging.price +
            current.border.price,
          0
        ),
      });
    }
  };

  const handleRemoveItem = (e, id) => {
    e.preventDefault();
    console.log(id);
    setProductObject({
      ...productObject,
      items: productObject.items.filter((el) => el.id !== id),
    });
  };

  const handleChangeItem = (e, id) => {
    e.preventDefault();
    setIsChanging(true);
    let changingItem = productObject.items.find((el) => el.id === id);
    console.log(changingItem.fileId);
    localStorage.setItem("itemsProduct", JSON.stringify(changingItem));
    localStorage.setItem("isChanging", true);

    axios({
      method: "GET",
      url: `${window.baseurl}/api/v1/files/${changingItem.fileId}/content`,
      headers: {
        "content-type": "multipart/form-data",
        Accept: "multipart/form-data",
        Authorization: bearerToken,
      },
    })
      .then((response) => {
        console.log(response.config.url);
        localStorage.setItem("fileStorage", response.config.url);
      })
      .catch((err) => {
        console.log(err.response);
      });

    handleRemoveItem(e, id);
    setTimeout(() => {
      window.location.pathname = "/design-products";
    }, 300);
  };

  useEffect(() => {
    sumTotal();
    localStorage.setItem("order", JSON.stringify(productObject));
  }, [productObject.items]);
  return (
    <ItemComponentWrapper>
      <div className="item-comp">
        <img src={image} />
        <div className="item-text">
          <div className="text-wrapper">
            <h3>
              {productsList &&
                productsList.map((el) => el.id === productId && t(el.type))}
            </h3>
            <p>{format}</p>
          </div>
          <div className="summary-cart">
            <p>
              <span>{t("Unit")}</span>
              <span className="dot"></span>
              <span>
                €{" "}
                {imageFormats &&
                  imageFormats.map((el) =>
                    el.name === format
                      ? el.newPrice
                        ? el.newPrice
                        : el.price
                      : ""
                  )}
              </span>
            </p>
            <div className="summary-wrapper">
              <div className="summary-buttons">
                <span
                  className="decrease"
                  onClick={(e) => handleQuantityChange(e, id)}
                >
                  -
                </span>
                <span className="quantity">{quantity}</span>
                <span
                  className="increase"
                  onClick={(e) => handleQuantityChange(e, id)}
                >
                  +
                </span>
              </div>
              <p>
                <span>{t("Total")} </span>€ {price.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <div className="edit">
          <div className="edit-comp" onClick={(e) => handleChangeItem(e, id)}>
            <div className="edit-left">
              <Edit size="12" />
            </div>
            <div className="edit-right">
              <p>{t("Change")}</p>
            </div>
          </div>
          <div className="edit-comp" onClick={(e) => handleRemoveItem(e, id)}>
            <div className="edit-left">
              <Delete size="12" />
            </div>
            <div className="edit-right">
              <p>{t("Remove")}</p>
            </div>
          </div>
        </div>
      </div>
    </ItemComponentWrapper>
  );
};

export default ItemComponent;
