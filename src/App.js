import logo from './logo.svg';
import './App.css';
import Homepage from './homepage';
import Products from './Products';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
