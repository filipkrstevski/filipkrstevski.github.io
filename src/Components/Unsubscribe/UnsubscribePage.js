import React, { useContext, useEffect } from "react";
import axios from "axios";
import { GlobalContext } from "../../Consts/GlobalContext";
import { useHistory } from "react-router-dom";
const UnsubscribePage = () => {
  const { bearerToken, setUnsubscribed, axiosHandler } =
    useContext(GlobalContext);
  let history = useHistory();

  useEffect(() => {
    let emailSubscribed = window.location.search.split("id")[1];

    if (emailSubscribed) {
      console.log(emailSubscribed.split("=")[1]);

      axiosHandler(
        "DELETE",
        `/api/v1/users/subscribe/${emailSubscribed.split("=")[1]}`,
        null,
        bearerToken,
        {
          onSuccess: (response) => {
            setUnsubscribed("successful");
            history.push("/");
          },
          onError: (error) => {
            setUnsubscribed("failed");
            return true;
          },
        }
      );
    }
  }, []);

  return <>Redirecting...</>;
};

export default UnsubscribePage;
