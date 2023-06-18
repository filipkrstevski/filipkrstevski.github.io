import React, { useContext } from "react";
import styled from "styled-components";
import { ErrorCircle } from "@styled-icons/fluentui-system-regular/ErrorCircle";
import { GlobalContext } from "../../Consts/GlobalContext";

const ErrorMessagesComponentWrapper = styled.div`
  .errors {
    position: fixed;
    bottom: -120px;
    right: 20px;
    opacity: 0;
    padding: 20px 50px;
    border-radius: 10px;
    background-color: #d74545;
    color: white;
    ${(props) => props.theme.body_semibold_18};
    z-index: 100;
    transition: all 1s ease-in-out;
    display: flex;
    align-items: center;
  }
  .errors.active {
    opacity: 1;
    bottom: 20px;
  }
`;

const ErrorMessagesComponent = () => {
  const { isError, errorMessage,t } = useContext(GlobalContext);
  return (
    <ErrorMessagesComponentWrapper>
      <div className={isError ? "errors active" : "errors"}>
        <ErrorCircle size="32" />
        <p>{t(errorMessage)}</p>
      </div>
    </ErrorMessagesComponentWrapper>
  );
};

export default ErrorMessagesComponent;
