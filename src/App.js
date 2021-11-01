import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useReducer, useEffect } from "react";
import { initialState, reducer } from "./reducers/auth/authUser";

import {
  Landing,
  SignIn,
  CreateAccount,
  Planters,
  ProductDetails,
  CartItems,
} from "./index";
import axios from "axios";

export const UserContext = createContext();
export const CartItemCountContext = createContext();

function App() {

  const [userAuthInfo, dispatch] = useReducer(reducer, initialState);
  
  useEffect(async () => {
    await axios
      .get("http://localhost:3001/auth/verify", { withCredentials: true })
      .then((response) => {
        if (response.data.flag) {
          dispatch({
            type: "USER_AUTH",
            payload:{
              status:true,
              userId:response.data.userid
            }
          });
        }
      });
  }, []);
  return (
    <>
      <UserContext.Provider value={{ userAuthInfo, dispatch }}>
        <Router>
          <div>
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
                <ProductDetails />
              </Route>
              <Route path="/cart-items">
                <CartItems />
              </Route>
            </Switch>
          </div>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
