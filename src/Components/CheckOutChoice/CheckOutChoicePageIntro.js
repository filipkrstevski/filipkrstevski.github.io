import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Consts/GlobalContext";
import ItemComponent from "../CheckOutCart/ItemComponent";
import CustomLink from "../CustomLinkComponent/CustomLink";
import CustomProductLink from "../CustomLinkComponent/CustomProductLink";
import AppleSvg from "../../img/log-in/apple.svg";
import FacebookSvg from "../../img/log-in/facebook.svg";
import GoogleSvg from "../../img/log-in/google.svg";
import Group18898 from "../../img/photo-canvas/group-18898.svg";
import Group19005 from "../../img/check-out/group-19005.svg";
import Group19006 from "../../img/check-out/group-19006.svg";
import CustomNormalProductLink from "../CustomLinkComponent/CustomNormalProductLink";
import ErrorMessagesComponent from "../ErrorMessagesComponent/ErrorMessagesComponent";
import { useHistory } from "react-router-dom";
import ReactFacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

const CheckOutCartPageIntroWrapper = styled.div`
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
    column-gap: 30px;
    .left {
      flex-basis: 50%;
      background-color: #fff;
      border-radius: 10px;
      padding: 70px;
      box-shadow: 4px 4px 40px #1a284d29;
      h3 {
        ${(props) => props.theme.body_semibold_20};
        color: #313540;
      }
      p {
        ${(props) => props.theme.body_regular_18};
        margin-top: 10px;
        color: #6f768a;
      }
      .social-login {
        display: flex;
        margin-left: -10px;
        margin-right: -10px;
        margin-top: 30px;
        .card {
          flex-basis: 33.33%;
          padding: 0 10px;
          .card-inner {
            cursor: pointer;
            height: 100%;
            padding: 11px 0;
            border: 1px solid #d3d8e6;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            width: 100%;
          }
        }
      }
      .bottom-line {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 30px 0;
        hr {
          flex-basis: 45%;
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
      form {
        .form-group {
          label {
            ${(props) => props.theme.body_semibold_14};
            color: #6f768a;
            display: block;
            margin-bottom: 5px;
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

          &:not(:nth-child(2)) {
            margin-bottom: 30px;
          }
        }
        .check-pass-group {
          margin-top: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          label {
            ${(props) => props.theme.body_regular_12};
            color: #6f768a;
          }
          p {
            ${(props) => props.theme.body_semibold_12};
          }
        }
        .login-btn {
          margin: 40px 0 0;
          > button {
            padding: 0;
            background-color: transparent;
            border: 0;
            width: 100%;
            a {
              padding: 20px 10px;
            }
          }
        }
      }
    }

    .right {
      flex-basis: 50%;
      background-color: #fff;
      border-radius: 10px;
      padding: 70px;
      box-shadow: 4px 4px 40px #1a284d29;
      > h3 {
        ${(props) => props.theme.body_semibold_20};
        color: #313540;
        margin-bottom: 15px;
      }
      > p {
        ${(props) => props.theme.body_regular_18};
        color: #6f768a;
        margin-bottom: 51px;
      }
      .advantages {
        margin-bottom: 35px;
        .advantages-card {
          display: flex;
          align-items: center;
          column-gap: 20px;
          .image {
            width: 72px;
            img {
              margin: 0 auto;
              display: block;
            }
          }
          p {
            ${(props) => props.theme.body_regular_14};
            color: #6f768a;
          }
          &:nth-child(2) {
            .image {
              img {
                width: 72px;
                height: 44px;
              }
            }
          }
          &:not(:last-child) {
            margin-bottom: 25px;
          }
        }
      }
      > span {
        display: block;
        ${(props) => props.theme.body_regular_14};
        color: #6f768a;
        margin: 35px 0;
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
    padding: 150px 20px 0;
    .container {
      .left {
        padding: 15px;
      }
      .right {
        padding: 15px;
      }
    }
  }

  @media (max-width: 767px) {
    padding: 200px 20px 0;

    .container {
      display: block;
      .left {
        margin-bottom: 25px;
      }
    }
  }
`;

const CheckOutCartPageIntro = () => {
  const {
    openMenu,
    cookies,
    userLogin,
    handleLoginSubmit,
    handleUserLoginChange,
    responseSocialMediaLogins,
    t,
  } = useContext(GlobalContext);
  let history = useHistory();
  useEffect(() => {
    if (cookies.isLoggedIn) {
      history.push("/check-out/address");
    }
  }, []);

  return (
    <CheckOutCartPageIntroWrapper className={openMenu && "opened-menu"}>
      <div className="parallax-effect"></div>
      <ErrorMessagesComponent />
      <div className="container">
        <div className="left">
          <h3>{t("WelcomeBack")}</h3>
          <p>{t("CheckOutChoicePageLogIn")}</p>
          <div className="social-login">
            <div className="card">
              <ReactFacebookLogin
                appId="1109013059874456"
                fields="name,email"
                textButton=""
                callback={responseSocialMediaLogins}
                cssClass="card-inner"
                icon={<img src={FacebookSvg} />}
              />
            </div>
            <div className="card">
              <GoogleLogin
                clientId="208784607888-2pdrvtq8idj70ihnj5gufgc081u410rr.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseSocialMediaLogins}
                onFailure={responseSocialMediaLogins}
                cookiePolicy={"single_host_origin"}
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="card-inner"
                  >
                    <img src={GoogleSvg} />
                  </button>
                )}
              />
            </div>
            <div className="card">
              <div className="card-inner">
                <img src={AppleSvg} />
              </div>
            </div>
          </div>
          <div className="bottom-line">
            <hr />
            <span>{t("Or")}</span>
            <hr />
          </div>
          <form onSubmit={(e) => handleLoginSubmit(e)} id="user-login">
            <div className="form-group">
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={userLogin && userLogin.email}
                onChange={(e) => handleUserLoginChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">{t("Password")}</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                value={userLogin && userLogin.pass}
                onChange={(e) => handleUserLoginChange(e)}
              />
            </div>
            <div className="check-pass-group">
              <div>
                <input type="checkbox" name="remember-me" id="remember-me" />
                <label htmlFor="remember-me">{t("RememberMe")}</label>
              </div>
              <p>{t("ForgotPassword")}</p>
            </div>
            <div className="login-btn">
              <button type="submit" form="user-login">
                <CustomNormalProductLink title="LOG IN AND PROCEED TO CHECK OUT" />
              </button>
            </div>
          </form>
        </div>
        <div className="right">
          <h3>{t("CheckOutChoicePageIntroOrderAsGuest")}</h3>
          <p>{t("CheckOutChoicePageIntroAdvanteges")} </p>
          <div className="advantages">
            <div className="advantages-card">
              <div className="image">
                <img src={Group19006} />
              </div>
              <p>{t("CheckOutChoicePageIntroMembership")} </p>
            </div>
            <div className="advantages-card">
              <div className="image">
                <img src={Group18898} />
              </div>
              <p>{t("CheckOutChoicePageIntroOrderStatus")}</p>
            </div>
            <div className="advantages-card">
              <div className="image">
                <img src={Group19005} />
              </div>
              <p>{t("CheckOutChoicePageIntroRedeemPoints")}</p>
            </div>
          </div>
          <CustomLink title="REGISTER NOW" to="/register" />
          <span>{t("CheckOutChoicePageIntroRSetUpAccount")}</span>
          <CustomNormalProductLink
            title="PROCEED TO CHECK OUT"
            to="/check-out/address"
          />
        </div>
      </div>
    </CheckOutCartPageIntroWrapper>
  );
};

export default CheckOutCartPageIntro;
