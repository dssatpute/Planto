import Landing from "./components/landing/Landing";
import Signin from "./components/landing/SignIn";
import Createaccount from "./components/landing/CreateAccount";
import Planters from "./components/items/Planters";
import Description from "./components/description/Description";
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
          <Route path="/details/:id" exact>
            <Description />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
