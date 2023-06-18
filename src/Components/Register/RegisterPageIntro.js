import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Consts/GlobalContext";
import BgImage from "../../img/register/bg-image.png";
import CustomProductLink from "../CustomLinkComponent/CustomProductLink";
import AppleSvg from "../../img/log-in/apple.svg";
import FacebookSvg from "../../img/log-in/facebook.svg";
import GoogleSvg from "../../img/log-in/google.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import FacebookLogin from "react-facebook-login";
import { ErrorCircle } from "@styled-icons/fluentui-system-regular/ErrorCircle";
import { CheckCircle } from "@styled-icons/bootstrap/CheckCircle";
import CustomNormalProductLink from "../CustomLinkComponent/CustomNormalProductLink";
import { Trans } from "react-i18next";

const RegisterPageIntroWrapper = styled.div`
  transition: all 0.6s ease-in;

  .container {
    height: calc(var(--vh, 1vh) * 100);
    background-color: #f6f8fc;
    .left {
      background-image: url(${BgImage});
      height: 100%;
      width: 100%;
      transition: all 1.5s ease-in-out;
    }
    .right {
      position: absolute;
      top: 50%;
      right: -20%;
      transform: translate(50%, -50%);
      transition: all 1.5s ease-in-out;
      width: 570px;
      form {
        background-color: #fff;
        padding: 70px;
        box-shadow: 0px 4px 10px #1a284d14;
        border-radius: 10px;
        > h3 {
          ${(props) => props.theme.body_semibold_20}
          text-align: center;
          margin-bottom: 15px;
        }
        > p {
          ${(props) => props.theme.body_regular_12};
          text-align: center;
          a {
            font-weight: 600;
            text-decoration: none;
            color: #000;
          }
        }
        .form-login {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 30px 20px;
          margin-top: 30px;
          .form-group {
            flex-basis: 45%;
            flex-grow: 1;
            label {
              ${(props) => props.theme.body_semibold_14};
              color: #6f768a;
              display: block;
              margin-bottom: 5px;
              span {
                color: #f1553f;
              }
            }
            input {
              display: block;
              width: 100%;
              padding: 16px 20px;
              border-radius: 3px;
              border: 1px solid #e1e3eb;
              outline: none;
              ${(props) => props.theme.body_semibold_16};
            }
            &:last-child {
              flex-basis: 100%;
            }
          }
        }
        .accept-terms {
          margin-top: 15px;
          display: flex;
          justify-content: space-between;
          column-gap: 5px;
          label {
            ${(props) => props.theme.body_regular_12};
            color: #6f768a;
          }
        }
        .register-btn {
          margin-top: 40px;
          .btn-submit {
            border: 0;
            padding: 0;
            background-color: transparent;
            width: 100%;
          }
        }
        .bottom-line {
          display: flex;
          align-items: center;
          justify-content: space-between;
          hr {
            flex-basis: 30%;
            height: 1px;
            margin: 0;
            border-style: solid;
            color: #d3d8e6;
            border-width: 0.5px;
            border: none;
            border-top: 1px solid #d3d8e6;
          }
          span {
            display: block;
            color: #1a284d;
            ${(props) => props.theme.body_regular_12};
          }
        }
        .social-register {
          display: flex;
          margin: 30px -10px;
          .card {
            flex-basis: 33.33%;
            padding: 0 10px;
            .card-inner {
              height: 100%;
              width: 100%;
              padding: 11px 0;
              border: 1px solid #d3d8e6;
              background-color: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 3px;
            }
          }
        }
      }
    }
  }
  .container.animation {
    .left {
      width: 60%;
      background-size: cover;
      background-position: 70% 0%;
    }
    .right {
      right: 40%;
    }
  }

  .errors {
    position: fixed;
    bottom: -120px;
    right: 20px;
    opacity: 0;
    padding: 20px 50px;
    border-radius: 10px;
    background-color: #d74545;
    color: white;
    ${(props) => props.theme.body_semibold_18};
    z-index: 100;
    transition: all 1s ease-in-out;
    display: flex;
    align-items: center;
  }
  .errors.active {
    opacity: 1;
    bottom: 20px;
  }

  .email-sent,
  .email-confirmed {
    position: fixed;
    top: -120px;
    left: 60%;
    opacity: 0;
    padding: 15px 40px;
    border-radius: 10px;
    background-color: #4d9a51;
    transform: translateX(-50%);
    color: white;
    ${(props) => props.theme.body_semibold_18};
    z-index: 100;
    transition: all 1s ease-in-out;
    display: flex;
    align-items: center;
    p {
      margin-left: 20px;
    }
  }
  .email-sent.active,
  .email-confirmed.active {
    opacity: 1;
    top: 10px;
  }

  @media (max-width: 767px) {
    .container.animation {
      .left {
        width: 100%;
        background-position: 0% 0%;
      }
      .right {
        right: 50%;
      }
    }
    .container {
      .right {
        width: 100%;
        padding: 10px;
        form {
          width: auto;
          padding: 25px;
          h3 {
            font-size: 18px;
            line-height: 25px;
            margin-bottom: 10px;
          }
          .social-register {
            margin: 15px -15px;
          }

          .form-login {
            margin-top: 15px;
            gap: 10px;
            .form-group {
              input {
                padding: 13px;
              }
            }
          }
          .register-btn {
            margin-top: 15px;
          }
        }
      }
    }
  }
`;

const RegisterPageIntro = () => {
  const [isAnimation, setIsAnimation] = useState(false);
  const { openMenu, bearerToken, t, axiosHandler, JWT_TOKEN } =
    useContext(GlobalContext);
  const [phone, setPhone] = useState("");
  const [verified, setVerified] = useState(false);
  const [roles, setRoles] = useState(["SHOPPER"]);
  const [outsideRefs, setOutsideRefs] = useState(null);
  const [created, setCreated] = useState(new Date().toISOString());
  const [emailSent, setEmailSent] = useState(false);
  const [emailConfirmed, setEmailConfirmed] = useState(false);
  const [address, setAddress] = useState(null);
  const [deliveryAddresses, setDeliveryAddresses] = useState(null);

  const [errorRegister, setErrorRegister] = useState(false);
  const [errorRegisterMessage, setErrorRegisterMessage] = useState("");

  const [user, setUser] = useState({
    phone,
    roles,
    address,
    deliveryAddresses,
  });

  const handleSetIsAnimation = () => {
    setIsAnimation(true);
  };
  const handleInputChange = (e) => {
    if (e.target.type === "checkbox") {
      setUser((user) => ({
        ...user,
        [e.target.name]: e.target.checked,
      }));
    } else {
      setUser((user) => ({ ...user, [e.target.name]: e.target.value }));
    }
  };
  const responseFacebook = (response) => {
    console.log(response);
    let data = {
      ...user,
      person: {
        ...user.person,
        firstName: response.name.split(" ")[0],
        lastName: response.name.split(" ")[1],
        birthdate: new Date().toISOString(),
      },
      email: response.email,
      outsideRefs: [response.userID],
    };
    console.log(data);

    axiosHandler("POST", `/api/v1/users`, data, window.constants.auth.token, {
      onSuccess: (response) => {
        setTimeout(() => {
          setEmailSent(false);
          setTimeout(() => {
            window.location.pathname = "log-in";
          }, 2000);
        }, 5000);
      },
      onError: (error) => {
        if (error.response.status === 422) {
          setErrorRegister(true);
          setErrorRegisterMessage(error.response.data.errors[0].message);
          setTimeout(() => {
            setErrorRegister(false);
            setTimeout(() => {
              window.location.pathname = "log-in";
            }, 2000);
          }, 5000);
        }
        return true;
      },
    });
  };
  const handleRegistration = (e) => {
    e.preventDefault();

    axiosHandler("POST", `/user/signup`, user, JWT_TOKEN, {
      onSuccess: (response) => {
        console.log(response);
        if (response.status === 200) {
          setEmailSent(true);
          setUser({
            ...user,
            firstName: "",
            lastName: "",
            email: "",
            termsAndConditonsAccepted: false,
            password: "",
          });
          setTimeout(() => {
            setEmailSent(false);
            setTimeout(() => {
              window.location.pathname = "log-in";
            }, 2000);
          }, 5000);
        }
      },
      onError: (error) => {
        // if (error.response.status === 422) {
        //   setErrorRegister(true);
        //   setErrorRegisterMessage(error.response.data.errors[0].message);
        //   setTimeout(() => {
        //     setErrorRegister(false);
        //     setTimeout(() => {
        //       window.location.pathname = "log-in";
        //     }, 2000);
        //   }, 5000);
        // }
        return true;
      },
    });
  };
  useEffect(() => {
    axios
      .post("https://ipinfo.io/products/api/ip-geolocation-api?value=user")
      .then((response) => {
        setUser({
          ...user,
          timezone: response.data.data.timezone,
        });
      });
    let confirmedEmail = window.location.search;
    if (confirmedEmail.includes("id")) {
      let id = confirmedEmail.split("id")[1];
      console.log(id.split("=")[1]);
      axios({
        method: "PUT",
        url: `${window.baseurl}/api/v1/users/verify/${id.split("=")[1]}`,
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          Authorization: bearerToken,
        },
      })
        .then((response) => {
          console.log("response on find country", response);
          if (response.status === 200) {
            setEmailConfirmed(true);
            setTimeout(() => {
              setEmailConfirmed(false);
              setTimeout(() => {
                window.location.pathname = "log-in";
              }, 2000);
            }, 5000);
          }
        })
        .catch((error) => {
          console.error("what error?! :)", error.response);
        });
    }

    window.addEventListener("load", handleSetIsAnimation());
    handleSetIsAnimation();
    return () => {
      window.removeEventListener("load", handleSetIsAnimation());
    };
  }, []);
  return (
    <RegisterPageIntroWrapper className={openMenu && "opened-menu"}>
      <div className={errorRegister ? "errors active" : "errors"}>
        <ErrorCircle size="32" />
        <p>{errorRegisterMessage}</p>
      </div>
      <div className={emailSent ? "email-sent active" : "email-sent"}>
        <CheckCircle size="32" />
        <p>{t("CheckEmailForConfirmationLink")}</p>
      </div>
      <div
        className={
          emailConfirmed ? "email-confirmed active" : "email-confirmed"
        }
      >
        <CheckCircle size="32" />
        <p>{t("EmailConfirmed")}</p>
      </div>
      <div className={isAnimation ? "container animation" : "container"}>
        <div className="left"></div>
        <div className="right">
          <form onSubmit={(e) => handleRegistration(e)}>
            <h3>{t("RegisterPageIntroTitle")}</h3>
            <p>
              <Trans components={{ Link: <Link></Link> }}>
                AlreadyRegistered
              </Trans>
            </p>

            <div className="social-register">
              <div className="card">
                <FacebookLogin
                  appId="1109013059874456"
                  fields="name,email"
                  textButton=""
                  callback={responseFacebook}
                  cssClass="card-inner"
                  icon={<img src={FacebookSvg} />}
                />
              </div>
              <div className="card">
                <div className="card-inner">
                  <img src={GoogleSvg} />
                </div>
              </div>
              <div className="card">
                <div className="card-inner">
                  <img src={AppleSvg} />
                </div>
              </div>
            </div>
            <div className="bottom-line">
              <hr />
              <span>{t("ContinueWith")}</span>
              <hr />
            </div>
            <div className="form-login">
              <div className="form-group">
                <label htmlFor="firstName">
                  {t("FirstName")}
                  <span>*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  data-target="person"
                  value={user && user.firstName}
                  onChange={(e) => handleInputChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">
                  {t("LastName")}
                  <span>*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  name="lastName"
                  data-target="person"
                  value={user && user.lastName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  E-Mail<span>*</span>
                </label>
                <input
                  type="text"
                  id="email"
                  required
                  name="email"
                  value={user && user.email}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  {t("Password")}
                  <span>*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  name="password"
                  value={user && user.password}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>
            <div className="accept-terms">
              <input
                type="checkbox"
                name="termsAndConditonsAccepted"
                id="terms"
                checked={user && user.termsAndConditonsAccepted}
                onChange={(e) => handleInputChange(e)}
                required
              />
              <label htmlFor="terms">{t("TermsAndConditions")}</label>
            </div>
            <div className="register-btn">
              <button className="btn-submit" type="submit">
                <CustomNormalProductLink title="register" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </RegisterPageIntroWrapper>
  );
};

export default RegisterPageIntro;
