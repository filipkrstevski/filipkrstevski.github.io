import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Consts/GlobalContext";
import { KeyboardArrowDown } from "@styled-icons/material-rounded/KeyboardArrowDown";
const FrequentlyAskedQuestionsWrapper = styled.div`
  transition: all 0.6s ease-in;
  padding: 300px 375px 180px;
  background-color: #f6f8fc;
  margin-top: -60px;
  > h2 {
    ${(props) => props.theme.body_semibold_40};
    margin-bottom: 50px;
    text-align: center;
    padding: 0 200px;
  }
  .accordion {
    box-shadow: 0px 4px 10px #1a284d14;
    .accordion-card {
      border-bottom: 1px solid #1a284d14;
      .accordion-header {
        padding: 30px 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h3 {
          ${(props) => props.theme.body_semibold_20};
          color: #6f768a;
          transition: all 0.6s ease-in-out;
        }
        > span {
          color: #6f768a;
          transition: all 0.6s ease-in-out;
        }
      }
      .accordion-body {
        max-height: 0;
        overflow: hidden;
        transition: all 0.6s ease-in-out;
        p {
          padding: 0 50px 30px;
          ${(props) => props.theme.body_regular_18};
        }
      }
    }
    .accordion-card.active {
      .accordion-header {
        h3 {
          color: black;
        }
        > span {
          transform: rotate(180deg);
        }
      }
      .accordion-body {
        max-height: 250px;
      }
    }
  }

  @media (max-width: 1919px) {
    padding: 300px 150px 180px;
  }
  @media (max-width: 1439px) {
    padding: 300px 50px 180px;
    > h2 {
      padding: 0 130px;
    }
  }

  @media (max-width: 1023px) {
    padding: 250px 20px 150px;
    > h2 {
      padding: 0;
    }
  }
  @media (max-width: 767px) {
    padding: 190px 20px 80px;
    > h2 {
      font-size: 25px;
      line-height: 35px;
    }
    .accordion {
      .accordion-card {
        .accordion-header {
          padding: 20px 15px;
          h3 {
            font-size: 16px;
            line-height: 22px;
          }
        }
      }
    }
  }
`;

const FrequentlyAskedQuestions = () => {
  const { openMenu, t } = useContext(GlobalContext);
  const handleAccordionToggle = (e) => {
    let parents = e.currentTarget.parentElement.parentElement.childNodes;
    if (e.currentTarget.parentElement.classList.contains("active")) {
      e.currentTarget.parentElement.classList.remove("active");
      return;
    }
    for (let i = 0; i < parents.length; i++) {
      if (parents[i].classList.contains("active")) {
        parents[i].classList.remove("active");
      }
    }
    e.currentTarget.parentElement.classList.add("active");
  };
  return (
    <FrequentlyAskedQuestionsWrapper className={openMenu && "opened-menu"}>
      <h2>{t("FrequentlyAskedQuestionsTitle")}</h2>
      <div className="accordion">
        <div className="accordion-card">
          <div
            className="accordion-header"
            onClick={(e) => handleAccordionToggle(e)}
          >
            <h3>{t("FrequentlyAskedQuestionsNumberOneTitle")}</h3>
            <span>
              <KeyboardArrowDown size="24" />
            </span>
          </div>
          <div className="accordion-body">
            <p>{t("FrequentlyAskedQuestionsNumberOneText")}</p>
          </div>
        </div>
        <div className="accordion-card">
          <div
            className="accordion-header"
            onClick={(e) => handleAccordionToggle(e)}
          >
            <h3>{t("FrequentlyAskedQuestionsNumberTwoTitle")}</h3>
            <span>
              <KeyboardArrowDown size="24" />
            </span>
          </div>
          <div className="accordion-body">
            <p>{t("FrequentlyAskedQuestionsNumberTwoText")}</p>
          </div>
        </div>
        <div className="accordion-card">
          <div
            className="accordion-header"
            onClick={(e) => handleAccordionToggle(e)}
          >
            <h3>{t("FrequentlyAskedQuestionsNumberThreeTitle")}</h3>
            <span>
              <KeyboardArrowDown size="24" />
            </span>
          </div>
          <div className="accordion-body">
            <p>{t("FrequentlyAskedQuestionsNumberThreeText")}</p>
          </div>
        </div>
        <div className="accordion-card">
          <div
            className="accordion-header"
            onClick={(e) => handleAccordionToggle(e)}
          >
            <h3>{t("FrequentlyAskedQuestionsNumberFourTitle")}</h3>
            <span>
              <KeyboardArrowDown size="24" />
            </span>
          </div>
          <div className="accordion-body">
            <p>{t("FrequentlyAskedQuestionsNumberFourText")}</p>
          </div>
        </div>
        <div className="accordion-card">
          <div
            className="accordion-header"
            onClick={(e) => handleAccordionToggle(e)}
          >
            <h3>{t("FrequentlyAskedQuestionsNumberFiveTitle")}</h3>
            <span>
              <KeyboardArrowDown size="24" />
            </span>
          </div>
          <div className="accordion-body">
            <p>{t("FrequentlyAskedQuestionsNumberFiveText")}</p>
          </div>
        </div>
        <div className="accordion-card">
          <div
            className="accordion-header"
            onClick={(e) => handleAccordionToggle(e)}
          >
            <h3>{t("FrequentlyAskedQuestionsNumberSixTitle")}</h3>
            <span>
              <KeyboardArrowDown size="24" />
            </span>
          </div>
          <div className="accordion-body">
            <p>{t("FrequentlyAskedQuestionsNumberSixText")}</p>
          </div>
        </div>
        <div className="accordion-card">
          <div
            className="accordion-header"
            onClick={(e) => handleAccordionToggle(e)}
          >
            <h3>{t("FrequentlyAskedQuestionsNumberSevenTitle")}</h3>
            <span>
              <KeyboardArrowDown size="24" />
            </span>
          </div>
          <div className="accordion-body">
            <p>{t("FrequentlyAskedQuestionsNumberSevenText")}</p>
          </div>
        </div>
        <div className="accordion-card">
          <div
            className="accordion-header"
            onClick={(e) => handleAccordionToggle(e)}
          >
            <h3>{t("FrequentlyAskedQuestionsNumberEightTitle")}</h3>
            <span>
              <KeyboardArrowDown size="24" />
            </span>
          </div>
          <div className="accordion-body">
            <p>{t("FrequentlyAskedQuestionsNumberEightText")}</p>
          </div>
        </div>
      </div>
    </FrequentlyAskedQuestionsWrapper>
  );
};

export default FrequentlyAskedQuestions;
