import React, { useContext } from "react";
import styled from "styled-components";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { InstagramAlt, Tiktok } from "@styled-icons/boxicons-logos";
import { GlobalContext } from "../../Consts/GlobalContext";
import { Trans } from "react-i18next";

const FooterWrapper = styled.div`
  padding: 28px 375px;
  background-color: #d3d8e6;
  border-top: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.6s ease-in;

  .left {
    display: flex;
    p {
      ${(props) => props.theme.footer_14};
      &:first-child {
        margin-right: 18.5px;
      }
      &:nth-child(2) {
        margin-left: 18.5px;
      }
    }
  }
  .right {
    display: flex;
    .social-links {
      width: 24px;
      height: 24px;
      color: #6f768a;
      display: block;
      &:not(:last-of-type) {
        margin-right: 24px;
      }
    }
  }

  @media (max-width: 1900px) {
    padding: 28px 275px;
  }
  @media (max-width: 1439px) {
    padding: 28px 50px;
  }
  @media (max-width: 1023px) {
    padding: 15px 20px;
  }
  @media (max-width: 767px) {
    display: block;
    text-align: center;
    padding: 10px 0;
    .left {
      justify-content: center;
      margin-bottom: 8px;
    }
    .right {
      justify-content: center;
      margin-top: 8px;
    }
  }
`;
const Footer = () => {
  const { openMenu, t } = useContext(GlobalContext);

  return (
    <FooterWrapper className={openMenu && "opened-menu"}>
      <div className="left">
        <p>
          {t("FooterTitle1")}
          &#10084;
          {t("FooterTitle2")}
        </p>
        |<p>{t("FooterText")}</p>
      </div>
      <div className="right">
        <a
          href="https://www.facebook.com/myfotoart-100129875968673/"
          className="social-links"
          target="_blank"
        >
          <FacebookRoundedIcon />
        </a>
        <a href="/" className="social-links" target="_blank">
          <InstagramAlt />
        </a>
        <a href="/" className="social-links" target="_blank">
          <YouTubeIcon />
        </a>
        <a href="/" className="social-links" target="_blank">
          <Tiktok />
        </a>
        <a href="/" className="social-links" target="_blank">
          <PinterestIcon />
        </a>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
