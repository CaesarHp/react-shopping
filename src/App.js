import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            Home
          </Route>
          <Route path="/category" exact>
            Category
          </Route>

          <Route path="/cart" exact>
            Cart
          </Route>
          <Route path="/myaccount" exact>
            My Account
          </Route>
          <Route path="/about" exact>
            About
          </Route>
          <Route path="/notfound" exact>
            Not Found
          </Route>
          <Route path="*">Not Found</Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
