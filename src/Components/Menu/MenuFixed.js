import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import logo from "../../img/home-page/logo.svg";
import logoWhite from "../../img/home-page/logo-white.svg";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { GlobalContext } from "../../Consts/GlobalContext";
import { Link } from "react-router-dom";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";
import { Globe } from "@styled-icons/fluentui-system-regular/Globe";
import i18n from "i18next";

const MenuFixedWrapper = styled.div`
  > .logo-wrapper {
    position: fixed;
    top: 45px;
    left: 110px;
    transition: all 0.6s ease-in;
    z-index: 2;
  }
  > .menu-wrapper {
    transition: all 0.6s ease-in;
    position: fixed;
    z-index: 1;
    top: 45px;
    right: 80px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    row-gap: 30px;
    .hamburger-menu {
      background-color: #000;
      border-radius: 50%;
      width: 64px;
      height: 64px;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      span {
        display: block;
        height: 3px;
        background-color: #fff;
        width: 32px;
        &:not(:last-child) {
          margin-bottom: 5px;
        }
      }

      &:hover {
        box-shadow: 3px 3px 15px #0000004f;
        cursor: pointer;
      }
    }
    .log-in {
      a {
        color: #000;
        display: block;
      }
      .person-icon {
        display: block;
        font-size: 32px;
      }
    }
    .cart {
      position: relative;
      span {
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
        background-color: white;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        ${(props) => props.theme.body_semibold_10}
        display:flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
      }
      a {
        color: #000;
        display: block;
        svg {
          font-size: 28px;
        }
      }
      .shopping-cart-icon {
        display: block;
      }
    }
    .language {
      position: relative;
      height: 4.5vh;
      padding: 0 10px;
      span {
        display: block;
      }
      ul {
        list-style-type: none;
        background-color: white;
        border-radius: 10px;
        padding: 15px;
        position: absolute;
        top: 40px;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0px -4px 20px #1a284d1a;

        opacity: 0;
        visibility: hidden;
        li {
          cursor: pointer;
          ${(props) => props.theme.body_regular_14};
          font-weight: 500;
          color: #d3d8e6;
          &:not(:first-child) {
            margin-top: 10px;
          }
        }
        li.active {
          color: #000;
        }

        &:before {
          content: "";
          width: 15px;
          height: 15px;
          background-color: white;
          position: absolute;
          top: -6px;
          left: 35%;
          transform: rotate(45deg);
        }
      }
    }

    .language.active {
      ul {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .menu-opened {
    padding: 45px 110px 0 80px;
    position: fixed;
    z-index: 100;
    background-color: #000;
    top: 0;
    left: 101%;
    right: 0;
    width: 100%;
    height: 100vh;
    transition: all 0.6s ease-in-out;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
    .menu-opened-wrapper {
      display: flex;
      justify-content: space-between;
      > .menu-wrapper {
        display: flex;
        flex-flow: column;
        align-items: center;
        .close-menu {
          background-color: #fff;
          border-radius: 50%;
          width: 64px;
          height: 64px;
          margin-bottom: 30px;
          .close-menu-wrapper {
            position: relative;
            height: 100%;
            transition: all 0.3s ease-out;
            span {
              display: block;
              height: 3px;
              background-color: #000;
              width: 32px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              &:first-child {
                transform: translate(-50%, -50%) rotate(45deg);
              }
              &:last-child {
                transform: translate(-50%, -50%) rotate(-45deg);
              }
            }
          }
          &:hover {
            cursor: pointer;
            .close-menu-wrapper {
              transform: rotate(90deg);
            }
          }
        }
        .log-in {
          color: white;
          margin-bottom: 30px;
          .person-icon {
            font-size: 36px;
            display: block;
          }
        }
        .cart {
          color: white;
          .shopping-cart-icon {
            font-size: 36px;
            display: block;
          }
        }
      }
    }
    .menu-opened-links {
      padding-left: 165px;
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      .menu-link {
        text-decoration: none;
        display: inline-block;
        padding: 30px 0;
        .menu-link-wrapper {
          display: flex;
          align-items: center;
          span {
            color: white;
            &:first-child {
              ${(props) => props.theme.h1_80};
              text-transform: capitalize;
            }
            &:last-child {
              position: relative;
              svg {
                opacity: 0;
                visibility: hidden;
                transition: all 0.6s ease-in;
                transform: translateX(25px) scaleX(1.2);
              }
              &:before {
                content: "";
                display: block;
                opacity: 0;
                visibility: hidden;
                width: 52px;
                height: 52px;
                border-radius: 50%;
                border: 2px solid white;
                position: absolute;
                top: 50%;
                left: 35px;
                transform: translateY(-50%);
                transition: all 0.6s ease-in;
              }
            }
          }
        }
        ul {
          list-style: none;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: all 0.8s ease-in-out;
          display: flex;
          flex-wrap: wrap;
          max-width: 550px;
          justify-content: space-between;
          li {
            ${(props) => props.theme.body_regular_20};
            color: white;
            flex-basis: 40%;
            margin: 10px 0;
            a {
              text-decoration: none;
              color: white;
            }
          }
        }
        ul.sub-menu-active {
          max-height: 500px;
          opacity: 1;
        }
        &:hover {
          > div {
            span {
              &:first-child {
                color: ${(props) => props.theme.secondary_color};
              }
            }
          }
        }

        &:hover {
          .menu-link-wrapper {
            span {
              &:last-child {
                svg {
                  opacity: 1;
                  visibility: visible;
                  transform: translateX(50px) scaleX(1);
                }
                &:before {
                  opacity: 1;
                  visibility: visible;
                  width: 64px;
                  height: 64px;
                }
              }
            }
          }
        }
      }
    }
  }
  .menu-opened.open {
    left: 0%;
  }

  @media (max-width: 1919px) {
    > .logo-wrapper {
      left: 15px;
    }
    > .menu-wrapper {
      right: 15px;
    }
  }

  @media (max-width: 1439px) {
    > .logo-wrapper {
      left: 10px;
    }
    > .menu-wrapper {
      right: 0px;
      z-index: 2;
    }
  }

  @media (max-width: 1023px) {
    > .logo-wrapper {
      img {
        width: 110px;
      }
    }
  }

  @media (max-width: 767px) {
    > .menu-wrapper {
      z-index: 2;
    }
  }
`;
const Menufixed = () => {
  const {
    openMenu,
    handleMenuOpen,
    productObject,
    cookies,
    userInfo,
    changeLang,
    openLangMenu,
    closeLangMenu,
  } = useContext(GlobalContext);
  const handleSubMenu = (e) => {
    e.currentTarget.classList.add("active");
    e.currentTarget.children[1].classList.add("sub-menu-active");
  };
  const handleSubMenuClose = (e) => {
    e.currentTarget.children[1].classList.remove("sub-menu-active");
    e.currentTarget.classList.remove("active");
  };

  useEffect(() => {
    if (openMenu) {
      setTimeout(() => {
        document.body.classList.add("no-scrolling");
      }, 580);
    } else {
      document.body.classList.remove("no-scrolling");
    }
  }, [openMenu]);
  return (
    <MenuFixedWrapper>
      <div
        style={openMenu ? { zIndex: "10" } : {}}
        className={openMenu ? "opened-menu logo-wrapper" : "logo-wrapper"}
      >
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div
        style={openMenu ? { zIndex: "10" } : {}}
        className={openMenu ? "opened-menu menu-wrapper" : "menu-wrapper"}
      >
        {/* <div className="hamburger-menu" onClick={(e) => handleMenuOpen(e)}>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
        <div className="log-in">
          <Link
            to={
              cookies.isLoggedin
                ? userInfo && userInfo.roles.find((el) => el === "ADMIN")
                  ? "/dashboard"
                  : "/dashboard"
                : "/log-in"
            }
          >
            <PersonIcon className="person-icon" size="32" />
          </Link>
        </div>
        <div className="cart">
          <Link to="/check-out/cart">
            {productObject &&
              productObject.items &&
              productObject.items.length > 0 && (
                <span>{productObject.items.length}</span>
              )}
            <ShoppingCartIcon className="shopping-cart-icon" size="32" />
          </Link>
        </div>
        <div
          className="language"
          onMouseEnter={(e) => openLangMenu(e)}
          onMouseLeave={(e) => closeLangMenu(e.currentTarget)}
        >
          <span>
            <Globe size="30" />
          </span>
          <ul>
            <li
              className={i18n.language === "en" ? "active" : undefined}
              onClick={(e) => changeLang(e)}
              name="en"
            >
              EN
            </li>
            <li
              className={i18n.language === "de" ? "active" : undefined}
              onClick={(e) => changeLang(e)}
              name="de"
            >
              DE
            </li>
          </ul>
        </div>
      </div>
      <div className={openMenu ? "menu-opened open" : "menu-opened"}>
        <div className="menu-opened-wrapper">
          <div className="logo-wrapper">
            <img src={logoWhite} />
          </div>
          <div className="menu-wrapper">
            <div className="close-menu" onClick={(e) => handleMenuOpen(e)}>
              <div className="close-menu-wrapper">
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="log-in">
              <PersonIcon className="person-icon" />
            </div>
            <div className="cart">
              <ShoppingCartIcon className="shopping-cart-icon" />
            </div>
          </div>
        </div>
        <div className="menu-opened-links">
          <Link
            to="/"
            className="menu-link"
            onMouseEnter={handleSubMenu}
            onMouseLeave={handleSubMenuClose}
          >
            <div className="menu-link-wrapper">
              <span>Photo in large</span>
              <span className="menu-link-animation">
                <ArrowRight size="32" />
              </span>
            </div>
            <ul>
              <li>
                <Link to="/">Photo in the frame</Link>
              </li>
              <li>
                <Link to="/products/canvas">Canvas</Link>
              </li>
              <li>
                <Link to="/">Canvas collage</Link>
              </li>
              <li>
                <Link to="/">Acrylic glass</Link>
              </li>
              <li>
                <Link to="/">Alu-Dibond</Link>
              </li>
              <li>
                <Link to="/">MixPix</Link>
              </li>
              <li>
                <Link to="/">Poster</Link>
              </li>
              <li>
                <Link to="/">Photo board</Link>
              </li>
              <li>
                <Link to="/">Wood</Link>
              </li>
              <li>
                <Link to="/">Gallery Point</Link>
              </li>
              <li>
                <Link to="/">Retro canvas</Link>
              </li>
              <li>
                <Link to="/">Photo in round</Link>
              </li>
            </ul>
          </Link>
          <Link
            to="/"
            className="menu-link"
            onMouseEnter={handleSubMenu}
            onMouseLeave={handleSubMenuClose}
          >
            <div className="menu-link-wrapper">
              <span>Photo home decoration</span>
              <span className="menu-link-animation">
                <ArrowRight size="32" />
              </span>
            </div>
            <ul>
              <li>Photo in the frame</li>
              <li>Canvas</li>
              <li>Canvas collage</li>
              <li>Acrylic glass</li>
              <li>Alu-Dibond</li>
              <li>MixPix</li>
              <li>Poster</li>
              <li>Photo board</li>
              <li>Wood</li>
              <li>Gallery Point</li>
              <li>Retro canvas</li>
              <li>Photo in round</li>
            </ul>
          </Link>
          <Link
            to="/"
            className="menu-link"
            onMouseEnter={handleSubMenu}
            onMouseLeave={handleSubMenuClose}
          >
            <div className="menu-link-wrapper">
              <span>Photo Gifts</span>
              <span className="menu-link-animation">
                <ArrowRight size="32" />
              </span>
            </div>
            <ul>
              <li>Photo in the frame</li>
              <li>Canvas</li>
              <li>Canvas collage</li>
              <li>Acrylic glass</li>
              <li>Alu-Dibond</li>
              <li>MixPix</li>
              <li>Poster</li>
              <li>Photo board</li>
              <li>Wood</li>
              <li>Gallery Point</li>
              <li>Retro canvas</li>
              <li>Photo in round</li>
            </ul>
          </Link>
          <Link
            to="/"
            className="menu-link"
            onMouseEnter={handleSubMenu}
            onMouseLeave={handleSubMenuClose}
          >
            <div className="menu-link-wrapper">
              <span>Photo Book & Calendar</span>
              <span className="menu-link-animation">
                <ArrowRight size="32" />
              </span>
            </div>
            <ul>
              <li>Photo in the frame</li>
              <li>Canvas</li>
              <li>Canvas collage</li>
              <li>Acrylic glass</li>
              <li>Alu-Dibond</li>
              <li>MixPix</li>
              <li>Poster</li>
              <li>Photo board</li>
              <li>Wood</li>
              <li>Gallery Point</li>
              <li>Retro canvas</li>
              <li>Photo in round</li>
            </ul>
          </Link>
          <Link
            to="/"
            className="menu-link"
            onMouseEnter={handleSubMenu}
            onMouseLeave={handleSubMenuClose}
          >
            <div className="menu-link-wrapper">
              <span>For kids</span>
              <span className="menu-link-animation">
                <ArrowRight size="32" />
              </span>
            </div>
            <ul>
              <li>Photo in the frame</li>
              <li>Canvas</li>
              <li>Canvas collage</li>
              <li>Acrylic glass</li>
              <li>Alu-Dibond</li>
              <li>MixPix</li>
              <li>Poster</li>
              <li>Photo board</li>
              <li>Wood</li>
              <li>Gallery Point</li>
              <li>Retro canvas</li>
              <li>Photo in round</li>
            </ul>
          </Link>
        </div>
      </div>
    </MenuFixedWrapper>
  );
};

export default Menufixed;
