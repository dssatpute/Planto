import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import useAuth from "./services/useAuth";
import {
  Navbar,
  Landing,
  SignIn,
  CreateAccount,
  Planters,
  ProductDetails,
  Cart,
  CheckOut,
} from "./index";


function App() {

  
  const user=useAuth()


  return (
    <div className="App">
      <Router>
        <div>
          <Navbar user={user} />
          <Switch>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/login">
              <SignIn />
            </Route>
            <Route path="/signup">
              <CreateAccount />
            </Route>
            <Route path="/planters" exact>
              <Planters />
            </Route>
            <Route path="/get-clicked-item/:category/:productId" exact>
              <ProductDetails  user={user} />
            </Route>
            <Route path="/cart-items">
              <Cart user={user}  />
            </Route>
            <Route path="/check-out">
              <CheckOut user={user} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
