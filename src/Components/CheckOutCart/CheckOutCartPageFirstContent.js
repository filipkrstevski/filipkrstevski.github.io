import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Consts/GlobalContext";
import Group57742 from "../../img/check-out/group-57742.png";
import CustomLink from "../CustomLinkComponent/CustomLink";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const CheckOutCartPageFirstContentWrapper = styled.div`
  transition: all 0.6s ease-in;
  padding: 185px 445px 120px;
  background-color: #f6f8fc;

  .container {
    display: flex;
    column-gap: 30px;
    .left {
      img {
        width: 170px;
        height: 170px;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h3 {
        ${(props) => props.theme.body_semibold_20};
      }
      p {
        ${(props) => props.theme.body_semibold_18};
      }
      input {
        display: none;
      }
    }
  }

  @media (max-width: 1919px) {
    padding: 185px 150px 120px;
  }

  @media (max-width: 1439px) {
    padding: 185px 50px 120px;
  }
  @media (max-width: 1023px) {
    padding: 185px 20px 120px;
  }

  @media (max-width: 767px) {
    .container {
      display: block;
      text-align: center;
      .right {
        label {
          > div {
            text-align: center;
          }
        }
      }
    }
  }
`;
const CheckOutCartPageFirstContent = () => {
  const { openMenu, productObject, handleFileUpload, t } =
    useContext(GlobalContext);

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
    if (fileSelectEle && fileSelectEle.value.length == 0) {
      console.log("file canceled");
    } else {
      console.log("file uploaded");
    }
    document.body.onfocus = null;
  }
  return (
    <CheckOutCartPageFirstContentWrapper
      className={
        (openMenu && "opened-menu") ||
        (productObject && productObject.items && "no-items")
      }
    >
      <div className="container">
        <div className="left">
          <img src={Group57742} />
        </div>
        <div className="right">
          <div>
            <h3>Your design on other products</h3>
            <p>{t("ProductsCardsPrice", { price: "5.90" })}</p>
          </div>
          <input
            type="file"
            name="file"
            id="file-upload"
            ref={fileInput}
            onChange={(e) => handleFileUpload(e)}
            onClick={(e) => charge(e)}
          />
          <label htmlFor="file-upload" onClick={(e) => handleClick(e)}>
            <CustomLink
              title="DISCOVER OTHER PRODUCTS"
              isUploadingFile={true}
            />
          </label>
        </div>
      </div>
    </CheckOutCartPageFirstContentWrapper>
  );
};

export default CheckOutCartPageFirstContent;
