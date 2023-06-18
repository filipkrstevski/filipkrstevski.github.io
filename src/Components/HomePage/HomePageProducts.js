import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { GlobalContext } from "../../Consts/GlobalContext";

import ProductsCards from "./ProductsCards";
const HomePageProductsWrapper = styled.div`
  padding: 150px 375px 80px;
  transition: all 0.6s ease-in;

  > h2 {
    ${(props) => props.theme.body_semibold_40};
    text-align: center;
  }
  > p {
    ${(props) => props.theme.body_regular_18};
    color: #313540;
    text-align: center;
    padding: 0 290px;
    margin: 20px 0 70px;
  }
  .products-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 100px 0px;
    margin-left: -10px;
    margin-right: -10px;
  }
  @media (max-width: 1919px) {
    padding: 100px 150px 80px;
  }
  @media (max-width: 1439px) {
    padding: 150px 50px 80px;
    > p {
      padding: 0 150px;
    }
  }
  @media (max-width: 1023px) {
    padding: 100px 20px 50px;

    > p {
      padding: 0;
    }
  }
  @media (max-width: 767px) {
    padding: 30px 20px;
    > h2 {
      font-size: 30px;
      line-height: 42px;
    }
    > p {
      font-size: 16px;
      line-height: 22px;
      margin: 20px 0 35px;
    }
    .products-wrapper {
      display: block;

      > div {
        &:not(:last-child) {
          margin-bottom: 25px;
        }
      }
    }
  }
`;

const HomePageProducts = () => {
  const { openMenu, productsList, t } = useContext(GlobalContext);

  return (
    <HomePageProductsWrapper className={openMenu && "opened-menu"}>
      <h2>{t("HomePageProductsTitle")}</h2>
      <p>{t("HomePageProductsText")}</p>
      <div className="products-wrapper">
        {productsList &&
          productsList.map((product) => {
            return (
              <ProductsCards
                title={product.type}
                price={product.priceFrom}
                discount={product.discountPercent}
                enabled={product.enabled}
                id={product.id}
                key={product.id}
              />
            );
          })}
      </div>
    </HomePageProductsWrapper>
  );
};

export default HomePageProducts;
