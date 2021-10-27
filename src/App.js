import Landing from "./components/landing/Landing";
import Signin from "./components/landing/SignIn";
import Createaccount from "./components/landing/CreateAccount";
import Planters from "./components/items/Planters";
import ProductDetails from "./components/addToCart/ProductDetails";
import CartItems from "./components/cart/CartItems";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useReducer, useState } from "react";
import { initialState, reducer } from "./reducers/auth/authUser";
import { initialStateCart, reducerCart } from "./reducers/addToCart/addToCart";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/login">
              <Signin />
            </Route>
            <Route path="/signup">
              <Createaccount />
            </Route>
            <Route path="/planters" exact>
              <Planters />
            </Route>

            <Route path="/getClickedItem/:id" exact>
              <ProductDetails />
            </Route>
            <Route path="/cartItems">
              <CartItems />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
