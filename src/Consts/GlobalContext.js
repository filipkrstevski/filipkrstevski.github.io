import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import TranslationsDe from "../Components/Translations/TranslationsDe";
import TranslationsEn from "../Components/Translations/TranslationsEn";
const Context = createContext();

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: TranslationsEn },
    de: { translation: TranslationsDe },
  },
  lng: "en",
  fallBackLng: "en",
  interpolation: { escapeValue: false },
});

const Provider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [loginToken, setLoginToken] = useState();
  const [userInfo, setUserInfo] = useState();
  const [productsList, setProductsList] = useState();
  const [localFile, setLocalFile] = useState();
  const [fileUpload, setFileUpload] = useState();
  const [productObject, setProductObject] = useState({
    id: uuid(),
  });
  const [itemsProduct, setItemsProduct] = useState();
  const [isUploaded, setIsUploaded] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [shippingPrice, setShippingPrice] = useState();
  const [billingAddress, setBillingAddress] = useState();
  const [deliveryAddress, setDeliveryAddress] = useState();
  const [fileFormats, setFileFormats] = useState();
  const [imageFormats, setImageFormats] = useState();
  const [whichAddress, setWhichAddress] = useState("sameBilling");
  const [messagePayment, setMessagePayment] = useState("");
  const [isMessagePayment, setIsMessagePayment] = useState(false);
  const [shippingTotal, setShippingTotal] = useState(0);
  const [shippingCountries, setShippingCountries] = useState();
  const [timezoneOfUser, setTimezoneOfUser] = useState();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [userLogin, setUserLogin] = useState({});
  const [userOrders, setUserOrders] = useState();
  const [selectAddNewAddress, setSelectAddNewAddress] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const [openModal, setOpenModal] = useState(false);
  const [reviews, setReviews] = useState();
  const [allReviews, setAllReviews] = useState();
  const [totalReviewScore, setTotalReviewScore] = useState(0);
  const [passwordReset, setPasswordReset] = useState();
  const [unsubscribed, setUnsubscribed] = useState(false);
  const [zoomSlider, setZoomSlider] = useState("100");
  const [isErrorModal, setIsErrorModal] = useState(false);
  const [errorsArray, setErrorsArray] = useState();
  const [jwtToken, setJwtToken] = useState(process.env.REACT_APP_JWT_TOKEN);
  let [crop, setCrop] = useState({ x: 0, y: 0 });

  const { t } = useTranslation();

  let history = useHistory();

  const changeLang = (e) => {
    i18n.changeLanguage(e.currentTarget.getAttribute("name"));
    localStorage.setItem("language", e.currentTarget.getAttribute("name"));
    // e.currentTarget.parentElement.parentElement.classList.remove("active");
    closeLangMenu(e.currentTarget.parentElement.parentElement);
  };
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  const openLangMenu = (e) => {
    e.currentTarget.classList.add("active");
  };
  const closeLangMenu = (target) => {
    target.classList.remove("active");
  };
  const bearerToken =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIxODE5ZDI2NS0xZWMyLTRkYzAtOGZmOS0wNTQ0YTZhMGI5YjEiLCJpc3MiOiJodHRwczovL215Zm90by5hcnQvYXV0aCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAiLCJleHAiOjE2NzkzOTkzMTUsImlhdCI6MTY0Nzg2MzMxNSwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJuYW1lIGxhc3RuYW1lIiwiZ2l2ZW5fbmFtZSI6Im5hbWUiLCJmYW1pbHlfbmFtZSI6Imxhc3RuYW1lIiwiZW1haWwiOiJlbWFpbCIsInJlc291cmNlX2FjY2VzcyI6eyJ3ZWIiOnsicm9sZXMiOlsiU0hPUFBFUiJdfX0sIm9yaWdpbiI6IndlYiIsInByZWZlcnJlZF91c2VybmFtZSI6Im5hbWVfbGFzdG5hbWUifQ.GsUl7nDTLSXdMgMCcug_Sz-3-sxBp_dh99iKI_3Nx6Ukc62aS2gLVnZ0SMuL0qoV6y5o9B9f93V-il0NmiFMYZQW9OIeSV9JheVCdlP0HGp-UmgP4W8Ml2jN7sd8ZrfaK5g-DHeQdEvzvMNPAIp6QwU2ebgiDqYJ27XF7ZHclA-6JtNz3i9CFdeQu6HWw08ViIPAY56wcXtjn1MAoxhH8IC3LJsbyaqCTh6y47pTitLhwSg3z2bwNf4M5Wdli5S0zmDX-_DCliE0IWv_UgDObwYwzpLaG16N5OWZaza0x0DkfyAWnQ9KobqQa0Z5YMIaec0xvq2t0HWIUQzClp1lOw";

  const axiosHandler = (method, url, payloadData, token, callback) => {
    axios({
      method: method,
      url: `${process.env.REACT_APP_API}${url}`,
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `JWT ${token}`,
      },
      data: payloadData,
    })
      .then((response) => {
        callback.onSuccess(response);
      })
      .catch((error) => {
        // ako povokuvacot ne vrati true, odnosno ne ja sreduva sam error logikata odime na globalna proverka

        if (callback.onError && callback.onError(error)) {
          console.log(error.response, "onError response");
          if (error.response) {
            if (error.response.status == 401) {
              if (error.response.data.errors)
                error.response.data.errors.forEach((obj) => {
                  if (
                    obj.errorCode === "token.invalid" ||
                    obj.errorCode === "token.expired"
                  ) {
                    // clearUserData();
                    // iscisti se za userot cockies ect i eventualno odnesi na login
                    return;
                  }
                });
            }

            if (
              error.response.status === 422 ||
              error.response.status === 404
            ) {
              if (error.response.data.errors) {
                // creiraj eden modal na koj ke se prikazat site errors vo vid na lista,
                // sekoj error koj se praka od Be Ima ista struktura
                // {field, errorCode, message} pa edna tabela so site ovie errors za user da gi vidi kako modal
                // na centar od screen so closable button..
                console.log(error.response.data.errors);
                setErrorsArray(error.response.data.errors);
                setIsErrorModal(true);
              }
            }
          }
        }
      });
  };

  const handlingShippingDestinationChanges = (target) => {
    if (productObject) {
      let shippingDestination = shippingCountries.find(
        (country) => country.id === target
      );
      setShippingPrice(shippingDestination);
      productObject.items.map((el) => {
        axiosHandler(
          "POST",
          `/file/${el.fileId}/${shippingDestination.id}/${el.productId}`,
          undefined,
          jwtToken,
          {
            onSuccess: (response) => {
              localStorage.setItem(
                "imageFormats",
                JSON.stringify(response.data)
              );
              let newShippingPrice = response.data.find(
                (format) => format.name === el.format
              );
              console.log(newShippingPrice);
              el.shippingPrice = newShippingPrice.shippingPrice * el.quantity;

              setProductObject({
                ...productObject,
                countryId: shippingDestination.id,
              });
            },
          }
        );
      });
      setProductObject({
        ...productObject,
        countryId: target.value,
      });
      localStorage.setItem(
        "shippingDestination",
        JSON.stringify(shippingDestination)
      );
    }
  };

  //file upload with predifined items values

  const handleGetImage = (id) => {
    axiosHandler("GET", `/file/${id}`, undefined, jwtToken, {
      onSuccess: (response) => {
        console.log(response);
        localStorage.setItem("fileStorage", `${response.data.dataURI}`);

        setFileUpload(response.data.dataURI);
      },
    });
  };

  const handleFileUpload = (e, fileByProductId) => {
    console.log(fileByProductId);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    localStorage.setItem("fileType", e.target.files[0].type);
    console.log([...formData]);
    axiosHandler("POST", "/file/upload", formData, jwtToken, {
      onSuccess: (response) => {
        console.log(response);
        let imageId = response.data.id;
        let shippingDestination = JSON.parse(
          localStorage.getItem("shippingDestination")
        );

        handleGetImage(response.data.id);

        axiosHandler(
          "POST",
          `/file/${imageId}/${shippingDestination.id}/${fileByProductId}`,

          undefined,
          jwtToken,
          {
            onSuccess: (response) => {
              console.log(response);
              let itemsProductObj = {};
              let price;
              if (fileByProductId) {
                price = productsList.find(
                  (product) => product.id === fileByProductId
                );
              } else {
                price = productsList.find((product, i) => i === 0);
              }

              itemsProductObj = {
                fileId: imageId,
                price:
                  price.priceFrom -
                  price.priceFrom * (price.discountPercent / 100),
                productId: price.id,
                id: uuid(),
                format: response.data[0].name,
                border: {
                  type: "2cm",
                  price: 0,
                },
                hanging: {
                  type: "no-hanging",
                  price: 0,
                },
                desc: {
                  format: response.data[0].name,
                  border: {
                    type: "2cm",
                    price: 0,
                  },
                  hanging: {
                    type: "no-hanging",
                    price: 0,
                  },
                  frame: "dragged",
                },
                frame: "dragged",
                quantity: 1,
              };

              localStorage.setItem(
                "itemsProduct",
                JSON.stringify(itemsProductObj)
              );
              setTimeout(() => {
                setIsUploaded(false);
                window.location.pathname = "/design-products";
              }, 3100);
            },
            onError: (error) => {
              console.log(error, "error getting file formats");
              return true;
            },
          }
        );
      },
      onError: (error) => {
        console.log(error, "error uploading file");
        return true;
      },
    });
  };

  const getUserData = () => {
    if (cookies && cookies.isLoggedIn) {
      setJwtToken(cookies.isLoggedIn.token);

      axiosHandler("GET", "/user/me", undefined, cookies.isLoggedIn.token, {
        onSuccess: (response) => {
          setUserInfo(response.data);
        },
      });
    }
  };

  const handleUpdateUserAddress = (changeAddress) => {
    axiosHandler(
      "PATCH",
      `/user/${userInfo.id}`,

      changeAddress,
      jwtToken,
      {
        onSuccess: (response) => {
          getUserData();
          if (window.location.pathname === "/check-out/address") {
            setSelectAddNewAddress(false);
          } else if (window.location.pathname === "/dashboard") {
            window.location.reload();
          }
        },
        onError: (error) => {
          return true;
        },
      }
    );
  };

  useEffect(() => {
    getUserData();
    getAllReviews();

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });

    if (localStorage.getItem("language")) {
      i18n.changeLanguage(localStorage.getItem("language"));
    }

    if (localStorage.getItem("order")) {
      let orderParsed = JSON.parse(localStorage.getItem("order"));
      setProductObject(orderParsed);
    }
    if (localStorage.getItem("imageFormats")) {
      setImageFormats(JSON.parse(localStorage.getItem("imageFormats")));
    }

    if (localStorage.getItem("shippingDestination")) {
      setShippingPrice(JSON.parse(localStorage.getItem("shippingDestination")));
    }

    //
    if (localStorage.getItem("whichAddress")) {
      setWhichAddress(localStorage.getItem("whichAddress"));
    }
    console.log(jwtToken);
    axiosHandler("GET", `/products`, null, jwtToken, {
      onSuccess: (response) => {
        console.log(response.data, "reseponse get products");
        setProductsList(response.data.content);
      },
      onError: (error) => {
        return true;
      },
    });

    if (localStorage.getItem("shippingDestination")) {
      setShippingPrice(JSON.parse(localStorage.getItem("shippingDestination")));
    } else {
      axiosHandler(
        "GET",
        `/countries`,

        null,
        jwtToken,
        {
          onSuccess: (response) => {
            // if (
            //   response.data == null ||
            //   response.data.content == null ||
            //   response.data.content.length == 0
            // ) {
            //   console.error("Countries empty from BE");
            //   return;
            // }

            localStorage.setItem("countries", JSON.stringify(response.data));
            let shippingCountries = response.data;

            axios({
              method: "POST",
              url: "https://ipinfo.io?token=7aca66b652ae07",
            })
              .then((response) => {
                console.log("find browser country response", response);
                console.log("BE shipping countries", shippingCountries);
                let shippingDestination = shippingCountries.find(
                  (country) =>
                    country.alpha2.toLowerCase() ===
                    response.data.data.country.toLowerCase()
                );
                console.log(shippingDestination);
                setShippingPrice(shippingDestination);
                localStorage.setItem(
                  "shippingDestination",
                  JSON.stringify(shippingDestination)
                );
              })
              .catch((err) => {
                let shippingDestination =
                  shippingCountries && shippingCountries[0];
                setShippingPrice(shippingDestination);
                localStorage.setItem(
                  "shippingDestination",
                  JSON.stringify(shippingDestination)
                );
              });
          },
          onError: (error) => {
            console.error(
              "Problem to find browser country location, we set first country as delivery",
              error.response
            );
            // showErrorMessage(error.response.data.errors[0].message);
            return true;
          },
        }
      );
    }

    if (localStorage.getItem("countries")) {
      setShippingCountries(JSON.parse(localStorage.getItem("countries")));
    }
    if (localStorage.getItem("shippingTotal")) {
      setShippingTotal(localStorage.getItem("shippingTotal"));
    }
  }, []);

  useEffect(() => {
    let shippingDestTemp;
    let tempProductObject;
    if (localStorage.getItem("shippingDestination")) {
      shippingDestTemp = JSON.parse(
        localStorage.getItem("shippingDestination")
      );

      //
      setShippingPrice(shippingDestTemp);
      shippingDestTemp = {
        ...shippingDestTemp,
        countryId: shippingDestTemp.id,
      };
      localStorage.setItem(
        "shippingDestination",
        JSON.stringify(shippingDestTemp)
      );
      tempProductObject = {
        ...productObject,
        countryId: shippingDestTemp.id,
      };
      localStorage.setItem("order", JSON.stringify(tempProductObject));
    } else {
      if (productObject && productObject.length !== undefined) {
        localStorage.setItem("order", JSON.stringify(productObject));
      }
    }
    if (productObject && productObject.items) {
      let total = productObject.items.reduce(
        (accumulator, current) => accumulator + current.shippingPrice,
        0
      );
      console.log(total);
      setShippingTotal(total);
      localStorage.setItem("shippingTotal", total);
    }
  }, [productObject]);
  useEffect(() => {
    if (itemsProduct && Object.keys(itemsProduct).length > 0) {
      localStorage.setItem("itemsProduct", JSON.stringify(itemsProduct));
    }
  }, [itemsProduct]);
  useEffect(() => {
    // type of is string and value is "undefined", strange
    let itemsProduct = localStorage.getItem("itemsProduct");
    if (itemsProduct && itemsProduct !== "{}" && itemsProduct !== "undefined") {
      console.log("itemsProductFromStorage: ", itemsProduct);
      setItemsProduct(JSON.parse(itemsProduct));
    }
  }, [localStorage.getItem("itemsProduct")]);
  useEffect(() => {
    setShippingTotal(localStorage.getItem("shippingTotal"));
  }, [localStorage.getItem("shippingTotal")]);

  useEffect(() => {
    if (userInfo) {
      let userCountry;
      if (shippingCountries) {
        if (userInfo.deliveryAddresses) {
        } else if (userInfo.address) {
          userCountry = shippingCountries.find(
            (el) => el.name === userInfo.address.country
          );
          console.log(userCountry);
          setShippingPrice(userCountry);
          localStorage.setItem(
            "shippingDestination",
            JSON.stringify(userCountry)
          );
        }
      }
      if (productObject && productObject.items && userCountry) {
        productObject.items.map((el) => {
          axios({
            method: "POST",
            url: `/file/${el.fileId}/${userCountry.id}/${el.productId}`,
            headers: {
              "content-type": "application/json",
              Accept: "application/json",
              Authorization: jwtToken,
            },
          }).then((response) => {
            console.log(response);
            localStorage.setItem("imageFormats", JSON.stringify(response.data));
            let newShippingPrice = response.data.formats.find(
              (format) => format.name === el.format
            );
            console.log(newShippingPrice);
            el.shippingPrice = newShippingPrice.shippingPrice * el.quantity;

            setProductObject({
              ...productObject,
              countryId: userCountry.id,
            });
          });
        });
      }
    } else {
    }
  }, [userInfo]);

  useEffect(() => {
    if (whichAddress === "sameBilling") {
      if (billingAddress && shippingPrice && shippingCountries) {
        if (billingAddress.country !== shippingPrice.country) {
          console.log(true);
          let countryTemp = shippingCountries.find(
            (el) =>
              el.name.toLowerCase() === billingAddress.country.toLowerCase()
          );
          console.log(countryTemp);
          setShippingPrice(countryTemp);
        }
      }
    } else {
      if (deliveryAddress && shippingPrice && shippingCountries) {
        if (deliveryAddress.country !== shippingPrice.country) {
          let countryTemp = shippingCountries.find(
            (el) =>
              el.name.toLowerCase() === deliveryAddress.country.toLowerCase()
          );
          setShippingPrice(countryTemp);
        }
      }
    }
  }, [billingAddress, deliveryAddress]);

  const handleUserLoginChange = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  };

  //login with email/pass inputs
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    axiosHandler(
      "POST",
      `/user/login`,

      userLogin,
      jwtToken,
      {
        onSuccess: (response) => {
          console.log(response, "axios handler response");
          setCookie("isLoggedIn", response.data, { maxAge: 86400 });
          setUserInfo(response.data);
          if (response.status === 200) {
            // axiosHandler("GET", `/api/v1/users/me`, null, bearerToken, {
            //   onSuccess: (response) => {
            //     let data = response.data;
            //     window.constants = {
            //       ...window.constants,
            //       userInfo: data,
            //     };

            //     localStorage.setItem("userCreds", userLogin.email);
            setTimeout(() => {
              // if (window.location.pathname === "/check-out/choice") {
              //   // history.push("/check-out/address");
              //   window.location.pathname = "/check-out/address";
              // } else {
              //   window.location.pathname = "/dashboard";
              // }
            }, 1000);
            //   },
            // });

            setUserLogin({
              email: "",
              password: "",
            });
          }
        },
        onError: (error) => {
          console.log(error);
          return true;
        },
      }
    );
  };
  const showErrorMessage = (string) => {
    setErrorMessage(string);
    setIsError(true);
    setTimeout(() => {
      setIsError(false);
    }, 5000);
  };

  //login with outsiderefs
  const responseSocialMediaLogins = (response) => {
    console.log(response);
    // let userResponseId = response.userID || response.googleId;
    // let userResponseEmail =
    //   response.email || (response.profileObj && response.profileObj.email);
    // console.log(userResponseId);
    // console.log(userResponseEmail);
    // let userLogin = {
    //   person: {
    //     firstName:
    //       (response.profileObj && response.profileObj.familyName) ||
    //       response.name.split(" ")[0],
    //     lastName:
    //       (response.profileObj && response.profileObj.givenName) ||
    //       response.name.split(" ")[1],
    //     birthdate: new Date().toISOString(),
    //     gender: "MALE",
    //   },
    //   email: userResponseEmail,
    //   outsideRefs: [userResponseId],
    //   language: "GERMAN",
    //   verified: true,
    //   timezone: timezoneOfUser,
    //   roles: ["SHOPPER"],
    //   termsAndConditionsAccepted: true,
    //   phone: {
    //     phoneNr: "",
    //   },
    // };

    // axiosHandler(
    //   "POST",
    //   `/api/v1/auth/reflogin?email=${userResponseEmail}&ref=${userResponseId}`,
    //   null,
    //   jwtToken,
    //   {
    //     onSuccess: (response) => {
    //       setLoginToken(response.data);
    //       setCookie("loginToken", response.data, { maxAge: 86400 });
    //       if (response.status === 200) {
    //         axiosHandler("GET", `/api/v1/users/me`, null, response.data, {
    //           onSuccess: (response) => {
    //             let data = response.data;
    //             setUserInfo(data);
    //             setCookie("isLoggedin", true, { maxAge: 86400 });
    //             console.log(response.data);
    //             setTimeout(() => {
    //               if (window.location.pathname === "/check-out/choice") {
    //                 window.location.pathname = "/check-out/address";
    //               } else {
    //                 window.location.pathname = "/dashboard";
    //               }
    //             }, 1000);
    //           },
    //           onError: (error) => {
    //             return true;
    //           },
    //         });
    //       }
    //     },
    //     onError: (error) => {
    //       if (error.response.status === 404) {
    //         if (error.response.data.errors[0].message.includes("outside ref")) {
    //           axiosHandler("POST", `/api/v1/users`, userLogin, jwtToken, {
    //             onSuccess: (response) => {
    //               setCookie("loginToken", response.data, { maxAge: 86400 });

    //               axiosHandler("GET", `/api/v1/users/me`, null, response.data, {
    //                 onSuccess: (response) => {
    //                   let data = response.data;
    //                   setUserInfo(data);
    //                   setCookie("isLoggedin", true, { maxAge: 86400 });
    //                   setTimeout(() => {
    //                     console.log(response.data);
    //                     if (window.location.pathname === "/check-out/choice") {
    //                       window.location.pathname = "/check-out/address";
    //                     } else {
    //                       window.location.pathname = "/dashboard";
    //                     }
    //                   }, 1000);
    //                 },
    //                 onError: (error) => {
    //                   return true;
    //                 },
    //               });
    //             },
    //             onError: (error) => {
    //               return true;
    //             },
    //           });
    //         }
    //       }
    //       return true;
    //     },
    //   }
    // );
  };

  const getAllReviews = () => {
    axiosHandler("GET", "/reviews", undefined, jwtToken, {
      onSuccess: (response) => {
        console.log(response);
        setAllReviews(response.data.content);
      },
    });
  };

  useEffect(() => {
    if (allReviews) {
      let score = 0;
      allReviews.map((el) => (score = score + parseInt(el.score)));
      setTotalReviewScore(score / allReviews.length);
    }
  }, [allReviews]);

  const handlingPagingComponentCalls = (
    path,
    setObject,
    pageNumber = 0,
    pageSize,
    setPaginationNumbers
  ) => {
    if (jwtToken) {
      const options = pageSize
        ? {
            sorting: [{ field: "created", dir: "DESC" }],
            paging: { page: pageNumber, size: pageSize },
          }
        : {
            sorting: [{ field: "created", dir: "DESC" }],
          };

      axiosHandler("POST", `${path}`, options, jwtToken, {
        onSuccess: (response) => {
          setObject(response.data);
          let start =
            Math.floor(response.data.number / response.data.size) *
            response.data.size;
          let newArr;
          if (
            Math.floor(response.data.totalPages / response.data.size) *
              response.data.size ===
            response.data.number
          ) {
            newArr = new Array(
              Math.floor(
                (response.data.totalElements - response.data.pageable.offset) /
                  response.data.size
              ) + 1
            )
              .fill()
              .map((_, idx) => start + idx + 1);
            setPaginationNumbers(newArr);
          } else if (
            Math.floor(response.data.totalPages / response.data.size) *
              response.data.size >
            response.data.number
          ) {
            newArr = new Array(response.data.size)
              .fill()
              .map((_, idx) => start + idx + 1);
            setPaginationNumbers(newArr);
          }
        },
        onError: (error) => {
          return true;
        },
      });
    }
  };

  // useEffect(() => {
  //   handlingPagingComponentCalls(`/api/v1/reviews/search`, setAllReviews, 0, 0);
  // }, [jwtToken]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getDateDiffrences = (el) => {
    if (el) {
      let months = parseInt(
        (new Date().getTime() - new Date(el.dateCreated).getTime()) /
          (1000 * 60 * 60 * 24 * 7 * 4)
      );
      let weeks = parseInt(
        (new Date().getTime() - new Date(el.dateCreated).getTime()) /
          (1000 * 60 * 60 * 24 * 7)
      );
      let days = parseInt(
        (new Date().getTime() - new Date(el.dateCreated).getTime()) /
          (1000 * 60 * 60 * 24)
      );
      let hours = parseInt(
        (new Date().getTime() - new Date(el.dateCreated).getTime()) /
          (1000 * 60 * 60)
      );
      let minutes = parseInt(
        (new Date().getTime() - new Date(el.dateCreated).getTime()) /
          (1000 * 60)
      );

      if (days === 0) {
        if (minutes >= 60) {
          if (hours === 1) {
            return `${hours} hour ago`;
          } else {
            return `${hours} hours ago`;
          }
        } else {
          if (minutes === 1) {
            return `${minutes} min ago`;
          } else {
            return `${minutes} mins ago`;
          }
        }
      } else if (days >= 1 && days <= 6) {
        if (days === 1) {
          return `${days} day ago`;
        } else {
          return `${days} days ago`;
        }
      } else if (weeks <= 4) {
        if (weeks === 1) {
          return `${weeks} week ago`;
        } else {
          return `${weeks} weeks ago`;
        }
      } else if (months <= 12) {
        if (months === 1) {
          return `${months} month ago`;
        } else {
          return `${months} months ago`;
        }
      } else {
        return `${parseInt(
          new Date(el.dateCreated).toLocaleString("en-US", {
            month: "numeric",
            year: "2-digit",
            day: "numeric",
          })
        )}`;
      }
    }
  };

  useEffect(() => {
    if (unsubscribed === "successful") {
      console.log("success");
      setUnsubscribed(false);
      setIsSuccess(true);
      setSuccessMessage("UnsubscribedSuccessful");
    } else if (unsubscribed === "failed") {
      console.log("error");
      setUnsubscribed(false);
      setIsError(true);
      setErrorMessage("UnsubscribedFailed");
    }
  }, [unsubscribed]);

  const value = {
    openMenu,
    setOpenMenu,
    handleMenuOpen,
    bearerToken,
    loginToken,
    setLoginToken,
    userInfo,
    setUserInfo,
    productsList,
    setProductsList,
    localFile,
    setLocalFile,
    productObject,
    setProductObject,
    fileUpload,
    setFileUpload,
    itemsProduct,
    setItemsProduct,
    isUploaded,
    setIsUploaded,
    isChanging,
    setIsChanging,
    shippingPrice,
    setShippingPrice,
    deliveryAddress,
    setDeliveryAddress,
    billingAddress,
    setBillingAddress,
    fileFormats,
    setFileFormats,
    imageFormats,
    setImageFormats,
    whichAddress,
    setWhichAddress,
    messagePayment,
    setMessagePayment,
    isMessagePayment,
    setIsMessagePayment,
    shippingCountries,
    setShippingCountries,
    shippingTotal,
    setShippingTotal,
    handlingShippingDestinationChanges,
    cookies,
    setCookie,
    removeCookie,
    getUserData,
    timezoneOfUser,
    setTimezoneOfUser,
    handleLoginSubmit,
    userLogin,
    setUserLogin,
    handleUserLoginChange,
    isError,
    setIsError,
    errorMessage,
    setErrorMessage,
    responseSocialMediaLogins,
    handleFileUpload,
    selectAddNewAddress,
    setSelectAddNewAddress,
    handleUpdateUserAddress,
    userOrders,
    setUserOrders,
    handlingPagingComponentCalls,
    scrollToTop,
    openModal,
    setOpenModal,
    showErrorMessage,
    reviews,
    setReviews,
    totalReviewScore,
    setTotalReviewScore,
    getDateDiffrences,
    t,
    allReviews,
    setAllReviews,
    changeLang,
    openLangMenu,
    closeLangMenu,
    successMessage,
    setSuccessMessage,
    isSuccess,
    setIsSuccess,
    unsubscribed,
    setUnsubscribed,
    zoomSlider,
    setZoomSlider,
    crop,
    setCrop,
    isErrorModal,
    setIsErrorModal,
    errorsArray,
    setErrorsArray,
    axiosHandler,
    jwtToken,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const GlobalContext = Context;
export const GlobalProvider = Provider;
