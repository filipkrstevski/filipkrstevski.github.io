import React, { useContext } from "react";
import styled from "styled-components";
import { KeyboardArrowRight } from "@styled-icons/material-rounded/KeyboardArrowRight";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Consts/GlobalContext";

const CustomLinkWrapper = styled.div`
  text-align: left;
  a {
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
            border: 1px solid;
            border-color: inherit;
            border-radius: 2px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: -10px;
            transition: all 0.3s ease-in;
          }
          &:after {
            content: "";
            width: 52px;
            height: 52px;
            border: 2px solid;
            border-color: inherit;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 5px;
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
              transform: translateX(36px) scaleX(1);
            }
            &:before {
              width: 20px;
              left: 31px;
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

  @media (max-width: 1023px) {
    a {
      > div {
        > span {
          font-size: 14px;
          &:last-child {
            &:after {
              width: 32px;
              height: 32px;
            }
          }
        }
      }
      &:hover {
        > div {
          > span {
            &:last-child {
              svg {
                transform: translateX(28px) scaleX(1);
              }
              &:before {
                left: 21px;
              }
              &:after {
                width: 52px;
                height: 52px;
              }
            }
          }
        }
      }
    }
  }
`;

const CustomLink = ({
  title,
  to = "/coming-soon",
  colorTheme,
  align,
  isUploadingFile = false,
}) => {
  const { t } = useContext(GlobalContext);
  return (
    <CustomLinkWrapper style={{ textAlign: align }}>
      {isUploadingFile === false ? (
        <Link to={to} style={{ color: colorTheme }}>
          <div>
            <span>{t(title)}</span>
            <span>
              <KeyboardArrowRight size="24" />
            </span>
          </div>
        </Link>
      ) : (
        <a style={{ color: colorTheme }}>
          <div>
            <span>{t(title)}</span>
            <span>
              <KeyboardArrowRight size="24" />
            </span>
          </div>
        </a>
      )}
    </CustomLinkWrapper>
  );
};

export default CustomLink;
