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

        {/* Admin Routes */}

        <Route path="/admin" element={
           <>
            <Navbar />
            <UsersCRUD />
            <Footer />
           </>
        } />

        {/* <Route path='*' element={<FourZeroFourPage />} /> */}
        
      </Routes>  
      </>
  )
}

export default App


