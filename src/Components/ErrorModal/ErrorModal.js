import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Consts/GlobalContext";

const ErrorModalWrapper = styled.div`
  .error-modal {
    position: absolute;
    z-index: -4;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    transition: all 0.25s ease-in-out;

    .error-modal-inner {
      background-color: #fff;
      padding: 50px;
      position: relative;
      border-radius: 25px;
      top: -101%;
      transition: all 0.6s ease-in-out;
      h3 {
        ${(props) => props.theme.body_semibold_40}
        margin-bottom:25px;
      }
      table {
        width: 100%;
        border-spacing: 0;
        text-align: center;
        td,
        th {
          border: 1px solid #d3d8e6;
          padding: 15px;
        }
        th {
          ${(props) => props.theme.body_semibold_20};
        }
        td {
          ${(props) => props.theme.body_regular_16}
          button {
            background-color: transparent;
            border: 1px solid #d3d8e6;
            padding: 5px 10px;
            border-radius: 5px;
            ${(props) => props.theme.body_regular_16};
            text-transform: uppercase;
            cursor: pointer;
            &:not(:last-child) {
              margin-right: 10px;
            }
          }
        }
        thead tr th:first-child {
          border-top-left-radius: 10px;
        }

        thead tr th:last-child {
          border-top-right-radius: 10px;
        }
        tr:last-child td:first-child {
          border-bottom-left-radius: 10px;
        }

        tr:last-child td:last-child {
          border-bottom-right-radius: 10px;
        }
      }
      .close-modal {
        position: absolute;
        top: 25px;
        right: 25px;
        width: 24px;
        height: 24px;
        cursor: pointer;
        > span {
          display: block;
          width: 100%;
          height: 2px;
          background-color: black;
          position: absolute;
          top: 11px;
          left: 0;
          &:first-child {
            transform: rotate(45deg);
          }
          &:last-child {
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
  .error-modal.active {
    z-index: 10;
    opacity: 100%;
    visibility: visible;
    .error-modal-inner {
      top: 0;
    }
  }
`;
const ErrorModal = () => {
  const { isErrorModal, setIsErrorModal, errorsArray, t } =
    useContext(GlobalContext);
  const closeModal = (e) => {
    console.log(e.target);
    if (e.target.classList.contains("error-modal")) {
      setIsErrorModal(false);
    } else if (e.currentTarget.classList.contains("close-modal")) {
      setIsErrorModal(false);
    }
  };
  return (
    <ErrorModalWrapper>
      <div
        onClick={(e) => closeModal(e)}
        className={isErrorModal ? "error-modal active" : "error-modal"}
      >
        <div className="error-modal-inner">
          <div className="close-modal" onClick={(e) => closeModal(e)}>
            <span></span>
            <span></span>
          </div>
          <h3>Errors</h3>
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Error Code</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {errorsArray &&
                errorsArray.map((el, i) => (
                  <tr key={i}>
                    <td>{el.field}</td>
                    <td>{el.errorCode}</td>
                    <td>{el.message}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </ErrorModalWrapper>
  );
};

export default ErrorModal;
