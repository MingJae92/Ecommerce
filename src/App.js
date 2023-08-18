import logo from './logo.svg';
import './App.css';
import {   Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Pageerror from './components/Pageerror';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="*" element={<Pageerror/>}/>
      </Routes>
    
  );
}

export default App;
