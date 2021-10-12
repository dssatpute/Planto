import Landing from "./components/Landing";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from "./components/SignIn";
import Createaccount from "./components/CreateAccount";

function App() {
  return (
    <div>
      <Landing></Landing>
    </div>
   
  );
}

export default App;
