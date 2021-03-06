import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export {default as Landing} from './screens/Landing'
export {default as ProductCategory} from './screens/ProductCategory'
export {default as BestSelling} from './screens/BestSelling'
export {default as Cart} from './screens/Cart'
export {default as CreateAccount} from './screens/CreateAccount'
export {default as GardenDecorCare} from './screens/GardenDecorCare'
export {default as ImageSlider} from './screens/ImageSlider'
export {default as ProductDetails} from './screens/ProductDetails'
export {default as SignIn} from './screens/SignIn'
export {default as CheckOut} from './screens/CheckOut'
export {default as Navbar} from './components/NavBar'
export {default as OrderPlaced} from './screens/OrderPlaced'
export {default as Footer} from './components/Footer'
export {default as Payment} from './screens/Payment'


// export {Landing,Planters,BestSelling,CartItems,Createaccount,GardenDecorCare,ImageSlider,ProductDetails,SignIn} from './screens'