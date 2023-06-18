import React, { useContext } from "react";
import styled from "styled-components";
import BgImage from "../../img/all-products/bg-image.png";
import { GlobalContext } from "../../Consts/GlobalContext";
const HomePageIntroWrapper = styled.div`
  transition: all 0.6s ease-in;
  padding: 45px 375px 0;
  .intro {
    background-image: url(${BgImage});
    background-repeat: no-repeat;
    padding: 80px;
    .intro-text {
      h2 {
        ${(props) => props.theme.body_semibold_40};
        width: 30%;
      }
      p {
        ${(props) => props.theme.body_regular_20};
        color: #313540;
        width: 45%;
      }
    }
  }

  @media(max-width:1919px) {
    padding 45px 150px 0;
  }
  @media(max-width:1439px) {
    padding 45px 50px 0;
    .intro{
      .intro-text{
        h2{
          width:45%;
        }
        p{
          width:55%;
        }
      }
    }
  }
  @media(max-width:1023px){
    padding 30px 20px 0;
    .intro{
      background-position:35% 0%;
      .intro-text{
        h2{
          width:75%;
        }
        p{
          width:70%;
        }
      }
    }
  }

  @media(max-width:767px){
    padding 80px 20px 0;

    .intro{
      background-position:0% 0%;

      padding: 40px;
      .intro-text{
        h2{
          width:100%;
          font-size:30px;
          line-height:42px;
        }
        p{
          width:100%;
          font-size:18px;
          line-height:25px;
        }
      }
    }
  }
`;

const HomePageIntro = () => {
  const { openMenu, t } = useContext(GlobalContext);

  return (
    <HomePageIntroWrapper className={openMenu && "opened-menu"}>
      <div className="intro">
        <div className="intro-text">
          <h2>{t("AllProductsPageIntroTitle")}</h2>
          <p>{t("AllProductsPageIntroText")}</p>
        </div>
      </div>
    </HomePageIntroWrapper>
  );
};

export default HomePageIntro;
