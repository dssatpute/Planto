import Landing from "./components/landing/Landing";
import Signin from "./components/landing/SignIn";
import Createaccount from "./components/landing/CreateAccount";
import Planters from "./components/items/Planters";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
