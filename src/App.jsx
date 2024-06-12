import './App.css'
import About from './components/About.jsx';
import CallToAction from "./components/CallToAction";
import Cv from './components/Cv.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import ContactMe from './components/ContactMe.jsx';
import CallToActionController from './components/CallToActionController.jsx';


function App() {

  return (
    <Router>
      <ScrollToTop />
      <div className='mt-20'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/cv' element={<Cv />}></Route>
          <Route path='/contact' element={<ContactMe />}></Route>
        </Routes>

        <CallToActionController>
          <CallToAction />
        </CallToActionController>

        <Footer />
      </div>
    </Router>
  )
}

export default App
