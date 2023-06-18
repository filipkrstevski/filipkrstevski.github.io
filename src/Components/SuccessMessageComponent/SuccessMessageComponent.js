import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Consts/GlobalContext";
import { CheckCircle } from "@styled-icons/bootstrap/CheckCircle";

const SuccessMessageComponentWrapper = styled.div`
  .email-confirmed {
    position: fixed;
    bottom: -120px;
    right: 20px;
    opacity: 0;
    padding: 15px 40px;
    border-radius: 10px;
    background-color: #4d9a51;
    color: white;
    ${(props) => props.theme.body_semibold_18};
    z-index: 100;
    transition: all 1s ease-in-out;
    display: flex;
    align-items: center;
    p {
      margin-left: 20px;
    }
  }
  .email-confirmed.active {
    opacity: 1;
    bottom: 10px;
  }
`;

const SuccessMessageComponent = () => {
  const { isSuccess, successMessage, t, setIsSuccess } =
    useContext(GlobalContext);

  useEffect(() => {
    setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
  }, [successMessage]);

  return (
    <SuccessMessageComponentWrapper>
      <div className={isSuccess ? "email-confirmed active" : "email-confirmed"}>
        <CheckCircle size="32" />
        <p>{t(successMessage)}</p>
      </div>
    </SuccessMessageComponentWrapper>
  );
};

export default SuccessMessageComponent;
