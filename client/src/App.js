import React from "react";
import { Route, Switch } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout/MainLayout";

import HomePage from "./components/pages/HomePage/HomePage";
import FaqPage from "./components/pages/FaqPage/FaqPage";
import RegulationsPage from "./components/pages/RegulationsPage/RegulationsPage";
import ContactPage from "./components/pages/ContactPage/ContactPage";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";
import SingleProduct from "./components/pages/SingleProductPage/SingleProductPage";
import CartPage from "./components/pages/CartPage/CartPage";
import ShoppingSummaryPage from "./components/pages/ShoppingSummaryPage/ShoppingSummaryPage";

class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/faq" component={FaqPage} />
          <Route exact path="/regulations" component={RegulationsPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/product/:id" component={SingleProduct} />
          <Route
            exact
            path="/shoppingsummary"
            component={ShoppingSummaryPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </MainLayout>
    );
  }
}

export default App;
