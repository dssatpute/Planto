import Landing from "./components/landing/Landing";
import Signin from "./components/landing/SignIn";
import Createaccount from "./components/landing/CreateAccount";
import Planters from "./components/items/Planters";
import AddToCart from "./components/addToCart/AddToCart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducers/auth/authUser";
import { initialStateCart,reducerCart } from "./reducers/addToCart/addToCart";

export const UserContext = createContext();
export const CartItems = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cart,addToCart]=useReducer(reducerCart,initialStateCart)

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
            <CartItems.Provider value={{cart,addToCart}}>
              <Route path="/details/:id" exact>
                <AddToCart />
              </Route>
            </CartItems.Provider>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
