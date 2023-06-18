import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Consts/GlobalContext";
import Group57742 from "../../img/check-out/group-57742.png";
import { Edit } from "@styled-icons/material/Edit";
import { Plus } from "@styled-icons/boxicons-regular/Plus";
import CustomNormalProductLink from "../CustomLinkComponent/CustomNormalProductLink";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
const CheckOutAddressPageIntroWrapper = styled.div`
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
    column-gap: 30px;
    .left {
      flex-basis: 58%;
      background-color: #fff;
      border-radius: 10px;
      padding: 70px;
      box-shadow: 4px 4px 40px #1a284d29;
      .user-billing {
        > p {
          ${(props) => props.theme.body_regular_18};
          color: #313540;
          &:nth-child(3) {
            margin-bottom: 30px;
          }
          &:nth-child(5) {
            margin-bottom: 30px;
          }
        }
        h3 {
          position: relative;
        }
      }
      h3 {
        margin-bottom: 25px;
        ${(props) => props.theme.body_semibold_20};
        color: #313540;
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

          &:not(first-child) {
            margin-top: 35px;
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
      .delivery-address {
        margin-top: 45px;
        margin-bottom: 30px;
        .tools {
          top: 100px;
        }
        h3 {
          margin-bottom: 15px;
          position: relative;
        }
        .delivery-address-content {
          cursor: pointer;
          display: flex;
          align-items: center;
          column-gap: 10px;
          flex-wrap: wrap;
          overflow: hidden;
          > form {
            flex-basis: 100%;
            max-height: 0;
            transition: all 1s ease-in-out;
            .multiple-addresses {
              display: flex;
              align-items: center;
              column-gap: 10px;
              margin-top: 30px;
              label {
                span {
                  display: block;
                  &:not(:last-child) {
                    margin-bottom: 7px;
                  }
                }
              }
            }
          }
          #otherAddressesForm {
            margin-left: 30px;
          }
          input[type="radio"] {
            cursor: pointer;
            margin: 0;
          }
          label {
            cursor: pointer;
            ${(props) => props.theme.body_semibold_14};
            color: #6f768a;
          }
          &:not(:last-child) {
            margin-bottom: 15px;
          }
        }
        .delivery-address-content.diffrent-address {
          > form {
            max-height: 1200px;
          }
        }
      }
      .submit-btn {
        width: 100%;
        border: 0;
        padding: 0;
        background-color: transparent;
      }
    }

    .tools {
      position: absolute;
      top: 0;
      right: 0;
      > div {
        &:not(:last-child) {
          margin-bottom: 5px;
        }
      }
    }

    .edit-cart,
    .select-other-addresses,
    .add-new-address {
      display: flex;
      align-items: center;
      justify-content: end;
      column-gap: 5px;
      cursor: pointer;
      p {
        ${(props) => props.theme.body_semibold_14}
      }
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
    }

    .right {
      flex-basis: 40%;
      padding: 70px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 4px 4px 40px #1a284d29;
      position: sticky;
      top: 0;
      .right-wrapper {
        position: relative;
        .edit-cart {
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          align-items: center;
          column-gap: 5px;
          cursor: pointer;

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
            padding: 25px 0;
            &:not(:last-child) {
              border-bottom: 1px solid #d3d8e6;
            }
            &:first-child {
              padding-bottom: 25px;
            }
            &:last-child {
              padding-top: 25px;
            }
            &:only-child {
              padding: 0 0 25px;
            }
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
      .left {
        padding: 30px;
      }
      .right {
        padding: 30px;
      }
    }
  }

  @media (max-width: 1023px) {
    padding: 200px 20px 0;
    .container {
      display: block;
      .left {
        margin-bottom: 25px;
      }
    }
  }
`;

const CheckOutAddressPageIntro = () => {
  const {
    openMenu,
    productObject,
    productsList,
    shippingPrice,
    setShippingPrice,
    deliveryAddress,
    setDeliveryAddress,
    billingAddress,
    setBillingAddress,
    setProductObject,
    whichAddress,
    setWhichAddress,
    shippingCountries,
    shippingTotal,
    handlingShippingDestinationChanges,
    userInfo,
    cookies,
    selectAddNewAddress,
    setSelectAddNewAddress,
    handleUpdateUserAddress,
    t,
    axiosHandler,
    JWT_TOKEN,
  } = useContext(GlobalContext);

  const [editAddress, setEditAddress] = useState(false);
  const [deliveryAddresses, setDeliveryAddresses] = useState(0);
  const [selectOtherAddresses, setSelectOtherAddresses] = useState(false);

  let history = useHistory();

  const handleEditCartClick = (e) => {
    e.preventDefault();
    window.location.pathname = "/check-out/cart";
  };

  const handleBillingAddressChange = (e) => {
    if (e.target.type === "select-one") {
      if (whichAddress === "sameBilling") {
        let countryCode = shippingCountries.find(
          (el) => el.id === e.target.value
        );
        setShippingPrice(countryCode);
        localStorage.setItem(
          "shippingDestination",
          JSON.stringify(countryCode)
        );
        setBillingAddress({
          ...billingAddress,
          countryid: e.target.value,
          [e.target.name]: countryCode.name,
          countryCode: countryCode.alpha3Code,
        });
        setDeliveryAddress({
          ...deliveryAddress,
          countryid: e.target.value,
          [e.target.name]: countryCode.name,
          countryCode: countryCode.alpha3Code,
        });

        handlingShippingDestinationChanges(e.target.value);
      } else {
        let countryCode = shippingCountries.find(
          (el) => el.id === e.target.value
        );
        setShippingPrice(countryCode);

        setBillingAddress({
          ...billingAddress,
          countryid: e.target.value,
          [e.target.name]: countryCode.name,
          countryCode: countryCode.alpha3Code,
        });
      }
    } else {
      setBillingAddress({
        ...billingAddress,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleWhichAddressChange = (e) => {
    setWhichAddress(e.target.value);
    if (e.target.value === "sameBilling") {
      let shippingDestination = JSON.parse(
        localStorage.getItem("shippingDestination")
      );
      setSelectAddNewAddress(false);
      if (
        billingAddress &&
        billingAddress.country !== shippingDestination.name
      ) {
        let countryid = shippingCountries.find(
          (el) => el.name === billingAddress.country
        );
        console.log(countryid, "countryid");
        localStorage.setItem("shippingDestination", JSON.stringify(countryid));
        setProductObject({
          ...productObject,
          countryId: countryid.id,
        });
        handlingShippingDestinationChanges(countryid.id);
      }
    } else if (e.target.value === "diffrentAddress") {
      setDeliveryAddress({
        country: JSON.parse(localStorage.getItem("shippingDestination")).name,
        countryCode: JSON.parse(localStorage.getItem("shippingDestination"))
          .alpha3Code,
        countryid: JSON.parse(localStorage.getItem("shippingDestination")).id,
        postalCode: "",
        line1: "",
        city: "",
        firstName: "",
        lastName: "",
      });

      if (cookies.isLoggedIn && userInfo.deliveryAddresses.length > 0) {
        console.log(userInfo.deliveryAddresses);
        let otherSelectedAddress = userInfo.deliveryAddresses.find(
          (el, i) => i === deliveryAddresses
        );
        console.log(otherSelectedAddress);
        let newShippingDestination = shippingCountries.find(
          (el) => el.alpha3Code === otherSelectedAddress.countryCode
        );
        console.log(newShippingDestination);
        localStorage.setItem(
          "shippingDestination",
          JSON.stringify(newShippingDestination)
        );
        handlingShippingDestinationChanges(newShippingDestination.id);
        setProductObject({
          ...productObject,
          countryId: newShippingDestination.id,
        });
        setDeliveryAddress({
          ...deliveryAddress,
          line1: otherSelectedAddress.line1,
          city: otherSelectedAddress.city,
          country: otherSelectedAddress.country,
          countryCode: otherSelectedAddress.countryCode,
          postalCode: otherSelectedAddress.postalCode,
          firstName: otherSelectedAddress.firstName,
          lastName: otherSelectedAddress.lastName,
        });
      }
    }
  };

  const handleDeliveryAddressChange = (e) => {
    if (e.target.type === "select-one") {
      if (whichAddress === "diffrentAddress") {
        let countryCode = shippingCountries.find(
          (el) => el.id === e.target.value
        );
        setShippingPrice(countryCode);
        localStorage.setItem(
          "shippingDestination",
          JSON.stringify(countryCode)
        );
        setDeliveryAddress({
          ...deliveryAddress,
          countryid: e.target.value,
          [e.target.name]: countryCode.name,
          countryCode: countryCode.alpha3Code,
        });
        handlingShippingDestinationChanges(e.target.value);
      }
    } else {
      setDeliveryAddress({
        ...deliveryAddress,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleEditAddress = (e) => {
    e.preventDefault();
    setEditAddress(true);
    let countryId = shippingCountries.find(
      (el) => el.alpha3Code === billingAddress.countryCode
    );
    console.log(countryId);
    setBillingAddress({
      ...billingAddress,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      countryid: countryId.id,
    });
  };
  const handleAddNewAddress = (e) => {
    e.preventDefault();
    setSelectAddNewAddress(!selectAddNewAddress);
    setDeliveryAddress({
      country: JSON.parse(localStorage.getItem("shippingDestination")).name,
      countryCode: JSON.parse(localStorage.getItem("shippingDestination"))
        .alpha3Code,
      countryid: JSON.parse(localStorage.getItem("shippingDestination")).id,
      postalCode: "",
      line1: "",
      city: "",
      firstName: "",
      lastName: "",
    });
  };

  //choose delivery addresses from saved ones
  const handleDeliveryAddressesChange = (e) => {
    setDeliveryAddresses(parseInt(e.target.value));
    let chosenDeliveryAddress = userInfo.deliveryAddresses.find(
      (el, i) => i === parseInt(e.target.value)
    );
    console.log(chosenDeliveryAddress);
    let chosenShippingCountry = shippingCountries.find(
      (el) => el.alpha3Code === chosenDeliveryAddress.countryCode
    );
    console.log(chosenShippingCountry);
    handlingShippingDestinationChanges(chosenShippingCountry.id);
    localStorage.setItem(
      "shippingDestination",
      JSON.stringify(chosenShippingCountry)
    );
    setProductObject({
      ...productObject,
      countryId: chosenShippingCountry.id,
    });
    setDeliveryAddress({
      ...deliveryAddress,
      line1: chosenDeliveryAddress.line1,
      city: chosenDeliveryAddress.city,
      country: chosenDeliveryAddress.country,
      countryCode: chosenDeliveryAddress.countryCode,
      postalCode: chosenDeliveryAddress.postalCode,
      countryid: chosenShippingCountry.id,
      firstName: chosenDeliveryAddress.firstName,
      lastName: chosenDeliveryAddress.lastName,
    });
  };

  const handleContinueAsLoggedIn = (e, isContinue) => {
    // if (cookies.isLoggedin && whichAddress === "sameBilling") {
    console.log("logged in continue");
    handleSubmitAddress(e, isContinue);
    // }
  };

  const handleSubmitAddress = (e, isContinue = false) => {
    e.preventDefault();
    let tempOrder;
    let changeAddress;
    if (whichAddress === "sameBilling") {
      if (cookies.isLoggedIn) {
        setProductObject({
          ...productObject,
          email: userInfo.email,
          address: billingAddress,
          deliveryAddress: billingAddress,
        });
        tempOrder = {
          ...productObject,
          email: userInfo.email,
          address: billingAddress,
          deliveryAddress: billingAddress,
        };
        changeAddress = {
          id: userInfo.id,
          address: billingAddress,
        };
      } else {
        setProductObject({
          ...productObject,
          email: billingAddress.email,
          address: billingAddress,
          deliveryAddress: billingAddress,
        });
        tempOrder = {
          ...productObject,
          email: billingAddress.email,
          address: billingAddress,
          deliveryAddress: billingAddress,
        };
      }
    } else if (whichAddress === "diffrentAddress") {
      if (
        deliveryAddress &&
        deliveryAddress.firstName &&
        deliveryAddress.lastName &&
        deliveryAddress.line1 &&
        deliveryAddress.postalCode &&
        deliveryAddress.city &&
        deliveryAddress.country
      ) {
        if (cookies.isLoggedIn) {
          setProductObject({
            ...productObject,
            email: userInfo.email,
            address: billingAddress,
            deliveryAddress: deliveryAddress,
          });
          tempOrder = {
            ...productObject,
            email: userInfo.email,
            address: billingAddress,
            deliveryAddress: deliveryAddress,
          };
          let sameDeliveryAddress = userInfo.deliveryAddresses.find(
            (el, i) =>
              el.country === deliveryAddress.country &&
              el.line1 === deliveryAddress.line1 &&
              el.postalCode === deliveryAddress.postalCode
          );
          if (sameDeliveryAddress) {
            changeAddress = {
              id: userInfo.id,
              address: billingAddress,
            };
          } else {
            changeAddress = {
              id: userInfo.id,
              deliveryAddresses: [
                ...userInfo.deliveryAddresses,
                deliveryAddress,
              ],
              address: billingAddress,
            };
          }
          if (userInfo) {
            console.log(deliveryAddress);
            console.log(changeAddress);
            handleUpdateUserAddress({
              deliveryAddress: deliveryAddress,
            });
          }
        } else {
          setProductObject({
            ...productObject,
            email: billingAddress.email,
            address: billingAddress,
            deliveryAddress: deliveryAddress,
          });
          tempOrder = {
            ...productObject,
            email: billingAddress.email,
            address: billingAddress,
            deliveryAddress: deliveryAddress,
          };
        }
      }
    }

    if (isContinue) {
      console.log(tempOrder);
      tempOrder = {
        ...tempOrder,
        userId: userInfo.id,
        total:
          productObject.total +
          productObject.total * (19 / 100) +
          shippingTotal,
      };
      axiosHandler("POST", `/orders`, tempOrder, JWT_TOKEN, {
        onSuccess: (response) => {
          console.log(response);
          let orderId = response.data.id;
          localStorage.setItem("orderId", orderId);
          localStorage.setItem("whichAddress", whichAddress);
        },
        onError: (error) => {
          return true;
        },
      });
      setTimeout(() => {
        window.location.pathname = "/check-out/payment";
      }, 1000);
    }
  };

  useEffect(() => {
    if (userInfo) {
      setProductObject({
        ...productObject,
        userId: userInfo.id,
      });
    }
    if (localStorage.getItem("shippingDestination")) {
      setShippingPrice(JSON.parse(localStorage.getItem("shippingDestination")));

      setBillingAddress({
        ...billingAddress,
        country: JSON.parse(localStorage.getItem("shippingDestination")).name,
        countryCode: JSON.parse(localStorage.getItem("shippingDestination"))
          .alpha3Code,
        countryid: JSON.parse(localStorage.getItem("shippingDestination")).id,
      });
      setDeliveryAddress({
        ...deliveryAddress,
        country: JSON.parse(localStorage.getItem("shippingDestination")).name,
        countryCode: JSON.parse(localStorage.getItem("shippingDestination"))
          .alpha3Code,
        countryid: JSON.parse(localStorage.getItem("shippingDestination")).id,
      });
    }
    if (localStorage.getItem("order")) {
      let order = JSON.parse(localStorage.getItem("order"));
      if (order.address) {
        setDeliveryAddress(order.address);
        setBillingAddress(order.deliveryAddress);
      }
    }
  }, []);
  useEffect(() => {
    if (userInfo && Object.keys(userInfo.address).length) {
      console.log("userinfo", userInfo);
      setBillingAddress(userInfo.address);
      if (!userInfo.deliveryAddresses) {
        setSelectAddNewAddress(true);
      }
    }
  }, [userInfo]);

  return (
    <CheckOutAddressPageIntroWrapper className={openMenu && "opened-menu"}>
      <div className="parallax-effect"></div>
      <div className="container">
        <div className="left">
          {userInfo && Object.keys(userInfo.address).length && !editAddress ? (
            <div className="user-billing">
              <h3>
                {t("CheckOutAddressPageIntroSavedBillingAddress")}

                <div className="tools">
                  <div
                    className="edit-cart"
                    onClick={(e) => handleEditAddress(e)}
                  >
                    <div className="edit-cart-img">
                      <Edit size="12" />
                    </div>
                    <p>{t("EditAddress")}</p>
                  </div>
                </div>
              </h3>
              {userInfo && Object.keys(userInfo.address).length && (
                <>
                  <p>
                    {userInfo.firstName} {userInfo.lastName}
                  </p>
                  <p>{userInfo.email}</p>
                  <p>{userInfo.address.line1}</p>
                  <p>
                    {t("PostalCode")}
                    {userInfo.address.postalCode}
                  </p>
                  <p>
                    {userInfo.address.city},{userInfo.address.country}
                  </p>
                </>
              )}
            </div>
          ) : (
            <>
              <h3>{t("CheckOutAddressPageIntroBillingAddress")}</h3>
              <form
                onSubmit={(e) => handleSubmitAddress(e)}
                id="billingAddressForm"
              >
                {userInfo &&
                userInfo.email &&
                userInfo.firstName &&
                userInfo.lastName ? (
                  <>
                    <div className="form-group">
                      <label htmlFor="firstName">{t("FirstName")}</label>
                      <input
                        required
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={userInfo && userInfo.firstName}
                        disabled="true"
                        onChange={(e) => handleBillingAddressChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">{t("LastName")}</label>
                      <input
                        required
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={userInfo && userInfo.lastName}
                        disabled="true"
                        onChange={(e) => handleBillingAddressChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={userInfo && userInfo.email}
                        disabled="true"
                        onChange={(e) => handleBillingAddressChange(e)}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="form-group">
                      <label htmlFor="firstName">{t("FirstName")}</label>
                      <input
                        required
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={billingAddress && billingAddress.firstName}
                        onChange={(e) => handleBillingAddressChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">{t("LastName")}</label>
                      <input
                        required
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={billingAddress && billingAddress.lastName}
                        onChange={(e) => handleBillingAddressChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={billingAddress && billingAddress.email}
                        onChange={(e) => handleBillingAddressChange(e)}
                      />
                    </div>
                  </>
                )}
                <div className="form-group">
                  <label htmlFor="streetNumber">{t("StreetAndNumber")}</label>
                  <input
                    required
                    type="text"
                    id="streetNumber"
                    name="line1"
                    value={billingAddress && billingAddress.line1}
                    onChange={(e) => handleBillingAddressChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="additionalAddress">
                    {t("AdditionalAddress")}
                  </label>
                  <input
                    type="text"
                    id="additionalAddress"
                    name="additionalAddress"
                    value={billingAddress && billingAddress.additionalAddress}
                    onChange={(e) => handleBillingAddressChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="postalCode">{t("PostalCode")}</label>
                  <input
                    required
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={billingAddress && billingAddress.postalCode}
                    onChange={(e) => handleBillingAddressChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">{t("City")}</label>
                  <input
                    required
                    type="text"
                    id="city"
                    name="city"
                    value={billingAddress && billingAddress.city}
                    onChange={(e) => handleBillingAddressChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>{t("Country")}</label>
                  <select
                    required
                    name="country"
                    value={billingAddress && billingAddress.countryid}
                    onChange={(e) => handleBillingAddressChange(e)}
                  >
                    {shippingCountries &&
                      shippingCountries.map((el, i) => (
                        <option key={i} value={el.id}>
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
                    value={billingAddress && billingAddress.phone}
                    onChange={(e) => handleBillingAddressChange(e)}
                  />
                </div>
                {/* {localStorage.getItem("isLoggedin") && (
                  <div className="remember-address">
                    <input type="checkbox" id="rememberAddress" />
                    <label htmlFor="rememberAddress">
                      Remember this address
                    </label>
                  </div>
                )} */}
              </form>
            </>
          )}
          <div className="delivery-address">
            <h3>
              {t("DeliveryAddress")}
              {cookies.isLoggedIn && whichAddress === "diffrentAddress" && (
                <div className="tools">
                  <div
                    className="add-new-address"
                    onClick={(e) => handleAddNewAddress(e)}
                  >
                    <div className="edit-cart-img">
                      <Plus size="22" />
                    </div>
                    <p>{t("Add new address")}</p>
                  </div>
                </div>
              )}
            </h3>
            <div className="delivery-address-content">
              <input
                type="radio"
                name="deliveryAddress"
                id="sameBilling"
                value="sameBilling"
                checked={whichAddress === "sameBilling" && true}
                onChange={(e) => handleWhichAddressChange(e)}
              />
              <label htmlFor="sameBilling">
                {t("DeliveryAddressSameAsBillingAddress")}
              </label>
            </div>
            <div
              className={
                whichAddress === "diffrentAddress"
                  ? "delivery-address-content diffrent-address"
                  : "delivery-address-content"
              }
            >
              <input
                type="radio"
                name="deliveryAddress"
                id="diffrentAddress"
                value="diffrentAddress"
                checked={whichAddress === "diffrentAddress" && true}
                onChange={(e) => handleWhichAddressChange(e)}
              />
              <label htmlFor="diffrentAddress">
                {t("DeliveryAddressDifferentFromBillingAddress")}
              </label>
              {cookies.isLoggedIn && !selectAddNewAddress && (
                <form
                  id="otherAddressesForm"
                  onSubmit={(e) => handleSubmitAddress(e)}
                >
                  {userInfo &&
                    userInfo.deliveryAddresses &&
                    userInfo.deliveryAddresses.map((el, i) => (
                      <div className="multiple-addresses" key={i}>
                        <input
                          type="radio"
                          value={i}
                          name="deliveryAddresses"
                          checked={deliveryAddresses === i && true}
                          onChange={(e) => handleDeliveryAddressesChange(e)}
                          id={i}
                        />
                        <label htmlFor={i}>
                          <span>{el.line1}</span>
                          <span>
                            {el.firstName && el.firstName}{" "}
                            {el.lastName && el.lastName}
                          </span>
                          <span>
                            {el.postalCode},{el.city} {el.country}
                          </span>
                        </label>
                      </div>
                    ))}
                </form>
              )}
              {(!(
                cookies.isLoggedIn &&
                userInfo &&
                userInfo.deliveryAddresses.length > 0
              ) ||
                selectAddNewAddress) && (
                <>
                  <form
                    onSubmit={(e) => handleSubmitAddress(e)}
                    id={
                      whichAddress === "diffrentAddress" &&
                      "deliveryAddressForm"
                    }
                  >
                    <div className="form-group">
                      <label htmlFor="firstName">{t("FirstName")}</label>
                      <input
                        required
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={deliveryAddress && deliveryAddress.firstName}
                        onChange={(e) => handleDeliveryAddressChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">{t("LastName")}</label>
                      <input
                        required
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={deliveryAddress && deliveryAddress.lastName}
                        onChange={(e) => handleDeliveryAddressChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="streetNumber">
                        {t("StreetAndNumber")}
                      </label>
                      <input
                        required
                        type="text"
                        id="streetNumber"
                        name="line1"
                        value={deliveryAddress && deliveryAddress.line1}
                        onChange={(e) => handleDeliveryAddressChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="additionalAddress">
                        {t("AdditionalAddress")}
                      </label>
                      <input
                        type="text"
                        id="additionalAddress"
                        name="additionalAddress"
                        value={
                          deliveryAddress && deliveryAddress.additionalAddress
                        }
                        onChange={(e) => handleDeliveryAddressChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="postalCode">{t("PostalCode")}</label>
                      <input
                        required
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={deliveryAddress && deliveryAddress.postalCode}
                        onChange={(e) => handleDeliveryAddressChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="city">{t("City")}</label>
                      <input
                        required
                        type="text"
                        id="city"
                        name="city"
                        value={deliveryAddress && deliveryAddress.city}
                        onChange={(e) => handleDeliveryAddressChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label>{t("Country")}</label>
                      <select
                        required
                        name="country"
                        value={productObject && productObject.countryId}
                        onChange={(e) => handleDeliveryAddressChange(e)}
                      >
                        {shippingCountries &&
                          shippingCountries.map((el) => (
                            <option value={el.id}>{el.name}</option>
                          ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">{t("PhoneNumber")}</label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={deliveryAddress && deliveryAddress.phone}
                        onChange={(e) => handleDeliveryAddressChange(e)}
                      />
                    </div>
                    {/* {localStorage.getItem("isLoggedin") && (
                        <div className="remember-address">
                          <input type="checkbox" id="rememberAddress" />
                          <label htmlFor="rememberAddress">
                            Remember this address
                          </label>
                        </div>
                      )} */}
                    {cookies && cookies.isLoggedIn && (
                      <div className="form-group">
                        <button
                          className="submit-btn"
                          type="submit"
                          form="deliveryAddressForm"
                        >
                          <CustomNormalProductLink title="ADD" />
                        </button>
                      </div>
                    )}
                  </form>
                </>
              )}
            </div>
            <div className="delivery-address-content">
              <input
                type="radio"
                name="deliveryAddress"
                id="viaDHL"
                value="viaDHL"
                checked={whichAddress === "viaDHL" && true}
                onChange={(e) => handleWhichAddressChange(e)}
              />
              <label htmlFor="viaDHL">{"DeliveryViaDHLMachineNearby"}</label>
            </div>
          </div>
          <button
            className="submit-btn"
            type="submit"
            form={
              whichAddress === "diffrentAddress"
                ? !selectAddNewAddress && cookies.isLoggedin
                  ? "otherAddressesForm"
                  : "deliveryAddressForm"
                : "billingAddressForm"
            }
            onClick={(e) => handleContinueAsLoggedIn(e, true)}
          >
            <CustomNormalProductLink title="CONTINUE" />
          </button>
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
                    <img src={Group57742} />
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
                <span>
                  {localStorage.getItem("shippingDestination") &&
                    JSON.parse(localStorage.getItem("shippingDestination"))
                      .name}
                </span>
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
    </CheckOutAddressPageIntroWrapper>
  );
};

export default CheckOutAddressPageIntro;
