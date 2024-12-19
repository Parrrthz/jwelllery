import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import "bootstrap/dist/js/bootstrap.bundle";
import Home from './pages/home';
import About  from './pages/about';
import Rings from './pages/rings';
import Bangles from './pages/bangles';
import Necklaces from './pages/necklace';
import Mangalsutras from './pages/mangalsutra';
import Earrings from './pages/earing';
import { CartProvider } from 'react-use-cart';
import { LikedItemsProvider } from './context/LikedItemsContext';
import Footer from './components/footer';
import Signup from './pages/signup';
import Contact from './pages/contact';
import TrackOrd from './pages/trackorder';
import Custome from './pages/cutomize';
import B2b from './pages/b2b';
import Login from './pages/login';
import Cart from './pages/cart';
import Item from './components/item';
import LikedItems from './pages/liked';
import './App.css';


const App = () => {
  return (
    <div>
      
    <CartProvider>
    <LikedItemsProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path="/pages/rings" element={<Rings />} />
            <Route path="/pages/bangles" element={<Bangles />} />
            <Route path="/pages/necklace" element={<Necklaces />} />
            <Route path="/pages/mangalsutra" element={<Mangalsutras />} />
            <Route path="/pages/earing" element={<Earrings />} />
            <Route path='/pages/about' element={<About/>}/>
            <Route path='/pages/signup' element={<Signup/>}/>
            <Route path='/pages/contact' element={<Contact/>}/>
            <Route path='/pages/trackorder' element={<TrackOrd/>}/>
            <Route path='/pages/cutomize' element={<Custome/>}/>
            <Route path='/pages/b2b' element={<B2b/>}/>
            <Route path='/pages/login' element={<Login/>}/>
            <Route path='/pages/cart' element={<Cart/>}/>
            <Route path='/components/item'element={<Item/>}/>
            <Route path='/pages/liked' element={<LikedItems/>}/>
        </Routes>
    </Router>
    <Footer/>
    </LikedItemsProvider>
    </CartProvider>
   
    </div>
  );
};

export default App;
