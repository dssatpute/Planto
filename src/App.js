import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useReducer, useState } from "react";
import { initialState, reducer } from "./reducers/auth/authUser";

import {Landing,SignIn,CreateAccount,Planters,ProductDetails,CartItems} from './index'


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
              <SignIn />
            </Route>
            <Route path="/signup">
              <CreateAccount />
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
