import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material";

import ScrollToTop from "./components/ScrollToTop";
import Theme from "./ui/Theme";
import Layout from "./ui/Layout";

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
                Home
              </Route>
              <Route path="/shop" exact>
                Shop
              </Route>
              <Route path="/cart" exact>
                Cart
              </Route>
              <Route path="/our-story" exact>
                Our Story
              </Route>
              <Route path="/contact" exact>
                Contact
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
