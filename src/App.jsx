import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import NavBar from './NavBar';

import Footer from './Footer';
import About from './About';
import Home from './Home';
import Careers from './Careers';
import Contact from './Contact';

function App() {
  

  return (
    <Router>
    
    <NavBar/> 
    
    <br></br>

    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="/about" element={<About />} />
    </Routes>
    


    

    <Footer/>

    </Router>
    
  )
}

export default App
