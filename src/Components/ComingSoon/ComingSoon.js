import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Consts/GlobalContext";

const ComingSoonWrapper = styled.div`
  padding: 0 375px;
  > div {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      ${(props) => props.theme.body_semibold_40};
      font-size: 76px;
      text-align: center;
      line-height: 106px;
      letter-spacing: 10px;
    }
  }
`;

const ComingSoon = () => {
  const { t } = useContext(GlobalContext);
  return (
    <ComingSoonWrapper>
      <div>
        <h1>{t("ComingSoon")}</h1>
      </div>
    </ComingSoonWrapper>
  );
};

export default ComingSoon;
