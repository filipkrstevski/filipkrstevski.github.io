import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Consts/GlobalContext";
const PageComponentWrapper = styled.div`
  margin-top: 20px;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 80px;
    p {
      ${(props) => props.theme.body_regular_16};
      color: #6f768a;
      cursor: pointer;
      text-transform: capitalize;
    }
    > div {
      span {
        ${(props) => props.theme.body_regular_16};
        color: #6f768a;
        cursor: pointer;
        &:not(:last-child) {
          margin-right: 60px;
        }
      }
      span.active {
        font-weight: bold;
        color: black;
      }
    }
    p.disabled {
      color: rgba(111, 118, 138, 0.5);
      cursor: default;
    }
  }

  @media (max-width: 1439px) {
    > div {
      > div {
        span {
          &:not(:last-child) {
            margin-right: 35px;
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    > div {
      justify-content: space-between;
      column-gap: 15px;
      > div {
        display: flex;
        flex-grow: 1;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        row-gap: 15px;
        span {
          flex-basis: 20%;
          text-align: center;
          &:not(:last-child) {
            margin-right: 0;
          }
        }
      }
    }
  }
`;

const PagingComponent = ({ path, pageSize, noPaginationNumbers = false }) => {
  const {
    handlingPagingComponentCalls,
    userOrders,
    setUserOrders,
    scrollToTop,
    t,
  } = useContext(GlobalContext);
  const [countPage, setCountPage] = useState(0);
  const [paginationNumbers, setPaginationNumbers] = useState();
  const handleChangePage = (e) => {
    let count;
    if (e.target.getAttribute("data-name") === "increase") {
      count = countPage + 1;
    } else {
      count = countPage - 1;
    }
    setCountPage(count);
    handlingPagingComponentCalls(
      path,
      setUserOrders,
      count,
      pageSize,
      setPaginationNumbers
    );
    scrollToTop();
  };

  const handleSingleNumberPageClick = (e, i) => {
    handlingPagingComponentCalls(
      path,
      setUserOrders,
      i,
      pageSize,
      setPaginationNumbers
    );
    setCountPage(i);
  };
  useEffect(() => {
    handlingPagingComponentCalls(
      path,
      setUserOrders,
      countPage,
      pageSize,
      setPaginationNumbers
    );
  }, [window.constants.auth.token]);
  return (
    <PageComponentWrapper>
      {!noPaginationNumbers && (
        <div>
          <p
            className={userOrders && userOrders.first && "disabled"}
            onClick={
              userOrders && !userOrders.first
                ? (e) => handleChangePage(e)
                : undefined
            }
            name="decrease"
          >
            {t("Prev")}
          </p>
          <div>
            {paginationNumbers &&
              paginationNumbers.map((el, i) => (
                <span
                  className={userOrders.number + 1 === el && "active"}
                  onClick={(e) => handleSingleNumberPageClick(e, el - 1)}
                >
                  {el}
                </span>
              ))}
          </div>
          <p
            className={userOrders && userOrders.last && "disabled"}
            onClick={
              userOrders && !userOrders.last
                ? (e) => handleChangePage(e)
                : undefined
            }
            data-name="increase"
          >
            {t("Next")}
          </p>
        </div>
      )}
    </PageComponentWrapper>
  );
};

export default PagingComponent;
