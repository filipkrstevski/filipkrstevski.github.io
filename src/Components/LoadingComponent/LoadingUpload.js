import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Consts/GlobalContext";
import Group33 from "../../img/loading/group-33.svg";
import Group19000 from "../../img/loading/group-19000.svg";
import Group19023 from "../../img/loading/group-19023.svg";
import Line276 from "../../img/loading/line-276.svg";

const LoadingUploadWrapper = styled.div`
  transition: all 0.6s ease-in;
  width: 100%;
  display: none;
  height: calc(var(--vh, 1vh) * 100);
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  .loading {
    width: 100%;
    height: 100%;
    padding: 90px 570px 145px;
    background-color: white;
    text-align: center;
    .cloud-wrapper {
      position: relative;
      margin-bottom: 130px;
      img {
        display: block;
      }
      .cloud {
        margin: 0 auto;
        position: relative;
        z-index: 1;
      }
      .line-wrapper,
      .photo {
        position: absolute;
        left: 50%;
      }
      .line-wrapper {
        bottom: 20px;
        transform: translateX(-50%);
        z-index: 3;
      }
      .line-wrapper {
        &:before {
          content: "";
          display: block;
          width: 100%;
          z-index: 2;
          height: 50px;
          background-color: #d3d8e6;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        .line {
          position: relative;
          z-index: 3;
        }
      }
      .photo {
        transform: translateX(-50%) rotate(10deg);
        top: 90px;
        z-index: 2;
        box-shadow: 0px 4px 10px #1a284d29;
        animation: photoAnimation 3s ease-in forwards;
        animation-play-state: paused;
      }
    }
    h2 {
      ${(props) => props.theme.body_semibold_40};
    }
    .laptop {
      margin-bottom: 30px;
    }
    .progress {
      height: 32px;
      border-radius: 50px;
      background-color: #000;
      margin-top: 50px;
      position: relative;

      .progress-inner {
        width: 3%;
        background-color: ${(props) => props.theme.secondary_color};
        height: 32px;
        border-radius: 50px;
        position: absolute;
        left: -0.6px;
        top: 0;
        z-index: 1;
        animation: progressAnimation 3s ease-in forwards;
        animation-play-state: paused;
      }
    }
  }
  .loading.active {
    .cloud-wrapper {
      .photo {
        animation-play-state: running;
      }
    }
    .progress {
      .progress-inner {
        animation-play-state: running;
      }
    }
  }

  @keyframes photoAnimation {
    0% {
      top: 90px;
      transform: translateX(-50%) rotate(10deg);
    }
    100% {
      top: 355px;
      transform: translateX(-50%) rotate(0);
    }
  }
  @keyframes progressAnimation {
    0% {
      width: 3%;
    }
    100% {
      width: var(--uploadImageProgress);
    }
  }

  @media (max-width: 1919px) {
    .loading {
      padding: 50px 230px;
      .cloud-wrapper {
        margin-bottom: 75px;
      }
      .progress {
        margin-top: 35px;
      }
    }

    @keyframes photoAnimation {
      0% {
        top: 90px;
        transform: translateX(-50%) rotate(10deg);
      }
      100% {
        top: 305px;
        transform: translateX(-50%) rotate(0);
      }
    }
  }

  @media (max-width: 1439px) {
    .loading {
      padding: 50px 90px;
    }
  }

  @media (max-width: 1023px) {
    .loading {
      padding: 50px 90px;
    }
  }
  @media (max-width: 767px) {
    .loading {
      padding: 150px 15px;

      .cloud-wrapper {
        .cloud {
          width: 50%;
        }
        .photo {
          width: 85px;
        }
        .line-wrapper {
          &:before {
            height: 30px;
          }
        }
      }
      .laptop {
        width: 100%;
      }
      h2 {
        font-size: 22px;
        line-height: 30px;
      }

      @keyframes photoAnimation {
        0% {
          top: 65px;
          transform: translateX(-50%) rotate(10deg);
        }
        100% {
          top: 225px;
          transform: translateX(-50%) rotate(0);
        }
      }
    }
  }
`;

const LoadingUpload = () => {
  const { openMenu, isUploaded, t } = useContext(GlobalContext);
  const [isAnimation, setIsAnimation] = useState(false);

  const handleSetIsAnimation = () => {
    setIsAnimation(true);
  };
  useEffect(() => {
    window.addEventListener("load", handleSetIsAnimation());
    handleSetIsAnimation();
    return () => {
      window.removeEventListener("load", handleSetIsAnimation());
    };
  }, []);
  return (
    <LoadingUploadWrapper
      className={(openMenu && "opened-menu") || (isUploaded && "isUploaded")}
    >
      <div className={isAnimation ? "loading active" : "loading"}>
        <div className="cloud-wrapper">
          <img src={Group33} className="cloud" />
          <div className="line-wrapper">
            <img src={Line276} className="line" />
          </div>
          <img src={Group19000} className="photo" />
        </div>
        <img src={Group19023} className="laptop" />
        <h2>{t("YourPhotoIsBeingUploaded")}</h2>
        <div className="progress">
          <div className="progress-inner"></div>
        </div>
      </div>
    </LoadingUploadWrapper>
  );
};

export default LoadingUpload;
