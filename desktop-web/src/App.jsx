import React from 'react'
import { Routes,  Route} from 'react-router-dom';

// Components
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import NewsletterSignupAndNewArrivals from './components/NewsletterSignupAndNewArrivals.jsx';

// Pages
import HomePage from './pages/HomePage.jsx';
import UsersCRUD from './admin/pages/UsersCRUD.jsx';


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
          </>
        }/>
    

        {/* Admin Routes */}

        {/* <Route path='/login' element={
          <>
          <Navbar />
          <AdminLoginPage />
          </>
        } /> */}

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


