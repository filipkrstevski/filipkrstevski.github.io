import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Consts/GlobalContext";

const CheckOutProgressBarWrapper = styled.div`
  transition: all 0.6s ease-in;
  .progress-bar {
    padding: 65px 475px 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
      li {
        flex: 2;
        position: relative;
        padding: 14px 0 0;
        ${(props) => props.theme.body_semibold_18};
        color: #d9aa12;
        white-space: nowrap;
        overflow: visible;
        min-width: 0;
        text-align: center;
        border-top: 2px solid #d9aa12;
        &:first-child,
        &:last-child {
          flex: 1;
        }
        &:last-child {
          text-align: right;
        }
        &:first-child {
          text-align: left;
        }
        &:before {
          content: "";
          display: block;
          width: 22px;
          height: 22px;
          background-color: #d9aa12;
          border-radius: 50%;
          position: absolute;
          left: calc(50% - 10px);
          top: -12px;
          z-index: 3;
          transition: all 0.2s ease-in-out;
        }
        &:first-child:before {
          left: 0;
        }
        &:last-child:before {
          right: 0;
          left: auto;
        }
      }
      .is-complete:not(:first-child):after,
      .is-active:not(:first-child):after {
        content: "";
        display: block;
        width: 100%;
        position: absolute;
        top: -4px;
        left: -49%;
        z-index: 2;
        border-bottom: 6px solid black;
      }
      .is-complete {
        color: black;
        &:before {
          background-color: black;
        }
      }
      .is-active {
        color: black;
        &:before {
          background-color: black;
        }
        &:last-child:after {
          width: 200%;
          left: -100%;
        }
      }
    }
  }

  @media (max-width: 1919px) {
    .progress-bar {
      padding: 65px 250px 0;
    }
  }
  @media (max-width: 1023px) {
    .progress-bar {
      padding: 65px 150px 0;
    }
  }
  @media (max-width: 767px) {
    .progress-bar {
      padding: 125px 50px 0;
      ul {
        li {
          font-size: 15px;
          line-height: 21px;
        }
      }
    }
  }
`;

const CheckOutProgressBar = () => {
  const { openMenu, t } = useContext(GlobalContext);
  const [progressBar, setProgressBar] = useState("");
  useEffect(() => {
    let location = window.location.pathname.split("/")[2];
    setProgressBar(location);
  }, []);

  return (
    <CheckOutProgressBarWrapper className={openMenu && "opened-menu"}>
      <div className="progress-bar">
        <ul>
          <li
            className={
              (progressBar === "cart" && "is-active") ||
              (progressBar === "address" && "is-complete") ||
              (progressBar === "payment" && "is-complete") ||
              (progressBar === "finished" && "is-complete") ||
              (progressBar === "choice" && "is-active")
            }
          >
            <span>{t("Cart")}</span>
          </li>
          <li
            className={
              (progressBar === "address" && "is-active") ||
              (progressBar === "payment" && "is-complete") ||
              (progressBar === "finished" && "is-complete") ||
              (progressBar === "cart" && "")
            }
          >
            <span>{t("Address")}</span>
          </li>
          <li
            className={
              (progressBar === "payment" && "is-active") ||
              (progressBar === "finished" && "is-complete") ||
              (progressBar === "address" && "") ||
              (progressBar === "cart" && "")
            }
          >
            <span>{t("Payment")}</span>
          </li>
          <li className={progressBar === "finished" && "is-active"}>
            <span>{t("CheckOut")}</span>
          </li>
        </ul>
      </div>
    </CheckOutProgressBarWrapper>
  );
};

export default CheckOutProgressBar;
