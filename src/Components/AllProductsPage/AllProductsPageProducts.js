import React, { useEffect } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { GlobalContext } from "../../Consts/GlobalContext";
import ProductsCards from "../HomePage/ProductsCards";
const AllProductsPageProductsWrapper = styled.div`
  padding: 150px 375px 80px;
  transition: all 0.6s ease-in;
  .products-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 100px 0px;
    margin-left: -10px;
    margin-right: -10px;
  }
`;

const AllProductsPageProducts = () => {
  const { openMenu, productsList } = useContext(GlobalContext);

  useEffect(() => {}, []);
  return (
    <AllProductsPageProductsWrapper className={openMenu && "opened-menu"}>
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
    </AllProductsPageProductsWrapper>
  );
};

export default AllProductsPageProducts;
