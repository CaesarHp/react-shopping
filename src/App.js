import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core";
import { responsiveFontSizes } from "@material-ui/core";
import Theme from "./ui/Theme";

import ScrollToTop from "./components/ScrollToTop";
import Layout from "./ui/Layout";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import Payment from "./Pages/Payment";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import NotFound from "./Pages/NotFound";

let theme = Theme;
theme = responsiveFontSizes(theme);

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <ThemeProvider theme={theme}>
          <Layout>
            <Switch>
              <Route path="/" exact>
                <Redirect to="/home" />
              </Route>
              <Route path="/home" exact>
                <Home />
              </Route>
              <Route path="/shop" exact>
                <Shop />
              </Route>
              <Route path="/shop/product/:productId" exact>
                <ProductDetail />
              </Route>
              <Route path="/cart" exact>
                <Cart />
              </Route>
              <Route path="/cart/payment" exact>
                <Payment />
              </Route>
              <Route path="/about-us" exact>
                <AboutUs />
              </Route>
              <Route path="/contact" exact>
                <Contact />
              </Route>
              <Route path="/notfound" exact>
                <NotFound />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
