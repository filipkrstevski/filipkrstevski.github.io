import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { KeyboardArrowRight } from "@styled-icons/material-rounded/KeyboardArrowRight";
import { GlobalContext } from "../../Consts/GlobalContext";
import { Link } from "react-router-dom";

const CustomProductLinkWrapper = styled.div`
  input {
    display: none;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    cursor: pointer;
    color: white;
    background-color: black;
    padding: 20px 50px;
    transition: outline 0.3s ease-in;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      > span {
        ${(props) => props.theme.body_semibold_16};
        transition: all 0.3s ease-in;
        &:last-child {
          margin-left: 20px;
          position: relative;
          svg {
            transition: all 0.3s ease-in;
            transform: translateX(6px);
          }
          &:before {
            content: "";
            width: 30px;
            height: 2px;
            border-top: 2.7px solid;
            border-color: inherit;
            border-radius: 2px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 4px;
            transition: all 0.3s ease-in;
            transform-origin: right;
          }
        }
      }
    }
    &:hover {
      outline: 1px solid black;

      > div {
        > span {
          &:first-child {
            transform: translateX(-5px);
          }
          &:last-child {
            svg {
              transform: translateX(15px);
            }
            &:before {
              width: 45px;
              right: -5px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1939px) {
    a {
      padding: 20px 30px;
    }
  }
`;

const CustomProductLink = ({ title, to, colorTheme, id }) => {
  const { handleFileUpload, t } = useContext(GlobalContext);
  const fileInput = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    fileInput.current.click();
  };

  return (
    <CustomProductLinkWrapper>
      <input
        name="file"
        type="file"
        accept="image/*"
        onChange={(e) => handleFileUpload(e, id)}
        ref={fileInput}
      />
      <Link
        to={to}
        style={{ color: colorTheme }}
        onClick={(e) => handleClick(e)}
      >
        <div>
          <span>{t(title)}</span>
          <span>
            <KeyboardArrowRight size="24" />
          </span>
        </div>
      </Link>
    </CustomProductLinkWrapper>
  );
};

export default CustomProductLink;
