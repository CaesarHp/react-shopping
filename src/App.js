import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core";
import { responsiveFontSizes } from "@material-ui/core";

import ScrollToTop from "./components/ScrollToTop";
import Theme from "./ui/Theme";
import Layout from "./ui/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";

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
              <Route path="/account" exact>
                Account
              </Route>
              <Route path="/notfound" exact>
                Not Found
              </Route>
              <Route path="*">Not Found</Route>
            </Switch>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
