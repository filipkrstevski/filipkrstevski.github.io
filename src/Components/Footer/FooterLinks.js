import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalContext } from "../../Consts/GlobalContext";
import logo from "../../img/home-page/logo.svg";
import arrow from "../../img/arrow.svg";

const FooterLinksWrapper = styled.div`
  display: flex;
  background-color: #d3d8e6;
  transition: all 0.6s ease-in;

  .container-top {
    flex-basis: 375px;
    background-color: #d3d8e6;
    position: relative;
    z-index: 2;
  }
  .container {
    display: flex;
    padding: 165px 0;
    column-gap: 150px;
    flex-basis: 60%;
    .container-left {
      // flex-basis: 20%;
      a {
        display: block;
      }
    }
    .container-right {
      flex-basis: 80%;
      display: flex;
      column-gap: 100px;
      .left,
      .middle {
        display: flex;
        flex-basis: 37.5%;
        flex-wrap: wrap;
        .footer-headers {
          &:first-child {
            margin-bottom: 100px;
          }
        }
      }
      .right {
        flex-basis: 25%;
      }
      .footer-headers {
        flex-basis: 100%;
        p {
          ${(props) => props.theme.body_semibold_18};
          margin-bottom: 40px;
          img {
            display: none;
          }
        }
        ul {
          list-style: none;
          li {
            ${(props) => props.theme.body_regular_16};
            a {
              text-decoration: none;
              color: black;
            }
            .disabled {
              pointer-events: none;
            }
            &:not(:last-child) {
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1919px) {
    .container-top {
      flex-basis: 150px;
    }
    .container {
      flex-basis: 75%;
    }
  }
  @media (max-width: 1439px) {
    .container {
      column-gap: 50px;
      .container-right {
        column-gap: 25px;
      }
    }
  }

  @media (max-width: 1023px) {
    .container-top {
      display: none;
    }

    .container {
      padding: 65px 20px;
      column-gap: 0;
      flex-basis: 100%;
      justify-content: center;
      .container-right {
        flex-basis: 100%;
      }
      .container-left {
        a {
          display: none;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .container {
      .container-right {
        display: block;
        .left,
        .middle {
          .footer-headers {
            &:first-child {
              margin-bottom: 30px;
            }
          }
        }
        .footer-headers {
          overflow: hidden;
          p {
            display: flex;
            align-items: center;
            column-gap: 8px;
            margin-bottom: 0px;
            img {
              display: block;
              transition: all 1.2s ease-in-out;
            }
          }
          ul {
            max-height: 0;
            transition: all 1.2s ease-in-out;
          }
        }
        .footer-headers.active {
          p {
            img {
              transform: rotate(180deg);
            }
          }
          ul {
            margin-top: 15px;
            max-height: 500px;
          }
        }
      }
    }
  }
`;
const FooterLinks = () => {
  const { openMenu, cookies, userInfo, productsList, t } =
    useContext(GlobalContext);

  const handleMobileFooterOpen = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };

  return (
    <FooterLinksWrapper className={openMenu && "opened-menu"}>
      <div className="container-top"></div>
      <div className="container">
        <div className="container-left">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="container-right">
          <div className="left">
            <div className="footer-headers">
              <p onClick={(e) => handleMobileFooterOpen(e)}>
                <span>myfoto.art</span>
                <img src={arrow} alt="arrow" className="arrow" />
              </p>
              <ul>
                <li>
                  <Link to="/coming-soon">{t("AboutUs")}</Link>{" "}
                </li>
                <li>
                  <Link to="/coming-soon">{t("Quality")}</Link>
                </li>
                <li>
                  <Link to="/coming-soon">{t("Sustainability")}</Link>
                </li>
                <li>
                  <Link to="/coming-soon">{t("TestWinner")}</Link>
                </li>
                <li>
                  <Link to="/reviews">{t("Reviews")}</Link>
                </li>
                <li>
                  <Link to="/coming-soon">{t("BusinessCustomers")}</Link>
                </li>
                <li>
                  <Link to="/coming-soon">{t("Press")}</Link>
                </li>
              </ul>
            </div>
            {/* <div className="footer-headers">
              <p>Rich in ideas</p>
              <ul>
                <li>Decoration world </li>
                <li>Blog</li>
                <li>Photos + stories</li>
                <li>Gift occasions</li>
                <li>Order accessories &amp; instructions</li>
              </ul>
            </div> */}
          </div>
          <div className="middle">
            <div className="footer-headers">
              <p onClick={(e) => handleMobileFooterOpen(e)}>
                {t("Products")}
                <img src={arrow} alt="arrow" className="arrow" />
              </p>
              <ul>
                {productsList &&
                  productsList.map((el) => (
                    <li>
                      <Link
                        to={`/products/${el.type.toLowerCase()}`}
                        className={!el.enabled ? "disabled" : undefined}
                      >
                        {t(el.type)} {!el.enabled && `(${t("ComingSoon")})`}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            {/* <div className="footer-headers">
              <p>Affiliate program</p>
              <ul>
                <li>Become an affiliate </li>
                <li>Become an influencer</li>
              </ul>
            </div> */}
          </div>
          <div className="right">
            <div className="footer-headers">
              <p onClick={(e) => handleMobileFooterOpen(e)}>
                {t("Service")}
                <img src={arrow} alt="arrow" className="arrow" />
              </p>
              <ul>
                <li>
                  <Link to="/coming-soon">{t("HelpNContact")}</Link>
                </li>
                <li>
                  <Link to="/coming-soon">{t("ServiceWorld")}</Link>
                </li>
                <li>
                  <Link
                    to={
                      cookies.isLoggedin
                        ? userInfo &&
                          userInfo.roles.find((el) => el === "ADMIN")
                          ? "/dashboard"
                          : "/dashboard"
                        : "/log-in"
                    }
                  >
                    {t("OrderStatus")}
                  </Link>
                </li>
                <li>
                  <Link to="/coming-soon">{t("BestPriceGuarantee")}</Link>
                </li>
                <li>
                  <Link to="/coming-soon">{t("FormatsNPrices")}</Link>
                </li>
                <li>
                  <Link to="/coming-soon">{t("Shipping")}</Link>
                </li>
                <li>
                  <Link to="/coming-soon">{t("SecurePayment")}</Link>
                </li>
                <li>
                  <Link
                    to={
                      cookies.isLoggedin
                        ? userInfo &&
                          userInfo.roles.find((el) => el === "ADMIN")
                          ? "/dashboard"
                          : "/dashboard"
                        : "/log-in"
                    }
                  >
                    {t("LogIn")}
                  </Link>
                </li>
                <li>
                  <Link to="/coming-soon">{t("TermsAndConditionsFooter")}</Link>
                </li>
                <li>
                  <Link to="/coming-soon">{t("DataProtection")}</Link>
                </li>
                <li>
                  <Link to="/coming-soon">{t("LoyaltyProgram")}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FooterLinksWrapper>
  );
};

export default FooterLinks;
