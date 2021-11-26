import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./screens/Loading";
import useAuth from "./services/useAuth";
import {
  Navbar,
  Landing,
  SignIn,
  CreateAccount,
  ProductCategory,
  ProductDetails,
  Cart,
  CheckOut,
  OrderPlaced,
  Footer
} from "./index";

function App() {
  const [loading, setLoading] = useState(true);
  const user = useAuth();
  // console.log(user);
  useEffect(() => {
    setLoading(user.loading);
  }, [user]);

  return (
    <div className="App">
      {loading ? (
        ""
      ) : (
        <Router>
          <div>
            <Navbar user={user} />
            <Switch>
              <Route path="/" exact>
                <Landing user={user}  loading={loading}/>
              </Route>
              <Route path="/login">
                <SignIn />
              </Route>
              <Route path="/signup">
                <CreateAccount />
              </Route>
              <Route path="/products/get-clicked-item/:category/:productId" exact>
                <ProductDetails user={user} />
              </Route>
              <Route path="/products/:category" exact>
                <ProductCategory />
              </Route>

              <Route path="/cart-items">
                <Cart user={user} />
              </Route>
              <Route path="/check-out">
                <CheckOut user={user} exact />
              </Route>
              <Route path="/placed-order/:userid" exact>
                <OrderPlaced user={user} />
              </Route>
            </Switch>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
