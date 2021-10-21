import Landing from "./components/landing/Landing";
import Signin from "./components/landing/SignIn";
import Createaccount from "./components/landing/CreateAccount";
import Planters from "./components/items/Planters";
import AddToCart from "./components/addToCart/AddToCart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useReducer } from "react";
import { initialState,reducer } from "./auth/authUser";

export const UserContext = createContext();

function App() {
  
  const [state,dispatch]=useReducer(reducer,initialState);

  
  return (
    <UserContext.Provider value={{state,dispatch}}>
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
            <Route path="/details/:id" exact>
              <AddToCart />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
