import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { Upload } from "@styled-icons/bootstrap/Upload";
import { GlobalContext } from "../../Consts/GlobalContext";

const CustomUploadLinkWrapper = styled.div`
  input[type="file"] {
    display: none;
  }
  label {
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    padding: 15px 0;
    cursor: pointer;
    color: black;
    > div {
      display: flex;
      align-items: center;

      > span {
        ${(props) => props.theme.body_semibold_16};
        &:last-child {
          margin-left: 30px;
          position: relative;
          svg {
            transition: all 0.3s ease-in;
            transform: translateY(5px);
          }
          &:after {
            content: "";
            width: 44px;
            height: 44px;
            border: 2px solid;
            border-color: inherit;
            border-radius: 50%;
            position: absolute;
            top: -25px;
            left: 50%;
            transform: translateX(-50%);
            transition: all 0.3s ease-in;
          }
        }
      }
    }
    &:hover {
      > div {
        > span {
          &:last-child {
            svg {
              transform: translateY(-5px);
            }
            &:after {
              width: 72px;
              height: 72px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    label {
      > div {
        > span {
          &:last-child {
            margin-right: 10px;
          }
        }
      }
    }
  }
`;

const CustomUploadLink = ({ title, colorTheme, isAddToCart = false }) => {
  const {
    setFileUpload,
    setProductObject,
    productObject,
    itemsProduct,
    setItemsProduct,
    handleFileUpload,
    t,
    crop,
    zoomSlider,
  } = useContext(GlobalContext);

  const fileInput = useRef(null);

  var fileSelectEle = document.getElementById("file-upload");
  const handleClick = (e) => {
    e.preventDefault();
    fileInput.current.click();
  };

  function charge() {
    document.body.onfocus = function () {
      setTimeout(checkOnCancel, 100);
    };
  }

  function checkOnCancel() {
    if (isAddToCart) {
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
        itemsProduct &&
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
              items: [...productObject.items, tempItemsProduct],
              total: productObject.total + tempItemsProduct.price,
            });
          }
        } else {
          setProductObject({
            ...productObject,
            items: [tempItemsProduct],
            total: tempItemsProduct.price,
          });
        }
        localStorage.removeItem("isChanging");
        localStorage.removeItem("fileStorage");
      }

      setFileUpload("");
    }
    console.log(fileSelectEle);

    if (fileSelectEle && fileSelectEle.value.length == 0) {
      console.log("file canceled");

      // if (!(window.location.pathname === "/")) {
      //   setItemsProduct();
      //   window.location.pathname = "/check-out/cart";
      // }
    } else {
      console.log("file uploaded");
    }
    document.body.onfocus = null;
  }

  return (
    <CustomUploadLinkWrapper>
      <input
        type="file"
        name="file"
        id="file-upload"
        accept="image/*"
        onChange={(e) => handleFileUpload(e)}
        onClick={(e) => charge(e)}
        ref={fileInput}
      />
      <label
        style={{ color: colorTheme }}
        htmlFor="file-upload"
        onClick={(e) => handleClick(e)}
      >
        <div>
          <span>{t(title)}</span>
          <span>
            <Upload size="24" />
          </span>
        </div>
      </label>
    </CustomUploadLinkWrapper>
  );
};

export default CustomUploadLink;
