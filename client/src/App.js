import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout/MainLayout";

import HomePage from "./components/pages/HomePage/HomePage";
import FaqPage from "./components/pages/FaqPage/FaqPage";
import RegulationsPage from "./components/pages/RegulationsPage/RegulationsPage";
import ContactPage from "./components/pages/ContactPage/ContactPage";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";
import ProductPage from "./components/pages/ProductPage/ProductPage";
import CartPage from "./components/pages/CartPage/CartPage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/faq" component={FaqPage} />
            <Route exact path="/regulations" component={RegulationsPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/product" component={ProductPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default App;
