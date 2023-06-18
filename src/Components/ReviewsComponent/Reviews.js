import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Star } from "@styled-icons/entypo/Star";
import Group91 from "../../img/reviews/group-91.png";
import CustomLink from "../CustomLinkComponent/CustomLink";
import { GlobalContext } from "../../Consts/GlobalContext";
import PagingComponent from "../PagingComponent/PagingComponent";
const ReviewsWrapper = styled.div`
  padding: 100px 375px 150px;
  transition: all 0.6s ease-in;
  .container {
    text-align: center;
    > h2 {
      ${(props) => props.theme.body_semibold_40};
    }
    > p {
      ${(props) => props.theme.body_regular_18};
      margin: 25px 0;
    }
    .ratings {
      margin-top: 20px;
      > span {
        ${(props) => props.theme.body_regular_14};
        color: #6f768a;
      }
      .ratings-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 10px;
        > p {
          ${(props) => props.theme.body_semibold_20};
          font-size: 30px;
        }
        .ratings-stars {
          svg {
            color: ${(props) => props.theme.secondary_color};
          }
        }
      }
    }

    .cards-wrapper {
      display: flex;
      text-align: left;
      margin: 60px -15px 90px;
      .card {
        flex-basis: 25%;
        padding-left: 15px;
        padding-right: 15px;
        .inner-card-wrapper {
          box-shadow: 0px 8px 20px #1a284d14;
          padding: 30px;
          min-height: 270px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background-color: white;
          height: 100%;
          .card-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            > span {
              ${(props) => props.theme.body_regular_12};
              color: #6f768a;
            }
            .card-top-stars {
              svg {
                color: ${(props) => props.theme.secondary_color};
              }
            }
          }
          .card-middle {
            margin-top: 10px;
            > p {
              ${(props) => props.theme.body_regular_13};
              color: ${(props) => props.theme.primary_color};
            }
          }
          .card-bottom {
            > span {
              ${(props) => props.theme.body_regular_12};
              color: #6f768a;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1919px) {
    padding: 100px 150px 150px;
  }
  @media (max-width: 1439px) {
    padding: 50px 50px 100px;
    .container {
      .cards-wrapper {
        flex-wrap: wrap;
        row-gap: 30px;
        .card {
          flex-basis: 50%;
        }
      }
    }
  }
  @media (max-width: 1023px) {
    padding: 50px 20px 75px;
  }

  @media (max-width: 767px) {
    padding: 45px 20px;

    .container {
      .cards-wrapper {
        display: block;
        margin: 30px -15px;
        .card {
          &:not(:last-of-type) {
            margin-bottom: 25px;
          }
        }
      }
    }
  }
`;

const Reviews = () => {
  const {
    openMenu,
    userOrders,
    totalReviewScore,
    getDateDiffrences,
    t,
    allReviews,
  } = useContext(GlobalContext);

  return (
    <ReviewsWrapper className={openMenu && "opened-menu"}>
      <div className="container">
        <h2>{t("ReviewsTitle")}</h2>
        <p>{t("ReviewsText")}</p>
        <div className="ratings">
          <div className="ratings-wrapper">
            <img src={Group91} />
            <p className="ratings-number">{totalReviewScore.toFixed(2)}</p>
            <span className="ratings-stars">
              {totalReviewScore &&
                new Array(Math.round(totalReviewScore)).fill(0).map((el) => (
                  <span>
                    <Star size="24" />
                  </span>
                ))}
            </span>
          </div>
          <span>
            {t("ScoreBasedOnReviews", {
              reviews: `${allReviews && allReviews.length}`,
            })}
          </span>
        </div>

        <div className="cards-wrapper">
          {allReviews &&
            allReviews.map((el) => (
              <div className="card">
                <div className="inner-card-wrapper">
                  <div>
                    <div className="card-top">
                      <div className="card-top-stars">
                        {new Array(el.score).fill(0).map((el) => (
                          <span>
                            <Star size="24" />
                          </span>
                        ))}
                      </div>
                      <span>{getDateDiffrences(el)}</span>
                    </div>
                    <div className="card-middle">
                      <p>{el.text}</p>
                    </div>
                  </div>
                  <div className="card-bottom">
                    <span>{el.reviewer}</span>
                  </div>
                </div>
              </div>
            ))}
          <PagingComponent
            path="/api/v1/reviews/search"
            pageSize={4}
            noPaginationNumbers={true}
          />
        </div>
        <CustomLink
          title="read all reviews"
          to="/reviews"
          color="black"
          align="center"
        />
      </div>
    </ReviewsWrapper>
  );
};

export default Reviews;
