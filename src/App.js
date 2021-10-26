import Landing from "./components/landing/Landing";
import Signin from "./components/landing/SignIn";
import Createaccount from "./components/landing/CreateAccount";
import Planters from "./components/items/Planters";
import AddToCart from "./components/addToCart/AddToCart";
import CheckOut from "./components/checkOut/CheckOut";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useReducer, useState } from "react";
import { initialState, reducer } from "./reducers/auth/authUser";
import { initialStateCart, reducerCart } from "./reducers/addToCart/addToCart";

export const UserContext = createContext();
export const CartItems = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cart, addCartitem] = useState([]);

  const setCartItems = (currentItem) => {
    addCartitem((items) => {
      return [...items, currentItem];
    });
  };

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
              <AddToCart />
            </Route>
            <Route path="/cartItems">
              <CheckOut/>
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
