import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Consts/GlobalContext";
import BgImage from "../../img/reviews/bg-review.png";
import { useHistory } from "react-router-dom";
import Group258 from "../../img/home-page/group-258.png";
import CustomNormalProductLink from "../CustomLinkComponent/CustomNormalProductLink";
import { LogOut } from "@styled-icons/boxicons-regular/LogOut";
import { v4 as uuid } from "uuid";
import { Star } from "@styled-icons/entypo/Star";
import ErrorMessagesComponent from "../ErrorMessagesComponent/ErrorMessagesComponent";
import PagingComponent from "../PagingComponent/PagingComponent";
import OrderModal from "./OrderModal";
import i18n from "i18next";

const DashboardPageIntroWrapper = styled.div`
  padding: 100px 375px 150px;
  transition: all 0.6s ease-in;
  .container {
    .intro-bg {
      background-image: url(${BgImage});
      padding: 100px 70px;
      margin-bottom: 40px;
      h2 {
        ${(props) => props.theme.body_semibold_40};
        margin-bottom: 30px;
      }
      p {
        ${(props) => props.theme.body_regular_20}
      }
    }
    .buttons {
      display: flex;
      margin-bottom: 40px;
      justify-content: space-between;
      align-items: center;
      .left-buttons {
        display: flex;
        column-gap: 30px;
        a {
          padding: 20px 50px;
        }
      }
      .right-buttons {
        .log-out {
          display: flex;
          align-items: center;
          cursor: pointer;
          p {
            ${(props) => props.theme.body_semibold_14};
            margin-left: 5px;
          }
          .log-out-img {
            width: 28px;
            height: 28px;
            background-color: #000;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          }
        }
      }
    }
    .content {
      padding: 80px 70px;
      border-radius: 10px;
      box-shadow: 0px 4px 10px #1a284d14;
      table {
        width: 100%;
        border-spacing: 0;
        text-align: center;
        td,
        th {
          border: 1px solid #d3d8e6;
          padding: 10px;
        }
        th {
          ${(props) => props.theme.body_semibold_20};
        }
        td {
          ${(props) => props.theme.body_regular_16}
          button {
            background-color: transparent;
            border: 1px solid #d3d8e6;
            padding: 5px 10px;
            border-radius: 5px;
            ${(props) => props.theme.body_regular_16};
            text-transform: uppercase;
            cursor: pointer;
            &:not(:last-child) {
              margin-right: 10px;
            }
          }
        }
        thead tr th:first-child {
          border-top-left-radius: 10px;
        }

        thead tr th:last-child {
          border-top-right-radius: 10px;
        }
        tr:last-child td:first-child {
          border-bottom-left-radius: 10px;
        }

        tr:last-child td:last-child {
          border-bottom-right-radius: 10px;
        }
      }
      .cards-content {
        .card {
          padding-bottom: 50px;
          .card-inner {
            position: relative;
            .order-progress {
              position: absolute;
              top: 0;
              right: 0;
              ${(props) => props.theme.body_semibold_14};
              color: #6f768a;
              text-transform: uppercase;
            }
            .card-inner-content {
              position: relative;
              display: flex;
              column-gap: 30px;
              .card-left {
                img {
                  display: block;
                  width: 170px;
                  height: 170px;
                }
              }
              .card-right {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex-grow: 1;
                .right-top {
                  h4 {
                    ${(props) => props.theme.body_semibold_20};
                    margin-bottom: 5px;
                  }
                  p {
                    ${(props) => props.theme.body_regular_18};
                    color: #6f768a;
                  }
                }
                .right-bottom {
                  display: flex;
                  justify-content: space-between;
                  .text {
                    p {
                      ${(props) => props.theme.body_regular_18};
                      color: #6f768a;
                    }
                  }
                }
              }
              &:not(:last-of-type) {
                margin-bottom: 50px;
              }
            }
            .rating-container,
            .leave-btn-container {
              position: absolute;
              right: 0;
              bottom: 0;
            }
            .leave-btn-container {
              .leave-review-btn {
                a {
                  padding: 20px 50px;
                }
              }
            }
            .rating-container {
              .rating-container-inner {
                p {
                  ${(props) => props.theme.body_semibold_20};
                  text-align: right;
                }
                > span {
                  color: rgb(255, 200, 21);
                }
              }
            }
          }
          &:only-child {
            padding-bottom: 0;
            border-bottom: 0;
          }
          &:not(:first-child) {
            padding-top: 50px;
          }
          &:not(:last-child) {
            border-bottom: 1px solid #d3d8e6;
          }
        }
        .card.active .review-content {
          padding-top: 60px;
          max-height: 500px;
        }
        .card.active .card-inner .leave-btn-container {
          display: none;
        }

        .review-content {
          max-height: 0;
          transition: max-height 0.6s linear;
          overflow: hidden;
          h5 {
            ${(props) => props.theme.body_semibold_20};
            color: #313540;
            margin-bottom: 10px;
          }
          > p {
            margin-bottom: 25px;
            ${(props) => props.theme.body_semibold_14};
            color: #6f768a;
            .rate {
              span {
                display: inline-block;
                position: relative;
                .tooltip {
                  opacity: 0;
                  visibility: hidden;
                  position: absolute;
                  background-color: white;
                  box-shadow: 0px 4px 25px #1a284d14;
                  padding: 15px 20px;
                  top: -60px;
                  left: -53px;
                  // transform: translateX(50%);
                  ${(props) => props.theme.body_regular_12};
                  border-radius: 5px;
                  white-space: nowrap;
                  &:before {
                    content: "";
                    display: block;
                    width: 24px;
                    height: 24px;
                    background-color: white;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: rotate(-45deg) translateX(-50%);
                  }
                }
              }
              span.hovered {
                svg {
                  fill: rgb(255, 200, 21);
                }
              }

              span.active .tooltip {
                opacity: 1;
                visibility: visible;
              }
            }
          }
          textarea {
            resize: none;
            width: 100%;
            border: 1px solid #d3d8e6;
            border-radius: 3px;
            padding: 20px;
            ${(props) => props.theme.body_regular_14};
            margin-bottom: 25px;
          }
          textarea::placeholder {
            ${(props) => props.theme.body_regular_14};
            color: #bac1d5;
          }

          .save-review-btn {
            display: flex;
            align-items: center;
            column-gap: 35px;
            a {
              padding: 20px 50px;
            }
            > p {
              text-transform: uppercase;
              ${(props) => props.theme.body_semibold_16};
              cursor: pointer;
            }
          }
        }
      }
      form {
        .form-group {
          label {
            ${(props) => props.theme.body_semibold_14};
            color: #6f768a;
            margin-bottom: 5px;
            display: block;
          }
          input {
            width: 100%;
            border: 1px solid #d3d8e6;
            border-radius: 3px;
            padding: 18px 20px;
            ${(props) => props.theme.body_semibold_16};
            outline: none;
          }

          &:not(:first-child) {
            margin-top: 35px;
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
        .remember-address {
          display: flex;
          align-items: center;
          column-gap: 10px;
          margin-top: 10px;
          input[type="checkbox"] {
            margin: 0;
          }
          label {
            ${(props) => props.theme.body_regular_12}
          }
        }
      }
    }
  }

  @media (max-width: 1919px) {
    padding: 100px 150px 150px;
  }
  @media (max-width: 1439px) {
    padding: 100px 50px 150px;
  }
  @media (max-width: 1023px) {
    padding: 100px 20px 150px;
    .container {
      .content {
        padding: 40px 15px;
        table {
          td,
          th {
            padding: 5px;
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .container {
      .intro-bg {
        padding: 65px 25px;
      }
      .content {
        padding: 35px 5px;
        table {
          td,
          th {
            padding: 0px;
          }
        }
        .cards-content {
          padding: 0 10px;
          .card {
            .card-inner {
              .card-inner-content {
                display: block;
                .card-left {
                  margin-bottom: 15px;
                }
              }
            }
          }
        }
      }
      .buttons {
        display: block;
        .left-buttons {
          display: block;
          > div {
            &:not(:last-child) {
              margin-bottom: 25px;
            }
          }
        }
        .right-buttons {
          margin-top: 25px;
          .log-out {
            justify-content: center;
          }
        }
      }
    }
  }
`;

const DashboardPageIntro = () => {
  const {
    openMenu,
    userInfo,
    cookies,
    removeCookie,
    setUserInfo,
    shippingCountries,
    handleUpdateUserAddress,
    userOrders,
    setUserOrders,
    productsList,
    setErrorMessage,
    setIsError,
    handlingPagingComponentCalls,
    setOpenModal,
    t,
    axiosHandler,
    jwtToken,
  } = useContext(GlobalContext);

  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [tempShippingCountryId, setTempShippingCountryId] = useState();
  const [newUserInfoAddress, setNewUserInfoAddress] = useState();
  const [selectedRateOrder, setSelectedRateOrder] = useState();
  const [textReview, setTextReview] = useState();
  const [orderId, setOrderId] = useState();
  const [isLeavingReview, setIsLeavingReview] = useState(false);

  let history = useHistory();

  const handleLogOut = () => {
    axiosHandler(
      "POST",
      `/api/v1/auth/logout?token=${window.constants.auth.token}`,
      null,
      window.constants.auth.token,
      {
        onSuccess: (response) => {
          handleAfterLogoutClear();
        },
        onError: (error) => {
          handleAfterLogoutClear();
          // candidates for generic handling
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          return true;
        },
      }
    );
  };

  const handleAfterLogoutClear = () => {
    removeCookie("isLoggedin");
    removeCookie("loginToken");
    setUserInfo();
    localStorage.clear();
    window.location.pathname = "/log-in";
  };

  const handleOpenOrders = (e) => {
    console.log("click");
    setIsOpenProfile(false);
  };
  const handleOpenProfile = (e) => {
    console.log("click");
    setIsOpenProfile(true);
  };

  const handleShowReviewContent = (e) => {
    let orderToReview =
      e.currentTarget.parentElement.parentElement.parentElement;
    setSelectedRateOrder();
    setTextReview("");
    [...orderToReview.parentElement.children].map(
      (el) => el.classList.contains("active") && el.classList.remove("active")
    );
    // orderToReview.parentElement.classList.add("active");
    setIsLeavingReview(true);
    console.log(e.currentTarget.parentElement.parentElement.parentElement);
    console.log(orderToReview.parentElement);
    orderToReview.classList.add("active");
  };

  const handleUserInfoAddressChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === "country") {
      let countryChanged = shippingCountries.find(
        (el) => el.id === e.target.value
      );
      console.log(countryChanged);
      setNewUserInfoAddress({
        ...newUserInfoAddress,
        address: {
          ...newUserInfoAddress.address,
          country: countryChanged.name,
          countryCode: countryChanged.alpha2,
        },
      });
      setTempShippingCountryId(e.target.value);
    } else if (e.target.name === "email") {
      setNewUserInfoAddress({
        ...newUserInfoAddress,
        [e.target.name]: e.target.value,
      });
    } else {
      setNewUserInfoAddress({
        ...newUserInfoAddress,
        address: {
          ...newUserInfoAddress.address,
          [e.target.name]: e.target.value,
        },
      });
    }
  };

  const handleCancelReview = (e) => {
    console.log(e.currentTarget.parentElement.parentElement.parentElement);
    let parentCard = e.currentTarget.parentElement.parentElement.parentElement;
    parentCard.classList.remove("active");
  };

  const handleUpdateAddressChange = (e) => {
    console.log(newUserInfoAddress);
    if (
      userInfo &&
      userInfo.address.line1 === newUserInfoAddress.address.line1 &&
      userInfo.address.country === newUserInfoAddress.address.country &&
      userInfo.address.countryCode === newUserInfoAddress.address.countryCode &&
      userInfo.person.firstName === newUserInfoAddress.address.firstName &&
      userInfo.person.lastName === newUserInfoAddress.address.lastName &&
      userInfo.address.postalCode === newUserInfoAddress.address.postalCode &&
      userInfo.email === newUserInfoAddress.email &&
      userInfo.phone.phoneNr === newUserInfoAddress.phone.phoneNr &&
      userInfo.person.firstName === newUserInfoAddress.person.firstName &&
      userInfo.person.lastName === newUserInfoAddress.person.lastName
    ) {
      console.log("same address");
    } else {
      handleUpdateUserAddress(newUserInfoAddress);
    }
  };
  function getSiblings(element, type) {
    var arraySib = [];
    if (type == "prev") {
      while ((element = element.previousSibling)) {
        arraySib.push(element);
      }
    } else if (type == "next") {
      while ((element = element.nextSibling)) {
        arraySib.push(element);
      }
    }
    return arraySib;
  }

  const handleRateProduct = (e) => {
    setSelectedRateOrder();

    [...e.currentTarget.parentElement.children].map((el) => {
      if (el.classList && el.classList.contains("hovered")) {
        el.classList.remove("hovered");
      }
      if (el.classList && el.classList.contains("clicked")) {
        el.classList.remove("clicked");
      }
    });

    e.currentTarget.classList.add("hovered");
    e.currentTarget.classList.add("active");
    [...e.currentTarget.parentElement.children].map((el, i) => {
      if (el.classList.contains("hovered")) {
        let array = getSiblings(
          e.currentTarget.parentElement.children[i],
          "prev"
        );
        array.map((el) => el.classList.add("hovered"));
      }
    });
  };
  const handleClickStarsRate = (e) => {
    console.log("click");
    e.currentTarget.classList.add("hovered");
    e.currentTarget.classList.remove("active");
    e.currentTarget.classList.add("clicked");
    [...e.currentTarget.parentElement.children].map((el, i) => {
      if (el.classList.contains("hovered")) {
        console.log(i);
        setSelectedRateOrder(i + 1);
        let array = getSiblings(
          e.currentTarget.parentElement.children[i],
          "prev"
        );
        array.map((el) => el.classList.add("hovered"));
      } else {
        let array2 = getSiblings(
          e.currentTarget.parentElement.children[i],
          "next"
        );
        console.log(array2);
        array2.map((el) => el.classList.remove("hovered"));
      }
    });
  };
  const handleMouseLeaveStars = (e) => {
    if (!e.currentTarget.classList.contains("clicked")) {
      [...e.currentTarget.parentElement.children].map(
        (el) =>
          el.classList &&
          el.classList.contains("hovered") &&
          el.classList.remove("hovered")
      );
      e.currentTarget.classList.remove("active");
    }
  };

  const handleTextChange = (e) => {
    setTextReview(e.target.value);
  };

  const handleSaveReview = (e, orderId) => {
    if (!userInfo.firstName && !userInfo.lastName) {
      setIsError(true);
      setErrorMessage("Please update your profile with your full name");
      setTimeout(() => {
        setIsError(false);
      }, 5000);
    } else if (selectedRateOrder && textReview) {
      console.log("send review");
      let reviewObj = {
        id: uuid(),
        userId: userInfo.id,
        orderId,
        reviewer: `${userInfo.firstName} ${userInfo.lastName}`,
        text: textReview,
        score: selectedRateOrder,
      };

      axiosHandler("POST", `/reviews`, reviewObj, jwtToken, {
        onSuccess: (response) => {
          setIsLeavingReview(false);
          // window.location.reload();
        },
        onError: (error) => {
          return true;
        },
      });
    }
  };

  const handleShowOrderDetails = (e, id) => {
    e.preventDefault();
    setOpenModal(true);
    setOrderId(id);
  };
  // const handleEditOrderDetails = (e, id) => {};

  useEffect(() => {
    if (!cookies.isLoggedIn) {
      history.push("/log-in");
    }
  }, []);

  useEffect(() => {
    if (shippingCountries && userInfo && userInfo.address) {
      let temp = shippingCountries.find(
        (country) =>
          country.alpha3Code === userInfo.address.countryCode && country.id
      );
      setTempShippingCountryId(temp.id);
    }
  }, [shippingCountries, userInfo]);

  useEffect(() => {
    if (userInfo) {
      setNewUserInfoAddress({
        address: userInfo.address,
        email: userInfo.email,
        id: userInfo.id,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
      });
    }
  }, [userInfo]);

  return (
    <DashboardPageIntroWrapper className={openMenu && "opened-menu"}>
      <OrderModal orderid={orderId} />
      <div className="container">
        <ErrorMessagesComponent />
        <div className="intro-bg">
          <h2>{t("Welcome")}</h2>
          <p>
            {userInfo
              ? userInfo.firstName
              : userInfo && userInfo.email && userInfo.email}{" "}
            {userInfo && userInfo.lastName}
          </p>
        </div>
        <div className="buttons">
          <div className="left-buttons">
            <div onClick={(e) => handleOpenOrders(e)}>
              <CustomNormalProductLink title="orders" />
            </div>
            <div onClick={(e) => handleOpenProfile(e)}>
              <CustomNormalProductLink title="profile" />
            </div>
          </div>
          <div className="right-buttons">
            <div className="log-out" onClick={(e) => handleLogOut(e)}>
              <div className="log-out-img">
                <LogOut size="20" />
              </div>
              <p>{t("LogOut")}</p>
            </div>
          </div>
        </div>
        <div className="content">
          {!isOpenProfile && userInfo && userInfo.roles.includes("SHOPPER") ? (
            <div className="cards-content">
              {userInfo &&
                userInfo.orders &&
                userInfo.orders.map((order, i) => (
                  <div className="card" key={i}>
                    <div className="card-inner">
                      <p className="order-progress">{order.status}</p>
                      {order.items &&
                        order.items.map((item, i) => (
                          <div className="card-inner-content">
                            <div className="card-left">
                              <img src={Group258} />
                            </div>
                            <div className="card-right">
                              <div className="right-top">
                                <h4>
                                  {productsList &&
                                    productsList.map(
                                      (el) =>
                                        el.id === item.productId && el.type
                                    )}
                                </h4>
                                <p>{item && item.format} cm</p>
                              </div>
                              <div className="right-bottom">
                                <div className="text">
                                  <p>
                                    {t("OrderDate")}{" "}
                                    {i18n.language === "en"
                                      ? new Date(
                                          order.dateCreated
                                        ).toLocaleString("en-US", {
                                          month: "short",
                                          year: "numeric",
                                          day: "numeric",
                                        })
                                      : i18n.language === "de" &&
                                        new Date(
                                          order.dateCreated
                                        ).toLocaleString("de", {
                                          month: "short",
                                          year: "numeric",
                                          day: "numeric",
                                        })}
                                  </p>
                                  <p>
                                    {t("OrderID")} {order.id}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      {order.status === "CLOSED" ? (
                        <section className="leave-btn-container">
                          <div
                            className="leave-review-btn"
                            onClick={(e) => handleShowReviewContent(e)}
                          >
                            <CustomNormalProductLink title="Leave review" />
                          </div>
                        </section>
                      ) : (
                        order.review && (
                          <section className="rating-container">
                            <div className="rating-container-inner">
                              <p>{order.review.score.toFixed(2)}</p>
                              {new Array(order.review.score)
                                .fill(0)
                                .map((el) => (
                                  <span>
                                    <Star size="24" />
                                  </span>
                                ))}
                            </div>
                          </section>
                        )
                      )}
                    </div>
                    <div className="review-content">
                      <h5>{t("LeaveReviewText")}</h5>
                      <p>
                        {t("LeaveReviewQuestion")}{" "}
                        <span className="rate">
                          <span
                            onMouseEnter={(e) => handleRateProduct(e)}
                            onClick={(e) => handleClickStarsRate(e)}
                            onMouseLeave={(e) => handleMouseLeaveStars(e)}
                          >
                            <span className="tooltip">{t("VeryAccurate")}</span>
                            <Star size="24" />
                          </span>
                          <span
                            onMouseEnter={(e) => handleRateProduct(e)}
                            onClick={(e) => handleClickStarsRate(e)}
                            onMouseLeave={(e) => handleMouseLeaveStars(e)}
                          >
                            <span className="tooltip">{t("VeryAccurate")}</span>

                            <Star size="24" />
                          </span>
                          <span
                            onMouseEnter={(e) => handleRateProduct(e)}
                            onClick={(e) => handleClickStarsRate(e)}
                            onMouseLeave={(e) => handleMouseLeaveStars(e)}
                          >
                            <span className="tooltip">{t("VeryAccurate")}</span>
                            <Star size="24" />
                          </span>
                          <span
                            onMouseEnter={(e) => handleRateProduct(e)}
                            onClick={(e) => handleClickStarsRate(e)}
                            onMouseLeave={(e) => handleMouseLeaveStars(e)}
                          >
                            <span className="tooltip">{t("VeryAccurate")}</span>
                            <Star size="24" />
                          </span>
                          <span
                            onMouseEnter={(e) => handleRateProduct(e)}
                            onClick={(e) => handleClickStarsRate(e)}
                            onMouseLeave={(e) => handleMouseLeaveStars(e)}
                          >
                            <span className="tooltip">{t("VeryAccurate")}</span>
                            <Star size="24" />
                          </span>
                        </span>{" "}
                      </p>
                      <textarea
                        onChange={(e) => handleTextChange(e)}
                        placeholder="Write your public feedback here"
                        rows="8"
                        value={textReview}
                      ></textarea>
                      <div
                        className="save-review-btn"
                        onClick={(e) => handleSaveReview(e, order.id)}
                      >
                        <CustomNormalProductLink title="save review" />
                        <p onClick={(e) => handleCancelReview(e)}>
                          {t("Cancel")}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            !isOpenProfile && (
              <>
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>{t("OrderDate")}</th>
                      <th>{t("OrderID")}</th>
                      <th>{t("OrderStatus")}</th>
                      <th>{t("Action")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userOrders &&
                      userOrders.content &&
                      userOrders.content.map((order, i) => (
                        <tr>
                          <td>{i + 1}</td>
                          <td>
                            {i18n.language === "en"
                              ? new Date(order.created).toLocaleString(
                                  "en-US",
                                  {
                                    month: "short",
                                    year: "numeric",
                                    day: "numeric",
                                  }
                                )
                              : i18n.language === "de" &&
                                new Date(order.created).toLocaleString("de", {
                                  month: "short",
                                  year: "numeric",
                                  day: "numeric",
                                })}
                          </td>
                          <td>{order.id}</td>
                          <td>{t(order.status)}</td>
                          <td>
                            <button
                              onClick={(e) =>
                                handleShowOrderDetails(e, order.id)
                              }
                            >
                              {t("edit")}
                            </button>
                            {/* <button
                              onClick={(e) =>
                                handleEditOrderDetails(e, order.id)
                              }
                            >
                              edit
                            </button> */}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </>
            )
          )}
          {!isOpenProfile && userInfo && userInfo.roles.includes("SHOPPER") && (
            <PagingComponent path="/api/v1/orders/search" pageSize={5} />
          )}
          {!isOpenProfile && userInfo && userInfo.roles.includes("ADMIN") && (
            <PagingComponent path="/api/v1/orders/search" pageSize={10} />
          )}
          {isOpenProfile && (
            <form
              // onSubmit={(e) => handleSubmitAddress(e)}
              id="billingAddressForm"
            >
              <div className="form-group">
                <label htmlFor="firstName">{t("FirstName")}</label>
                <input
                  required
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={newUserInfoAddress && newUserInfoAddress.firstName}
                  onChange={(e) => handleUserInfoAddressChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">{t("LastName")}</label>
                <input
                  required
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={newUserInfoAddress && newUserInfoAddress.lastName}
                  onChange={(e) => handleUserInfoAddressChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={newUserInfoAddress && newUserInfoAddress.email}
                  onChange={(e) => handleUserInfoAddressChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="streetNumber">{t("StreetAndNumber")}</label>
                <input
                  required
                  type="text"
                  id="streetNumber"
                  name="line1"
                  value={newUserInfoAddress && newUserInfoAddress.address.line1}
                  onChange={(e) => handleUserInfoAddressChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="line2">{t("AdditionalAddress")}</label>
                <input
                  type="text"
                  id="line2"
                  name="line2"
                  value={newUserInfoAddress && newUserInfoAddress.address.line2}
                  onChange={(e) => handleUserInfoAddressChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="postalCode">{t("PostalCode")}</label>
                <input
                  required
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={
                    newUserInfoAddress && newUserInfoAddress.address.postalCode
                  }
                  onChange={(e) => handleUserInfoAddressChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">{t("City")}</label>
                <input
                  required
                  type="text"
                  id="city"
                  name="city"
                  value={newUserInfoAddress && newUserInfoAddress.address.city}
                  onChange={(e) => handleUserInfoAddressChange(e)}
                />
              </div>
              <div className="form-group">
                <label>{t("Country")}</label>
                <select
                  required
                  name="country"
                  value={tempShippingCountryId && tempShippingCountryId}
                  onChange={(e) => handleUserInfoAddressChange(e)}
                >
                  {shippingCountries &&
                    shippingCountries.map((el) => (
                      <option value={el.id} key={el.id}>
                        {el.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="phone">{t("PhoneNumber")}</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={
                    newUserInfoAddress &&
                    newUserInfoAddress.phone &&
                    newUserInfoAddress.phone.phoneNr
                  }
                  onChange={(e) => handleUserInfoAddressChange(e)}
                />
              </div>
              <div
                className="form-group"
                onClick={(e) => handleUpdateAddressChange(e)}
              >
                <CustomNormalProductLink title="Update" />
              </div>
            </form>
          )}
        </div>
      </div>
    </DashboardPageIntroWrapper>
  );
};

export default DashboardPageIntro;
