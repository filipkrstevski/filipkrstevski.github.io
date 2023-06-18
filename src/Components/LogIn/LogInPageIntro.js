import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import BgImage from "../../img/log-in/bg-image.png";
import AppleSvg from "../../img/log-in/apple.svg";
import FacebookSvg from "../../img/log-in/facebook.svg";
import GoogleSvg from "../../img/log-in/google.svg";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Consts/GlobalContext";
import ReactFacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import CustomNormalProductLink from "../CustomLinkComponent/CustomNormalProductLink";
import ErrorMessagesComponent from "../ErrorMessagesComponent/ErrorMessagesComponent";
import { useHistory } from "react-router-dom";
import { Trans } from "react-i18next";
import ErrorModal from "../ErrorModal/ErrorModal";

const LogInPageIntroWrapper = styled.div`
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
      form {
        background-color: #fff;
        padding: 70px;
        box-shadow: 0px 4px 10px #1a284d14;
        border-radius: 10px;
        width: 570px;
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
            a {
              color: black;
              text-decoration: none;
            }
          }
        }
        .login-btn {
          margin: 40px 0 30px;
          button {
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
        .social-login {
          display: flex;
          margin-left: -10px;
          margin-right: -10px;
          margin-top: 30px;
          .card {
            flex-basis: 33.33%;
            padding: 0 10px;
            .card-inner {
              height: 100%;
              padding: 11px 0;
              width: 100%;
              border: 1px solid #d3d8e6;
              background-color: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 3px;
            }
          }
        }
        .register {
          margin-top: 30px;
          span {
            ${(props) => props.theme.body_regular_12};
            color: #546285;
            a {
              font-weight: 600;
              text-decoration: none;
              color: #000;
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
      background-position: 65% 0%;
    }
    .right {
      right: 40%;
    }
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
        }
      }
    }
  }
`;

const LogInPageIntro = () => {
  const {
    openMenu,
    userLogin,
    handleLoginSubmit,
    handleUserLoginChange,
    responseSocialMediaLogins,
    userInfo,
    cookies,
    t,
  } = useContext(GlobalContext);
  const [isAnimation, setIsAnimation] = useState(false);
  let history = useHistory();
  const handleSetIsAnimation = () => {
    setIsAnimation(true);
  };

  useEffect(() => {
    window.addEventListener("load", handleSetIsAnimation());
    handleSetIsAnimation();
    if (cookies.isLoggedIn) {
      history.push("/dashboard");
    }
    return () => {
      window.removeEventListener("load", handleSetIsAnimation());
    };
  }, []);

  return (
    <LogInPageIntroWrapper className={openMenu && "opened-menu"}>
      <ErrorMessagesComponent />
      <ErrorModal />
      <div className={isAnimation ? "container animation" : "container"}>
        <div className="left"></div>
        <div className="right">
          <form onSubmit={(e) => handleLoginSubmit(e)}>
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
                value={userLogin && userLogin.password}
                onChange={(e) => handleUserLoginChange(e)}
              />
            </div>
            <div className="check-pass-group">
              <div>
                <input type="checkbox" name="remember-me" id="remember-me" />
                <label htmlFor="remember-me">{t("RememberMe")}</label>
              </div>
              <p>
                <Link to="/password-reset">{t("ForgotPassword")}</Link>
              </p>
            </div>
            <div className="login-btn">
              <button className="btn-submit" type="submit">
                <CustomNormalProductLink title="log in" />
              </button>
            </div>
            <div className="bottom-line">
              <hr />
              <span>{t("Or")}</span>
              <hr />
            </div>
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
            <div className="register">
              <span>
                <Trans components={{ Link: <Link to="/register"></Link> }}>
                  ClickHereToRegister
                </Trans>
              </span>
            </div>
          </form>
        </div>
      </div>
    </LogInPageIntroWrapper>
  );
};

export default LogInPageIntro;
