import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Consts/GlobalContext";
import CustomNormalProductLink from "../CustomLinkComponent/CustomNormalProductLink";

const OrderModalWrapper = styled.div`
  .order-modal {
    position: fixed;
    top: -102%;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: top 0.6s ease-in-out, opacity 0.4s linear;
    .order-modal-container {
      background-color: white;
      height: auto;
      padding: 50px;
      border-radius: 10px;
      width: 465px;
      position: relative;
      .close-modal {
        position: absolute;
        top: 50px;
        right: 50px;
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
      .order-modal-group {
        h4 {
          ${(props) => props.theme.body_semibold_20};
          margin-bottom: 7px;
        }
        p {
          ${(props) => props.theme.body_regular_16}
        }
        select {
          padding-top: 15px;
          padding-bottom: 15px;
        }
        &:not(:last-child) {
          margin-bottom: 25px;
        }
      }
    }
  }
  .order-modal.active {
    top: 0;
    opacity: 1;
  }
`;

const OrderModal = ({ orderid }) => {
  const {
    openModal,
    setOpenModal,
    userOrders,
    showErrorMessage,
    t,
    axiosHandler,
  } = useContext(GlobalContext);

  const [selectedOrder, setSelectedOrder] = useState();

  const handleCloseOrderModal = (e) => {
    e.stopPropagation();
    if (e.target.classList.contains("order-modal")) {
      setOpenModal(false);
    }
  };

  const handleChangeOrderStatus = (e) => {
    setSelectedOrder({
      ...selectedOrder,
      status: e.target.value.toUpperCase(),
    });
  };

  const handleUpdateOrderStatus = (e) => {
    e.preventDefault();
    console.log(selectedOrder.status);
    let status = userOrders.content.find((el) => el.id === orderid);

    if (status.status !== selectedOrder.status) {
      axiosHandler(
        "PATCH",
        `/api/v1/orders/${orderid}`,
        {
          id: orderid,
          status: selectedOrder.status,
        },
        window.constants.auth.token,
        {
          onSuccess: (response) => {
            setOpenModal(false);
            window.location.reload();
          },
          onError: (error) => {
            return true;
          },
        }
      );
    } else {
      showErrorMessage("Must set different order status");
    }
  };
  const closeModal = (e) => {
    setOpenModal(false);
  };

  useEffect(() => {
    console.log(orderid);
    if (userOrders) {
      let order = userOrders.content.find((el) => el.id === orderid);
      setSelectedOrder(order);
    }
  }, [orderid]);
  return (
    <OrderModalWrapper>
      <div
        className={openModal ? "order-modal active" : "order-modal"}
        onClick={(e) => handleCloseOrderModal(e)}
      >
        <div className="order-modal-container">
          <span className="close-modal" onClick={(e) => closeModal(e)}>
            <span></span>
            <span></span>
          </span>
          <div className="order-modal-group">
            <h4>{t("OrderID")}</h4>
            <p>{selectedOrder && selectedOrder.id}</p>
          </div>
          <div className="order-modal-group">
            <h4>Email</h4>
            <p>{selectedOrder && selectedOrder.email}</p>
          </div>
          {selectedOrder &&
            selectedOrder.items &&
            selectedOrder.items.map((el, i) => (
              <div className="order-modal-group" key={i}>
                <h4>{t("Item")}</h4>
                <p>
                  {t("Format")}: {el.desc && el.desc.format}
                </p>
                <p>
                  {t("Border")}: {el.desc && el.desc.border.type}
                </p>
                <p>
                  {t("Hanging")}: {el.desc && el.desc.hanging.type}
                </p>
                <p>
                  {t("FRAME")}: {el.desc && el.desc.frame}
                </p>
              </div>
            ))}
          <div className="order-modal-group">
            <h4>{t("OrderStatus")}</h4>
            <select
              value={selectedOrder && selectedOrder.status.toLowerCase()}
              onChange={(e) => handleChangeOrderStatus(e)}
            >
              <option value="open">{t("OPEN")}</option>
              <option value="paying">{t("PAYING")}</option>
              <option value="paid">{t("PAID")}</option>
              <option value="canceled">{t("CANCELED")}</option>
              <option value="dispatched">{t("DISPATCHED")}</option>
              <option value="closed">{t("CLOSED")}</option>
            </select>
          </div>
          <div className="order-modal-group">
            <div onClick={(e) => handleUpdateOrderStatus(e)}>
              <CustomNormalProductLink title="Update" />
            </div>
          </div>
        </div>
      </div>
    </OrderModalWrapper>
  );
};

export default OrderModal;
