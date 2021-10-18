import Landing from "./components/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./components/SignIn";
import Createaccount from "./components/CreateAccount";

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
