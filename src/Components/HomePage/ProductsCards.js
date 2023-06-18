import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Group4 from "../../img/home-page/group-04.png";
import Group9 from "../../img/home-page/group-09.png";
import Group258 from "../../img/home-page/group-258.png";
import Group57742 from "../../img/check-out/group-57742.png";
import Mockup10 from "../../img/all-products/mockup-10.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";
import CustomProductLink from "../CustomLinkComponent/CustomProductLink";
import { GlobalContext } from "../../Consts/GlobalContext";

const ProductsCardsWrapper = styled.div`
  width: 33.33%;
  padding: 0 10px;
  .card {
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    .card-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-color: rgba(255, 255, 255, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        ${(props) => props.theme.body_semibold_40};
        color: white;
        font-weight: bold;
        font-size: 50px;
      }
    }
    .card-slider {
      margin-bottom: 30px;
      .slider-images {
        img {
          width: 100%;
        }
      }
    }
    .card-content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      > p {
        display: flex;
        justify-content: space-between;
        > span {
          &:first-child {
            ${(props) => props.theme.body_semibold_20};
            color: #313540;
            flex-basis: 60%;
          }
          .line-through {
            text-decoration: line-through;
          }
          &:last-child {
            flex-basis: 32%;
            ${(props) => props.theme.body_regular_16};
            color: #6f768a;
            text-align: right;
            span {
              display: block;
            }
            .discount {
              color: red;
            }
          }
        }
      }
      .card-bottom {
        > a {
          ${(props) => props.theme.body_regular_14};
          color: #6f768a;
          display: block;
          text-align: center;
          margin-top: 10px;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media (max-width: 1439px) {
    .card {
      min-height: 530px;
      .card-overlay {
        p {
          font-size: 35px;
          line-height: 49px;
        }
      }
    }
  }

  @media (max-width: 1023px) {
    width: 50%;
  }
  @media (max-width: 767px) {
    width: 100%;
    .card {
      min-height: 580px;
      .card-overlay {
        p {
          font-size: 30px;
          line-height: 42px;
        }
      }
      .card-slider {
        margin-bottom: 15px;
      }
      .card-content {
        > p {
        }
      }
    }
  }
  @media (max-width: 424px) {
    .card {
      min-height: 480px;
    }
  }
`;

const ProductsCards = ({ title, price, discount = 0, enabled, id }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };
  const { t } = useContext(GlobalContext);
  return (
    <ProductsCardsWrapper>
      <div className="card">
        {!enabled && (
          <div className="card-overlay">
            <p>{t("ComingSoon")}</p>
          </div>
        )}
        <div className="card-slider">
          <Slider {...settings}>
            <div className="slider-images">
              <img src={Group9} />
            </div>
            <div className="slider-images">
              <img src={Mockup10} />
            </div>
            <div className="slider-images">
              <img src={Group57742} />
            </div>
          </Slider>
        </div>
        <div className="card-content">
          <p>
            <span>{t(title)}</span>
            <span>
              <span className={discount > 0 && "line-through"}>
                {t("ProductsCardsPrice", { price })}
              </span>
              {discount > 0 && (
                <span className="discount">
                  {t("ProductsCardsNewPrice")}
                  {price - price * (discount / 100)}
                </span>
              )}
            </span>
          </p>
          <div className="card-bottom">
            <CustomProductLink
              title="start designing"
              to="/design-products"
              id={id}
            />
            <Link to={`/products/${title.toLowerCase().replaceAll(" ", "-")}`}>
              {t("MoreInfo")}
            </Link>
          </div>
        </div>
      </div>
    </ProductsCardsWrapper>
  );
};

export default ProductsCards;
