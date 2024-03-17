import React, { Fragment } from 'react'
import {Route , Routes , BrowserRouter as Router} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import UserProtectedRoute from "./utils/userProtectedRoutes";
import AdminProtectedRoute from "./utils/adminProtectedRoutes";
import Login from './Pages/loginPages/loginPage';
import UserHomePage from './Pages/userHomePage/userHomePage';
import Adminpage from './Pages/adminPage/adminpage';
import ShopLogin from './Pages/ShopLogin/Shoplogin';
import ShopRegister from './Pages/ShopRegister/ShopRegister';
import ShopPage from './Pages/ShopPage/ShopPage';
//import Tender from './Pages/supplier-create-pricelist/CreateTenderProposal'

/* Add HomePage element here by importing
  ex- import HomePage from './home/HomePage';
*/
function App() {
  return (
    <Fragment>
      <Toaster />
        <Router>
          <Routes>
            
          <Route path="/" element={<Login/>} />

          <Route element={<UserProtectedRoute/>}>
            <Route path="/user" element={<UserHomePage/>} />
            <Route path="/user-shop" element={<ShopLogin/>} />
            <Route path="/user-shop-reg" element={<ShopRegister/>} />
            <Route path="/user-shop-page" element={<ShopPage/>} />
          </Route>

          <Route element={<AdminProtectedRoute/>}>
            <Route path="/admin" element={<Adminpage/>} />
          </Route>
          
          </Routes>
        </Router>
    </Fragment>
  )
}

export default App;