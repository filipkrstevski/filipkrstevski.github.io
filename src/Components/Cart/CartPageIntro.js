import React, { useContext, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Consts/GlobalContext";
import Group94 from "../../img/check-out/group-94.png";
import CustomNormalProductLink from "../CustomLinkComponent/CustomNormalProductLink";
import CustomUploadLink from "../CustomLinkComponent/CustomUploadLink";
import Group18964 from "../../img/check-out/group-18964.svg";
import Group95 from "../../img/photo-canvas/group-95.png";
import WoodenFrame2 from "../../img/photo-canvas/woodenframe-2.png";
import WoodenFrame4 from "../../img/photo-canvas/woodenframe-4.png";
import Group99 from "../../img/photo-canvas/group-99.png";
import Group100 from "../../img/check-out/group-100.png";
import Group101 from "../../img/check-out/group-101.png";
import Group102 from "../../img/check-out/group-102.png";
import Group103 from "../../img/check-out/group-103.png";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useGesture } from "@use-gesture/react";

const CartPageIntroWrapper = styled.div`
  transition: all 0.6s ease-in;
  padding: 150px 375px 50px;
  .parallax-effect {
    position: fixed;
    top: 0;
    left: 0;
    background: #ffc815;
    width: 100%;
    z-index: -1;
    height: 320px;
  }

  .container {
    .container-wrapper {
      margin-left: -15px;
      margin-right: -15px;
      display: flex;
      .left {
        flex-basis: 60%;
        padding: 0 15px;
        .product {
          padding: 50px 70px;
          background-color: #fff;
          box-shadow: 4px 4px 40px #1a284d29;
          border-radius: 10px;
          h3 {
            ${(props) => props.theme.body_semibold_20};
            margin-bottom: 25px;
          }
          select {
            cursor: pointer;
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
          .formats-container {
            padding: 30px 30px;
            background-color: #f6f8fc;
            border-radius: 3px;
            margin-top: 30px;
            p {
              ${(props) => props.theme.body_semibold_16};
              color: #6f768a;
              margin-bottom: 5px;
            }
            > span {
              ${(props) => props.theme.body_regular_14};
              color: #6f768a;
              margin-bottom: 20px;
              display: block;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              tr {
                &:nth-child(2n + 1) {
                  background-color: #fff;
                }
              }
              td {
                padding: 10px;
                input {
                  cursor: pointer;
                }
                &:nth-child(2) {
                  text-align: right;
                  ${(props) => props.theme.body_semibold_16};
                }
                &:nth-child(3) {
                  text-align: right;
                  position: relative;
                  ${(props) => props.theme.body_regular_16};
                  &:before {
                    content: "";
                    width: 6px;
                    height: 6px;
                    background-color: #d3d8e6;
                    border-radius: 50%;
                    position: absolute;
                    left: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                  }
                }
                &:last-child {
                  text-align: center;
                  width: 150px;
                  > span {
                    display: inline-block;
                    background-color: ${(props) => props.theme.secondary_color};
                    border-radius: 30px;
                    ${(props) => props.theme.body_semibold_10};
                    padding: 5px 30px;
                  }
                }
              }
            }
          }
        }
        .left-first {
          margin-top: 50px;
          padding: 50px 70px;
          background-color: white;
          box-shadow: 4px 4px 40px #1a284d29;
          border-radius: 10px;
          > h3 {
            ${(props) => props.theme.body_semibold_20}
          }
          .choose-images {
            margin-top: 30px;
            display: flex;
            justify-content: space-between;

            .options {
              cursor: pointer;
              > label {
                display: block;
                cursor: pointer;

                img {
                  display: block;
                  width: 249px;
                  height: 178px;
                }
              }
              .radio-button {
                cursor: pointer;

                display: flex;
                align-items: center;
                column-gap: 10px;
                margin-top: 10px;
                input {
                  margin: 0;
                }
                label {
                  flex-grow: 1;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  span {
                    ${(props) => props.theme.body_regular_16};
                  }
                  .dot {
                    width: 6px;
                    height: 6px;
                    background-color: #d3d8e6;
                    border-radius: 50%;
                  }
                }
              }
            }
            .options.active {
              > label {
                img {
                  outline: 2px solid ${(props) => props.theme.secondary_color};
                  outline-offset: -2px;
                }
              }
            }
          }
        }
        .left-second {
          margin-top: 50px;
          padding: 50px 70px;
          background-color: white;
          box-shadow: 4px 4px 40px #1a284d29;
          border-radius: 10px;
          > h3 {
            ${(props) => props.theme.body_semibold_20}
          }
          .choose-images {
            margin-top: 30px;
            display: flex;
            justify-content: space-between;

            .options {
              cursor: pointer;
              > label {
                cursor: pointer;
                display: block;
                img {
                  display: block;
                  width: 249px;
                  height: 178px;
                }
              }
              .radio-button {
                cursor: pointer;
                display: flex;
                align-items: center;
                column-gap: 10px;
                margin-top: 10px;
                input {
                  margin: 0;
                }
                label {
                  flex-grow: 1;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  span {
                    ${(props) => props.theme.body_regular_16};
                  }
                  .dot {
                    width: 6px;
                    height: 6px;
                    background-color: #d3d8e6;
                    border-radius: 50%;
                  }
                }
              }
            }
            .options.active {
              > label {
                img {
                  outline: 2px solid ${(props) => props.theme.secondary_color};
                  outline-offset: -2px;
                }
              }
            }
          }
        }
        .left-third {
          margin-top: 50px;
          padding: 50px 70px;
          background-color: white;
          box-shadow: 4px 4px 40px #1a284d29;
          border-radius: 10px;
          > h3 {
            ${(props) => props.theme.body_semibold_20}
          }
          .choose-images {
            margin-top: 30px;
            display: flex;
            gap: 30px 19px;
            flex-wrap: wrap;

            .options {
              cursor: pointer;
              > label {
                cursor: pointer;
                display: block;
                img {
                  display: block;
                  width: 163px;
                  height: 117px;
                  border-radius: 3px;
                }
              }
              .radio-button {
                cursor: pointer;
                display: flex;
                align-items: center;
                column-gap: 10px;
                margin-top: 10px;
                input {
                  margin: 0;
                }
                label {
                  flex-grow: 1;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  span {
                    ${(props) => props.theme.body_regular_16};
                  }
                  .dot {
                    width: 6px;
                    height: 6px;
                    background-color: #d3d8e6;
                    border-radius: 50%;
                  }
                }
              }
            }
            .options.active {
              > label {
                img {
                  outline: 2px solid ${(props) => props.theme.secondary_color};
                  outline-offset: -2px;
                }
              }
            }
          }
        }
      }
      .right {
        flex-basis: 40%;
        padding: 0 15px;
        position: sticky;
        align-self: baseline;
        top: 0;
        .inner-right {
          box-shadow: 4px 4px 40px #1a284d29;
          background-color: #fff;
          padding: 70px;
          border-radius: 10px;
          height: 100%;
          .uploaded-image {
            position: relative;
            width: var(--formatImageWidth);
            margin: 0 auto;
            .top-dimension,
            .right-dimension {
              z-index: 1;
              position: absolute;
              > span {
                ${(props) => props.theme.body_regular_14};
                color: #6f768a;
                position: absolute;
              }
            }
            .top-dimension {
              height: 1px;
              width: 100%;
              top: -15px;
              left: 0;
              border-right: 1px solid #d3d8e6;
              border-left: 1px solid #d3d8e6;
              padding: 5px 0;
              > hr {
                margin: 0;
                border: 0;
                border-top: 1px solid #d3d8e6;
              }
              > span {
                top: -20px;
                left: 50%;
                transform: translateX(-50%);
              }
            }
            .right-dimension {
              height: 100%;
              right: -15px;
              top: 0;
              width: 1px;
              border-top: 1px solid #d3d8e6;
              border-bottom: 1px solid #d3d8e6;
              padding: 0 5px;
              > hr {
                height: 100%;
                margin: 0;
                border: 0;
                border-right: 1px solid #d3d8e6;
              }
              > span {
                display: block;
                right: -30px;
                top: 50%;
                transform: translateY(-50%) rotate(90deg);
              }
            }
            .image-wrapper {
              overflow: hidden;
              width: var(--formatImageWidth);
              height: 200px;
              margin: 0 auto;
              border: 1px solid #d3d8e6;
              img {
                position: relative;
                width: 303px;
                max-width: none;
                max-height: none;
                user-drag: none;
                user-select: none;
                -moz-user-select: none;
                -webkit-user-drag: none;
                -webkit-user-select: none;
                -ms-user-select: none;
              }
            }
          }
          > p {
            color: #313540;
            ${(props) => props.theme.body_regular_14};
            margin-top: 20px;
          }
          .tools {
            margin-top: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            > a {
              ${(props) => props.theme.body_semibold_16};
              color: #000;
              text-transform: uppercase;
            }
            #zoom-image {
              flex-basis: 60%;
              -webkit-appearance: none;
              width: 100%;
              height: 9px;
              border-radius: 5px;
              background: ${(props) => props.theme.secondary_color};
              outline: none;
              opacity: 0.7;
              -webkit-transition: 0.2s;
              transition: opacity 0.2s;
              &::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 25px;
                height: 25px;
                border-radius: 50%;
                background: ${(props) => props.theme.secondary_color};
                cursor: pointer;
                border: 3px solid white;
              }
              &::-moz-range-thumb {
                width: 25px;
                height: 25px;
                border-radius: 50%;
                background: ${(props) => props.theme.secondary_color};
                cursor: pointer;
                border: 3px solid white;
              }
            }
          }
          > hr {
            border: none;
            margin: 15px 0;
            border-top: 1.5px solid #707070;
          }
          .price {
            margin-bottom: 25px;
            .price-wrapper {
              display: flex;
              flex-align: center;
              justify-content: space-between;
              p {
                ${(props) => props.theme.body_regular_20};
                color: #313540;
              }
              span {
                ${(props) => props.theme.body_semibold_20};
                color: #313540;
              }
            }
            > span {
              ${(props) => props.theme.body_regular_12};
              color: #6f768a;
            }
          }
          .shopping-cart-btn {
            margin-bottom: 30px;
          }
        }
      }
    }
    .summary {
      hr {
        border: 0;
        border-top: 1px solid #d3d8e6;
        margin: 15px 0;
      }
      .summary-wrapper {
        .summary-text {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          h4 {
            ${(props) => props.theme.body_semibold_16};
            color: #313540;
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
          }
          .summary-text-wrapper {
            ${(props) => props.theme.body_regular_14};
            color: #6f768a;
            p {
              display: flex;
              justify-content: space-between;
              &:not(:last-child) {
                margin-bottom: 10px;
              }
            }
          }
          .summary-cart {
            display: flex;
            justify-content: space-between;
            .summary-buttons {
              display: flex;
              column-gap: 5px;
              span {
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
              ${(props) => props.theme.body_semibold_20};
              color: #313540;
            }
          }
        }
      }
      .summary-total {
        ${(props) => props.theme.body_semibold_20};
        font-size: 26px;
        display: flex;
        justify-content: space-between;
      }
    }
  }

  @media (max-width: 1919px) {
    padding: 150px 150px 50px;
  }

  @media (max-width: 1439px) {
    padding: 100px 50px 50px;
    .container {
      .container-wrapper {
        display: block;
        .right {
          margin-top: 25px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    padding: 100px 20px 50px;

    .container {
      .container-wrapper {
        .right {
          .inner-right {
            padding: 40px 20px;
          }
        }
        .left {
          .product,
          .left-first,
          .left-second,
          .left-third {
            padding: 25px 20px;
          }

          .left-first,
          .left-second {
            .choose-images {
              display: block;
              .options {
                &:not(:last-child) {
                  margin-bottom: 25px;
                }
              }
            }
          }
          .product {
            .formats-container {
              padding: 15px;
              table {
                td {
                  padding: 5px;
                  &:nth-child(3):before {
                    left: 0px;
                  }
                  &:last-child {
                    width: 85px;
                    > span {
                      padding: 5px 15px;
                    }
                  }
                }
              }
            }
          }
          .left-first {
            .choose-images {
              .options {
                > label {
                  img {
                    width: 340px;
                    height: auto;
                    margin: 0 auto;
                  }
                }
              }
            }
          }

          .left-second {
            .choose-images {
              .options {
                > label {
                  img {
                    width: 345px;
                    height: 215px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const CartPageIntro = () => {
  const {
    openMenu,
    localFile,
    productObject,
    setProductObject,
    productsList,
    itemsProduct,
    setItemsProduct,
    fileUpload,
    setFileUpload,
    bearerToken,
    imageFormats,
    setImageFormats,
    t,
    setCrop,
    crop,
    zoomSlider,
    setZoomSlider,
    axiosHandler,
    JWT_TOKEN,
  } = useContext(GlobalContext);

  const handleChooseOption = (e) => {
    let parents = e.currentTarget.parentElement.childNodes;
    for (let i = 0; i < parents.length; i++) {
      if (parents[i].classList.contains("active")) {
        parents[i].classList.remove("active");
      }
    }
    e.currentTarget.classList.add("active");
  };

  const handleZoomSlider = (e) => {
    // if (e.currentTarget.value < 100) {
    //   setZoomSlider("0" + e.currentTarget.value);
    // } else {
    setZoomSlider(e.currentTarget.value);
    // }
  };

  const handleFormatChange = (e) => {
    if (localStorage.getItem("isChanging")) {
      let formatNewPrice;
      if (imageFormats) {
        let formatsPrices = imageFormats.find(
          (el) => el.name === e.target.value
        );
        console.log(formatsPrices);
        if (formatsPrices.newPrice) {
          formatNewPrice = formatsPrices.newPrice;
        } else {
          formatNewPrice = formatsPrices.price;
        }
      }
      setItemsProduct({
        ...itemsProduct,
        price: formatNewPrice,
        [e.target.name]: e.target.value,
      });
    } else {
      if (e.target.type === "select-one") {
        let price = productsList.find(
          (product) => product.id === e.target.value
        );
        setItemsProduct({
          ...itemsProduct,
          productId: price.id,
          id: uuidv4(),
        });
      } else {
        console.log(e.target.value);
        if (e.target.name === "format") {
          if (imageFormats) {
            let formatsPrices = imageFormats.find(
              (el) => el.name === e.target.value
            );
            let sameWidth = e.target.value.split("x");
            console.log(sameWidth);
            if (sameWidth[0] < sameWidth[1]) {
              document.documentElement.style.setProperty(
                "--formatImageWidth",
                "200px"
              );
            } else if (sameWidth[0] === sameWidth[1]) {
              document.documentElement.style.setProperty(
                "--formatImageWidth",
                "200px"
              );
            } else {
              document.documentElement.style.setProperty(
                "--formatImageWidth",
                "303px"
              );
            }

            if (formatsPrices.newPrice > 0) {
              setItemsProduct({
                ...itemsProduct,
                [e.target.name]: e.target.value,
                price: formatsPrices.newPrice,
                shippingPrice: formatsPrices.shippingPrice,
                desc: {
                  ...itemsProduct.desc,
                  [e.target.name]: e.target.value,
                },
              });
            } else {
              setItemsProduct({
                ...itemsProduct,
                [e.target.name]: e.target.value,
                price: formatsPrices.price,
                shippingPrice: formatsPrices.shippingPrice,
                desc: {
                  ...itemsProduct.desc,
                  [e.target.name]: e.target.value,
                },
              });
            }
          }
        } else if (e.target.name === "hanging") {
          if (e.target.value === "no-hanging") {
            setItemsProduct({
              ...itemsProduct,
              quantity: 1,
              [e.target.name]: {
                type: e.target.value,
                price: 0,
              },
              desc: {
                ...itemsProduct.desc,
                [e.target.name]: {
                  type: e.target.value,
                  price: 0,
                },
              },
              id: uuidv4(),
            });
          } else {
            setItemsProduct({
              ...itemsProduct,
              quantity: 1,
              [e.target.name]: {
                type: e.target.value,
                price: 3,
              },
              desc: {
                ...itemsProduct.desc,
                [e.target.name]: {
                  type: e.target.value,
                  price: 3,
                },
              },
              id: uuidv4(),
            });
          }
        } else if (e.target.name === "border") {
          if (e.target.value === "2cm") {
            setItemsProduct({
              ...itemsProduct,
              quantity: 1,
              [e.target.name]: {
                type: e.target.value,
                price: 0,
              },
              desc: {
                ...itemsProduct.desc,
                [e.target.name]: {
                  type: e.target.value,
                  price: 0,
                },
              },
              id: uuidv4(),
            });
          } else {
            setItemsProduct({
              ...itemsProduct,
              quantity: 1,
              [e.target.name]: {
                type: e.target.value,
                price: 15,
              },
              desc: {
                ...itemsProduct.desc,
                [e.target.name]: {
                  type: e.target.value,
                  price: 15,
                },
              },
              id: uuidv4(),
            });
          }
        } else {
          setItemsProduct({
            ...itemsProduct,
            quantity: 1,
            [e.target.name]: e.target.value,
            desc: {
              ...itemsProduct.desc,
              [e.target.name]: e.target.value,
            },
            id: uuidv4(),
          });
        }
      }
    }

    localStorage.setItem("itemsProduct", JSON.stringify(itemsProduct));
  };

  const handleDoneAndUpload = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleDoneToCart = (e) => {
    e.preventDefault();
    let tempItemsProduct = itemsProduct;
    tempItemsProduct = {
      ...tempItemsProduct,
      desc: {
        ...tempItemsProduct.desc,
        transform: {
          offset: crop,
          scale: zoomSlider / 100,
        },
      },
    };
    if (
      itemsProduct.productId &&
      itemsProduct.border &&
      itemsProduct.frame &&
      itemsProduct.format &&
      itemsProduct.hanging &&
      itemsProduct.fileId
    ) {
      if (productObject && productObject.items) {
        let sameItemExist = productObject.items.find(
          (el) =>
            el.productId === itemsProduct.productId &&
            el.frame === itemsProduct.frame &&
            el.border === itemsProduct.border &&
            el.hanging === itemsProduct.hanging &&
            el.format === itemsProduct.format &&
            el.fileId === itemsProduct.fileId
        );
        if (!sameItemExist) {
          setProductObject({
            ...productObject,
            status: "OPEN",
            phone: "",
            items: [...productObject.items, tempItemsProduct],
            total: productObject.total + tempItemsProduct.price,
          });
        }
      } else {
        setProductObject({
          ...productObject,
          status: "OPEN",
          phone: "",
          items: [tempItemsProduct],
          total: tempItemsProduct.price,
        });
      }

      localStorage.removeItem("isChanging");
      localStorage.removeItem("fileStorage");
      localStorage.removeItem("itemsProduct");

      window.location.pathname = "/check-out/cart";
    }
  };

  useEffect(() => {
    console.log(window.constants);

    // type of is string and value is "undefined", strange
    let itemsProduct = localStorage.getItem("itemsProduct");
    if (itemsProduct && itemsProduct !== "{}" && itemsProduct !== "undefined") {
      console.log("itemsProductFromStorage: ", itemsProduct);
      let parsedItemsProduct = JSON.parse(itemsProduct);
      let shippingDestinationString = localStorage.getItem(
        "shippingDestination"
      );
      let shippingDestination;
      if (shippingDestinationString) {
        shippingDestination = JSON.parse(shippingDestinationString);

        axiosHandler(
          "POST",
          `/file/${parsedItemsProduct.fileId}/${shippingDestination.id}/${parsedItemsProduct.productId}`,
          undefined,
          JWT_TOKEN,
          {
            onSuccess: (response) => {
              if (response.data) {
                setImageFormats(response.data);

                localStorage.setItem(
                  "imageFormats",
                  JSON.stringify(response.data)
                );

                let newProductPrice = response.data.find(
                  (el) => el.name === parsedItemsProduct.format
                );
                let sameWidth = response.data[0].name.split("x");
                console.log(sameWidth);
                if (sameWidth[0] === sameWidth[1]) {
                  document.documentElement.style.setProperty(
                    "--formatImageWidth",
                    "200px"
                  );
                } else if (sameWidth[0] > sameWidth[1]) {
                  document.documentElement.style.setProperty(
                    "--formatImageWidth",
                    "200px"
                  );
                }
                if (newProductPrice && newProductPrice.newPrice) {
                  parsedItemsProduct = {
                    ...parsedItemsProduct,
                    price: newProductPrice.newPrice,
                    shippingPrice: newProductPrice.shippingPrice,
                  };
                } else {
                  if (newProductPrice && newProductPrice.price) {
                    parsedItemsProduct = {
                      ...parsedItemsProduct,
                      price: newProductPrice.price,
                      shippingPrice: newProductPrice.shippingPrice,
                    };
                  }
                }
                setItemsProduct(parsedItemsProduct);
              }
            },
            onError: (error) => {
              return true;
            },
          }
        );
      }
    } else {
      window.location.pathname = "products";
    }
    let fileStorageString = localStorage.getItem("fileStorage");
    if (fileStorageString && fileStorageString !== "undefined") {
      setFileUpload(fileStorageString);
    }
  }, []);

  let imageRef = useRef();
  useGesture(
    {
      onDrag: ({ offset: [dx, dy] }) => {
        setCrop((crop) => ({ ...crop, x: dx, y: dy }));
      },
    },
    {
      target: imageRef,
      eventOptions: { passive: false },
    }
  );

  return (
    <CartPageIntroWrapper className={openMenu && "opened-menu"}>
      <div className="parallax-effect"></div>
      <div className="container">
        <div className="container-wrapper">
          <div className="left">
            <div className="product">
              <h3>{t("Products_singular")}</h3>
              <select
                onChange={(e) => handleFormatChange(e)}
                name="productId"
                value={itemsProduct && itemsProduct.productId}
              >
                <option></option>
                {productsList &&
                  productsList.map((el) => {
                    // if (el.enabled) {
                    return (
                      <option key={el.id} value={el.id}>
                        {t(el.type)}
                      </option>
                    );
                    // }
                  })}
              </select>
              <div className="formats-container">
                <p>{t("CartPageIntroChooseFormat")}</p>
                {imageFormats && (
                  <span>
                    {t("CartPageIntroFormatsDesc", {
                      imageFormats: `${imageFormats.imgWidth}x${imageFormats.imgHeight}`,
                    })}
                  </span>
                )}
                <table>
                  <tbody
                    onChange={(e) => handleFormatChange(e)}
                    name="format"
                    value={itemsProduct && itemsProduct.format}
                  >
                    {imageFormats &&
                      imageFormats.map((el, i) => (
                        <tr key={i}>
                          <td>
                            <input
                              type="radio"
                              name="format"
                              value={el.name}
                              id={el.name}
                              checked={
                                itemsProduct &&
                                itemsProduct.format === el.name &&
                                true
                              }
                            />
                          </td>
                          <td>{el.name} cm</td>
                          <td className="price">€ {el.price}</td>
                          <td className="new-price">
                            {el.newPrice &&
                              el.newPrice > 0 &&
                              `€${el.newPrice}`}
                          </td>
                          <td className="badge">
                            {el.recommended && <span>{t("PriceTip")}</span>}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="left-first">
              <h3>{t("CartPageIntroChooseHanging")}</h3>
              <div
                className="choose-images"
                onChange={(e) => handleFormatChange(e)}
                value={
                  itemsProduct &&
                  itemsProduct.hanging &&
                  itemsProduct.hanging.type &&
                  itemsProduct.hanging.type
                }
              >
                <div
                  className={
                    itemsProduct &&
                    itemsProduct.hanging &&
                    itemsProduct.hanging.type &&
                    itemsProduct.hanging.type === "no-hanging"
                      ? "options active"
                      : "options"
                  }
                  onClick={(e) => handleChooseOption(e)}
                >
                  <label htmlFor="no-hanging">
                    <img src={Group18964} />
                  </label>
                  <div className="radio-button">
                    <input
                      type="radio"
                      name="hanging"
                      id="no-hanging"
                      value="no-hanging"
                      checked={
                        itemsProduct &&
                        itemsProduct.hanging &&
                        itemsProduct.hanging.type &&
                        itemsProduct.hanging.type === "no-hanging" &&
                        true
                      }
                    />
                    <label htmlFor="no-hanging">
                      <span>{t("CartPageIntroNoHanging")}</span>
                    </label>
                  </div>
                </div>
                <div
                  className={
                    itemsProduct &&
                    itemsProduct.hanging &&
                    itemsProduct.hanging.type &&
                    itemsProduct.hanging.type === "hanging-kit"
                      ? "options active"
                      : "options"
                  }
                  onClick={(e) => handleChooseOption(e)}
                >
                  <label htmlFor="hanging-kit">
                    <img src={Group95} />
                  </label>

                  <div className="radio-button">
                    <input
                      type="radio"
                      name="hanging"
                      id="hanging-kit"
                      value="hanging-kit"
                      checked={
                        itemsProduct &&
                        itemsProduct.hanging &&
                        itemsProduct.hanging.type &&
                        itemsProduct.hanging.type === "hanging-kit" &&
                        true
                      }
                    />
                    <label htmlFor="hanging-kit">
                      <span>{t("CartPageIntroHangingSet")}</span>
                      <span className="dot"></span> <span>€ 3.00</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="left-second">
              <h3>{t("CartPageIntroChooseFrame")}</h3>
              <div
                className="choose-images"
                onChange={(e) => handleFormatChange(e)}
                value={
                  itemsProduct &&
                  itemsProduct.border &&
                  itemsProduct.border.type &&
                  itemsProduct.border.type
                }
              >
                <div
                  className={
                    itemsProduct &&
                    itemsProduct.border &&
                    itemsProduct.border.type &&
                    itemsProduct.border.type === "2cm"
                      ? "options active"
                      : "options"
                  }
                  onClick={(e) => handleChooseOption(e)}
                >
                  <label htmlFor="2cm">
                    <img src={WoodenFrame2} />
                  </label>
                  <div className="radio-button">
                    <input
                      type="radio"
                      name="border"
                      id="2cm"
                      value="2cm"
                      checked={
                        itemsProduct &&
                        itemsProduct.border &&
                        itemsProduct.border.type &&
                        itemsProduct.border.type === "2cm" &&
                        true
                      }
                    />
                    <label htmlFor="2cm">
                      <span>2cm</span>
                    </label>
                  </div>
                </div>
                <div
                  className={
                    itemsProduct &&
                    itemsProduct.border &&
                    itemsProduct.border.type &&
                    itemsProduct.border.type === "4cm"
                      ? "options active"
                      : "options"
                  }
                  onClick={(e) => handleChooseOption(e)}
                >
                  <label htmlFor="4cm">
                    <img src={WoodenFrame4} />
                  </label>

                  <div className="radio-button">
                    <input
                      type="radio"
                      name="border"
                      id="4cm"
                      value="4cm"
                      checked={
                        itemsProduct &&
                        itemsProduct.border &&
                        itemsProduct.border.type &&
                        itemsProduct.border.type === "4cm" &&
                        true
                      }
                    />
                    <label htmlFor="4cm">
                      <span>4cm (XXL)</span>
                      <span className="dot"></span> <span>€ 15.00</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="left-third">
              <h3>{t("CartPageIntroChooseBorder")}</h3>
              <div
                className="choose-images"
                onChange={(e) => handleFormatChange(e)}
                value={itemsProduct && itemsProduct.frame}
              >
                <div
                  className={
                    itemsProduct && itemsProduct.frame === "dragged"
                      ? "options active"
                      : "options"
                  }
                  onClick={(e) => handleChooseOption(e)}
                >
                  <label htmlFor="dragged">
                    <img src={Group100} />
                  </label>
                  <div className="radio-button">
                    <input
                      type="radio"
                      name="frame"
                      id="dragged"
                      value="dragged"
                      checked={
                        itemsProduct && itemsProduct.frame === "dragged" && true
                      }
                    />
                    <label htmlFor="dragged">
                      <span>{t("dragged")}</span>
                    </label>
                  </div>
                </div>
                <div
                  className={
                    itemsProduct && itemsProduct.frame === "folded"
                      ? "options active"
                      : "options"
                  }
                  onClick={(e) => handleChooseOption(e)}
                >
                  <label htmlFor="folded">
                    <img src={Group99} />
                  </label>
                  <div className="radio-button">
                    <input
                      type="radio"
                      name="frame"
                      id="folded"
                      value="folded"
                      checked={
                        itemsProduct && itemsProduct.frame === "folded" && true
                      }
                    />
                    <label htmlFor="folded">
                      <span>{t("folded")}</span>
                    </label>
                  </div>
                </div>
                <div
                  className={
                    itemsProduct && itemsProduct.frame === "mirrored"
                      ? "options active"
                      : "options"
                  }
                  onClick={(e) => handleChooseOption(e)}
                >
                  <label htmlFor="mirrored">
                    <img src={Group101} />
                  </label>

                  <div className="radio-button">
                    <input
                      type="radio"
                      name="frame"
                      id="mirrored"
                      value="mirrored"
                      checked={
                        itemsProduct &&
                        itemsProduct.frame === "mirrored" &&
                        true
                      }
                    />
                    <label htmlFor="mirrored">
                      <span>{t("mirrored")}</span>
                    </label>
                  </div>
                </div>
                <div
                  className={
                    itemsProduct && itemsProduct.frame === "black"
                      ? "options active"
                      : "options"
                  }
                  onClick={(e) => handleChooseOption(e)}
                >
                  <label htmlFor="black">
                    <img src={Group102} />
                  </label>

                  <div className="radio-button">
                    <input
                      type="radio"
                      name="frame"
                      id="black"
                      value="black"
                      checked={
                        itemsProduct && itemsProduct.frame === "black" && true
                      }
                    />
                    <label htmlFor="black">
                      <span>{t("black")}</span>
                    </label>
                  </div>
                </div>
                <div
                  className={
                    itemsProduct && itemsProduct.frame === "white"
                      ? "options active"
                      : "options"
                  }
                  onClick={(e) => handleChooseOption(e)}
                >
                  <label htmlFor="white">
                    <img src={Group103} />
                  </label>
                  <div className="radio-button">
                    <input
                      type="radio"
                      name="frame"
                      id="white"
                      value="white"
                      checked={
                        itemsProduct && itemsProduct.frame === "white" && true
                      }
                    />
                    <label htmlFor="white">
                      <span>{t("white")}</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="inner-right">
              <div className="uploaded-image">
                <div className="top-dimension">
                  <hr />
                  <span>
                    {itemsProduct && itemsProduct.format.split("x")[0]}
                    cm
                  </span>
                </div>
                <div className="right-dimension">
                  <hr />
                  <span>
                    {itemsProduct && itemsProduct.format.split("x")[1]}
                    cm
                  </span>
                </div>
                <div className="image-wrapper">
                  <img
                    src={fileUpload ? fileUpload : Group94}
                    style={{
                      transform: `scale(${zoomSlider / 100})`,
                      left: crop.x,
                      top: crop.y,
                      touchAction: "none",
                    }}
                    ref={imageRef}
                  />
                </div>
              </div>
              <p>{t("CartPageIntroYourPhotoFits")}</p>
              <div className="tools">
                <a href="/">{t("AddText")}</a>
                <input
                  type="range"
                  min="30"
                  max="200"
                  value={zoomSlider}
                  id="zoom-image"
                  onChange={(e) => handleZoomSlider(e)}
                ></input>
              </div>
              <hr />
              {itemsProduct && (
                <div className="summary">
                  <>
                    <div className="summary-wrapper" key={itemsProduct.id}>
                      <div className="summary-text">
                        <h4>
                          {t("Products_singular")}
                          <span>
                            {productsList &&
                              productsList.map(
                                (el) =>
                                  el.id === itemsProduct.productId && t(el.type)
                              )}
                          </span>
                        </h4>
                        <div className="summary-text-wrapper">
                          <p>
                            {t("Format")}
                            <span>
                              <span className="format">
                                {itemsProduct && itemsProduct.format}
                              </span>{" "}
                              |{" "}
                              <span className="format-price">
                                € {itemsProduct && itemsProduct.price}
                              </span>
                            </span>
                          </p>
                          <p>
                            {t("FrameThickness")}
                            <span className="frame-thickness">
                              {itemsProduct &&
                                itemsProduct.border &&
                                itemsProduct.border.type &&
                                itemsProduct.border.type}
                            </span>
                          </p>
                          <p>
                            {t("TypeOfBorder")}
                            <span className="border-type">
                              {itemsProduct && t(itemsProduct.frame)}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </>
                  <div className="price">
                    <div className="price-wrapper">
                      <p>{t("Price")}</p>
                      <span>
                        €{" "}
                        {itemsProduct &&
                        itemsProduct.hanging &&
                        itemsProduct.border
                          ? itemsProduct.border.price &&
                            itemsProduct.hanging.price
                            ? (
                                itemsProduct.price +
                                itemsProduct.price * (19 / 100) +
                                itemsProduct.hanging.price +
                                itemsProduct.border.price
                              ).toFixed(2)
                            : itemsProduct.border.price
                            ? (
                                itemsProduct.price +
                                itemsProduct.price * (19 / 100) +
                                itemsProduct.border.price
                              ).toFixed(2)
                            : itemsProduct.hanging.price
                            ? (
                                itemsProduct.price +
                                itemsProduct.price * (19 / 100) +
                                itemsProduct.hanging.price
                              ).toFixed(2)
                            : (
                                itemsProduct.price +
                                itemsProduct.price * (19 / 100)
                              ).toFixed(2)
                          : ""}
                      </span>
                    </div>
                    <span>{t("IncludingVat")}</span>
                  </div>
                </div>
              )}
              <CustomUploadLink
                title="Done & Upload another photo"
                onClick={(e) => handleDoneAndUpload(e)}
                isAddToCart={true}
              />
              <hr />
              <div onClick={(e) => handleDoneToCart(e)}>
                <CustomNormalProductLink title="Done & continue cart" to="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CartPageIntroWrapper>
  );
};

export default CartPageIntro;
