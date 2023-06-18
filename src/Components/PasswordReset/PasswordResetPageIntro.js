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
import axios from "axios";
import SuccessMessageComponent from "../SuccessMessageComponent/SuccessMessageComponent";

const PasswordResetPageIntroWrapper = styled.div`
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
          p {
            ${(props) => props.theme.body_semibold_12};
            color: #d74545;
            margin-top: 4px;
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
          text-align: center;
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
`;

const PasswordResetPageIntro = () => {
  const {
    openMenu,
    t,
    setIsSuccess,
    setSuccessMessage,
    bearerToken,
    axiosHandler,
  } = useContext(GlobalContext);

  const [email, setEmail] = useState();
  const [emailSent, setEmailSent] = useState(false);
  const [isAnimation, setIsAnimation] = useState(false);
  const [accountId, setAccountId] = useState();
  const [password, setPassword] = useState();
  const [arePasswordMatching, setArePasswordMatching] = useState(false);

  let history = useHistory();
  const handleSetIsAnimation = () => {
    setIsAnimation(true);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (emailSent) {
      if (password.password === password.confirmPassword) {
        setArePasswordMatching(false);

        axiosHandler(
          "PATCH",
          `/api/v1/users/passreset/${accountId}`,
          {
            password: password.password,
          },
          bearerToken,
          {
            onSuccess: (response) => {
              setIsSuccess(true);
              setSuccessMessage("PasswordHasBeenReset");
              setPassword();
              setTimeout(() => {
                window.history.replaceState(
                  null,
                  null,
                  window.location.pathname
                );
                window.location.pathname = "/log-in";
              }, 4000);
            },
            onError: (error) => {
              return true;
            },
          }
        );
      } else {
        setArePasswordMatching(true);
      }
    } else {
      axiosHandler(
        "POST",
        `/api/v1/users/passreset`,
        {
          email: email,
        },
        window.constants.auth.token,
        {
          onSuccess: (response) => {
            setIsSuccess(true);
            setSuccessMessage("PasswordResetSent");
          },
          onError: (error) => {
            return true;
          },
        }
      );
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    window.addEventListener("load", handleSetIsAnimation());
    handleSetIsAnimation();

    let confirmedEmail = window.location.search;
    if (confirmedEmail.includes("id")) {
      let id = confirmedEmail.split("id")[1];
      console.log(id.split("=")[1]);
      setAccountId(id.split("=")[1]);
      setEmailSent(true);
    }

    return () => {
      window.removeEventListener("load", handleSetIsAnimation());
    };
  }, []);

  return (
    <PasswordResetPageIntroWrapper className={openMenu && "opened-menu"}>
      <ErrorMessagesComponent />
      <SuccessMessageComponent />
      <div className={isAnimation ? "container animation" : "container"}>
        <div className="left"></div>
        <div className="right">
          <form onSubmit={(e) => handleEmailSubmit(e)}>
            {!emailSent && (
              <div className="form-group">
                <label htmlFor="email">E-Mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => handleEmailChange(e)}
                />
              </div>
            )}
            {emailSent && (
              <>
                <div className="form-group">
                  <label htmlFor="password">{t("Password")}</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    value={password && password.password}
                    onChange={(e) => handlePasswordChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">
                    {t("ConfirmPassword")}
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    required
                    value={password && password.confirmPassword}
                    onChange={(e) => handlePasswordChange(e)}
                  />
                  {arePasswordMatching && <p>Passwords not matching</p>}
                </div>
              </>
            )}
            <div className="login-btn">
              <button className="btn-submit" type="submit">
                <CustomNormalProductLink title="reset password" />
              </button>
            </div>

            <div className="register">
              <span>
                <Trans components={{ Link: <Link to="/log-in"></Link> }}>
                  AlreadyRegistered
                </Trans>
              </span>
            </div>
          </form>
        </div>
      </div>
    </PasswordResetPageIntroWrapper>
  );
};

export default PasswordResetPageIntro;
