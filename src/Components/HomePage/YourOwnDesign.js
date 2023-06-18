import React, { useContext } from "react";
import styled from "styled-components";
import CustomUploadLink from "../CustomLinkComponent/CustomUploadLink";
import Group11 from "../../img/home-page/group-11.png";
import Group186 from "../../img/home-page/group-186.png";
import Group292 from "../../img/home-page/group-292.png";
import Group1230 from "../../img/home-page/group-1230.png";
import Group18824 from "../../img/home-page/group-18824.svg";
import Group18825 from "../../img/home-page/group-18825.svg";
import Group18826 from "../../img/home-page/group-18826.svg";
import Group18827 from "../../img/home-page/group-18827.svg";
import { GlobalContext } from "../../Consts/GlobalContext";

const YourOwnDesignWrapper = styled.div`
  padding: 0 300px;
  transition: all 0.6s ease-in;

  .container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    .bg-images {
      flex-basis: 33.33%;
      flex-grow: 1;
      img {
        display: block;
        width: 100%;
      }
      &:nth-child(1) {
        img {
          height: 620px;
          transform: translate(125px, 130px);
          animation: jumpImage1 5s linear infinite;
          animation-fill-mode: both;
          animation-play-state: paused;
        }
      }
      &:nth-child(2) {
        img {
          transform: translateY(-50px);
          height: 700px;
          animation: jumpImage2 5s linear infinite;
          animation-fill-mode: both;
          animation-play-state: paused;
        }
      }
      &:nth-child(3) {
        img {
          transform: translate(-100px, 100px);
          height: 600px;
          animation: jumpImage3 5s linear infinite;
          animation-fill-mode: both;
          animation-play-state: paused;
        }
      }
      &:nth-child(4) {
        img {
          margin: 0 auto;
          width: 700px;
          transform: rotate(-15deg);
          animation: jumpImage4 5s linear infinite;
          animation-fill-mode: both;
          animation-play-state: paused;
        }
      }
    }
    &:hover {
      .bg-images {
        &:nth-child(1) {
          img {
            animation-play-state: running;
          }
        }
        &:nth-child(2) {
          img {
            animation-play-state: running;
          }
        }
        &:nth-child(3) {
          img {
            animation-play-state: running;
          }
        }
        &:nth-child(4) {
          img {
            animation-play-state: running;
          }
        }
      }
    }
    .container-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      > span {
        ${(props) => props.theme.body_semibold_16};
        color: ${(props) => props.theme.secondary_color};
        text-transform: uppercase;
      }
      > h2 {
        ${(props) => props.theme.body_semibold_40};
        width: 35%;
        margin: 0 auto;
      }
      .image-container {
        display: flex;
        margin: 100px 0 140px;
        .image {
          flex-basis: 25%;
          img {
            display: block;
          }
          &:nth-child(1) {
            img {
              transform: translate(230px, 0) rotate(-20deg);
              height: 230px;
              position: relative;
              z-index: 1;
            }
          }
          &:nth-child(2) {
            img {
              width: 370px;
              height: 300px;
              transform: translate(140px, -55px);
            }
          }
          &:nth-child(3) {
            img {
              transform: translate(87px, 115px) rotate(15deg);
              height: 150px;
              position: relative;
              z-index: 1;
            }
          }
          &:nth-child(4) {
            img {
              transform: translate(-235px, -5px) rotate(25deg);
              height: 200px;
              width: 300px;
              position: relative;
              z-index: 1;
            }
          }
        }
      }
    }
  }
  @keyframes jumpImage1 {
    0% {
      transform: translate(125px, 130px);
    }
    25% {
      transform: translate(125px, 50px);
    }
    50% {
      transform: translate(125px, 70px);
    }
    75% {
      transform: translate(125px, 50px);
    }
    100% {
      transform: translate(125px, 130px);
    }
  }

  @keyframes jumpImage2 {
    0% {
      transform: translateY(-50px);
    }
    25% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    75% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-50px);
    }
  }

  @keyframes jumpImage3 {
    0% {
      transform: translate(-100px, 100px);
    }
    25% {
      transform: translate(-100px, 30px);
    }
    50% {
      transform: translate(-100px, 10px);
    }
    75% {
      transform: translate(-100px, 30px);
    }
    100% {
      transform: translate(-100px, 100px);
    }
  }
  @keyframes jumpImage4 {
    0% {
      transform: rotate(-15deg);
    }
    25% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(-10deg);
    }
    75% {
      transform: rotate(5deg);
    }
    100% {
      transform: rotate(-15deg);
    }
  }

  @media (max-width: 1919px) {
    padding: 0 150px;
  }
  @media (max-width: 1439px) {
    padding: 0 50px;
    .container {
      .container-wrapper {
        h2 {
          width: 60%;
        }
        .image-container {
          .image {
            &:nth-child(1) {
              img {
                transform: translate(135px, 0) rotate(-20deg);
                height: 170px;
              }
            }
            &:nth-child(2) {
              img {
                height: 245px;
                width: 325px;
                transform: translate(45px, -55px);
              }
            }
            &:nth-child(3) {
              img {
                transform: translate(-15px, 115px) rotate(15deg);
                height: 115px;
              }
            }
            &:nth-child(4) {
              img {
                transform: translate(-190px, -5px) rotate(25deg);
                height: 170px;
                width: 255px;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 1023px) {
    padding: 0 20px;
    .container {
      .bg-images {
        flex-basis: 33.33%;
        flex-grow: 1;
        img {
          display: block;
          width: 100%;
        }
        &:nth-child(1) {
          img {
            transform: translate(40px, 130px);
          }
        }
        &:nth-child(2) {
          img {
            height: 600px;
          }
        }
        &:nth-child(3) {
          img {
            transform: translate(-30px, 100px);
          }
        }
        &:nth-child(4) {
          // img {
          //   margin: 0 auto;
          //   width: 700px;
          //   transform: rotate(-15deg);
          //   animation: jumpImage4 5s linear infinite;
          //   animation-fill-mode: both;
          //   animation-play-state: paused;
          // }
        }
      }
      .container-wrapper {
        h2 {
          font-size: 30px;
          line-height: 42px;
        }
        .image-container {
          .image {
            &:nth-child(1) {
              img {
                transform: translate(45px, 0) rotate(-20deg);
              }
            }
            &:nth-child(2) {
              img {
                transform: translate(-35px, -55px);
              }
            }
            &:nth-child(3) {
              img {
                transform: translate(-80px, 115px) rotate(15deg);
              }
            }
            &:nth-child(4) {
              img {
                transform: translate(-235px, -5px) rotate(25deg);
              }
            }
          }
        }
      }
    }

    @keyframes jumpImage1 {
      0% {
        transform: translate(40px, 130px);
      }
      25% {
        transform: translate(40px, 50px);
      }
      50% {
        transform: translate(40px, 70px);
      }
      75% {
        transform: translate(40px, 50px);
      }
      100% {
        transform: translate(40px, 130px);
      }
    }

    @keyframes jumpImage3 {
      0% {
        transform: translate(-30px, 100px);
      }
      25% {
        transform: translate(-30px, 30px);
      }
      50% {
        transform: translate(-30px, 10px);
      }
      75% {
        transform: translate(-30px, 30px);
      }
      100% {
        transform: translate(-30px, 100px);
      }
    }
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const YourOwnDesign = () => {
  const { openMenu, t } = useContext(GlobalContext);

  return (
    <YourOwnDesignWrapper className={openMenu && "opened-menu"}>
      <div className="container">
        <div className="bg-images">
          <img src={Group18826} />
        </div>
        <div className="bg-images">
          <img src={Group18825} />
        </div>
        <div className="bg-images">
          <img src={Group18824} />
        </div>
        <div className="bg-images">
          <img src={Group18827} />
        </div>
        <div className="container-wrapper">
          <span>{t("new")}</span>
          <h2>{t("YourOwnDesignTitle")}</h2>
          <div className="image-container">
            <div className="image">
              <img src={Group292} />
            </div>
            <div className="image">
              <img src={Group1230} />
            </div>
            <div className="image">
              <img src={Group186} />
            </div>
            <div className="image">
              <img src={Group11} />
            </div>
          </div>
          <CustomUploadLink title="upload your design" to="/design" />
        </div>
      </div>
    </YourOwnDesignWrapper>
  );
};

export default YourOwnDesign;
