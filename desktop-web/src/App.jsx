import React from 'react'
import { Routes,  Route, BrowserRouter} from 'react-router-dom';

// Components
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SubFooter from './components/SubFooter.jsx';
import NewsletterSignupAndNewArrivals from './components/NewsletterSignupAndNewArrivals.jsx';

// Pages
import HomePage from './pages/HomePage.jsx';
import UsersCRUD from './admin/pages/UsersCRUD.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import ProductsCRUD from './admin/pages/ProductsCRUD.jsx';
import UserDashboard from './users/pages/UserDashboard.jsx';
import UserProfile from './users/pages/UserProfilePage.jsx';
import ShoppingCart from './users/pages/ShoppingCart.jsx';



function App() {
    
  return (
    <>
      <Routes>
        {/* Main root route */}
        <Route path="/" element={
          <>
            <Navbar />
            <HomePage />
            <NewsletterSignupAndNewArrivals />
            <Footer />
            <SubFooter />
          </>
        }/>

        <Route path="/products" element={
          <>
            <Navbar />
            <ProductsPage />
            <Footer />
            <SubFooter />
          </>
        } />

        {/* Product Detail Route */}


        <Route path="/products/:id" element={
          <>
          <Navbar />
          <ProductDetailPage />
          <Footer />
          </>
          
          } />

        {/* User Dashboard Routes*/}
          <Route path="/user-dashboard" element={
          <>
            <Navbar />
            <UserDashboard/>
            <Footer />
            <SubFooter />
          </>
        } />

         <Route path="/user/profile" element={
          <>
            <Navbar />
            <UserProfile/>
            <Footer />
            <SubFooter />
          </>
        } />

        <Route path="/user/cart" element={
          <>
            <Navbar />
            <ShoppingCart/>
            <Footer />
            <SubFooter />
          </>
        } />

        {/* Admin Routes */}

        <Route path="/admin" element={
           <>
            <Navbar />
            <UsersCRUD />
            <Footer />
           </>
        } />

           <Route path="/admin/products" element={
           <>
            <Navbar />
            <ProductsCRUD />
            <Footer />
           </>
        } />

        {/* <Route path='*' element={<FourZeroFourPage />} /> */}
        
      </Routes>  
      </>
  )
}

export default App


