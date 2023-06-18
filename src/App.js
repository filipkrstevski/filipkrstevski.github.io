import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { GlobalProvider } from "./Consts/GlobalContext";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Consts/GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import theme from "./Consts/Theme";
import AllProductsPage from "./Components/AllProductsPage/AllProductsPage";
import PhotoCanvasPage from "./Components/PhotoCanvasPage/PhotoCanvasPage";
import LogInPage from "./Components/LogIn/LogInPage";
import RegisterPage from "./Components/Register/RegisterPage";
import CartPage from "./Components/Cart/CartPage";
import CheckOutCartPage from "./Components/CheckOutCart/CheckOutCartPage";
import CheckOutChoicePage from "./Components/CheckOutChoice/CheckOutChoicePage";
import CheckOutAddressPage from "./Components/CheckOutAddress/CheckOutAddressPage";
import CheckOutPaymentPage from "./Components/CheckOutPayment/CheckOutPaymentPage";
import CheckOutFinishedPage from "./Components/CheckOutFinished/CheckOutFinishedPage";
import ReviewsPage from "./Components/ReviewsComponent/ReviewsPage";
import DashboardPage from "./Components/DashboardPage/DashboardPage";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import ComingSoonPage from "./Components/ComingSoon/ComingSoonPage";
import PasswordResetPage from "./Components/PasswordReset/PasswordResetPage";
import UnsubscribePage from "./Components/Unsubscribe/UnsubscribePage";

function App() {
  return (
    <Router>
      <GlobalProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Switch>
            <ScrollToTop>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/products" component={AllProductsPage} />
              <Route
                exact
                path="/products/canvas"
                component={PhotoCanvasPage}
              />
              <Route exact path="/log-in" component={LogInPage} />
              <Route path="/register" component={RegisterPage} />
              <Route exact path="/design-products" component={CartPage} />
              <Route
                exact
                path="/check-out/cart"
                component={CheckOutCartPage}
              />
              <Route
                exact
                path="/check-out/choice"
                component={CheckOutChoicePage}
              />
              <Route
                exact
                path="/check-out/address"
                component={CheckOutAddressPage}
              />
              <Route
                exact
                path="/check-out/payment"
                component={CheckOutPaymentPage}
              />
              <Route
                path="/check-out/finished"
                component={CheckOutFinishedPage}
              />
              <Route path="/reviews" component={ReviewsPage} />
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/password-reset" component={PasswordResetPage} />

              <Route path="/coming-soon" component={ComingSoonPage} />
              <Route path="/unsubscribe" component={UnsubscribePage} />
            </ScrollToTop>
          </Switch>
        </ThemeProvider>
      </GlobalProvider>
    </Router>
  );
}

export default App;
