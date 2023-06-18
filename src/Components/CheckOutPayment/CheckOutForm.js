import React, { useEffect, useContext } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { GlobalContext } from "../../Consts/GlobalContext";
import CustomNormalProductLink from "../CustomLinkComponent/CustomNormalProductLink";
import styled from "styled-components";
import ErrorMessagesComponent from "../ErrorMessagesComponent/ErrorMessagesComponent";

const CheckOutFormWrapper = styled.div`
  form {
    > button {
      border: 0;
      background-color: transparent;
      padding: 0;
      width: 100%;
      margin-top: 15px;
    }
  }
`;

const CheckOutForm = () => {
  const { setMessagePayment, showErrorMessage } =
    useContext(GlobalContext);

  const stripe = useStripe();

  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    // TODO disable payment button, not to fire 2 times the payment

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        // return_url: window.baseurl + "/check-out/finished",
        return_url: "http://localhost:3000/check-out/finished",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      // TODO enable back payment button
     
      showErrorMessage(result.error.message);

      console.log("Problem to finish payment", result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          showErrorMessage("Payment succeeded!");
          // TODO clear the order from storage so we cannot return to payment/cart again
          // in the moment some part of it is cleared, but thats why after going to home screen and load back data from storage JSON.parse is not working..
          break;
        case "processing":
          showErrorMessage("Your payment is processing.");
          // TODO clear the order from storage so we cannot return to payment/cart again
          // remove/disable print invoice button, order is stil not finished(probably is bank transfer ect, needs more time)
          break;
        case "requires_payment_method":
          showErrorMessage(
            "Your payment was not successful, please try again."
          );
          break;
        default:
          showErrorMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  return (
    <CheckOutFormWrapper>
      <ErrorMessagesComponent />
      <form onSubmit={(e) => handleSubmit(e)}>
        <PaymentElement />
        <button type="submit">
          <CustomNormalProductLink title="Place Order" />
        </button>
      </form>
    </CheckOutFormWrapper>
  );
};

export default CheckOutForm;
