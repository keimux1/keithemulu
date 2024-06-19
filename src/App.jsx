import './App.css'
import CallToAction from "./components/CallToAction";
import Laboremus from './components/Laboremus.jsx';
import Cv from './components/Cv.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import ContactMe from './components/ContactMe.jsx';
import CallToActionController from './components/CallToActionController.jsx';
import Refactory from './components/Refactory.jsx';
import EmployeeReward from './components/EmployeeReward.jsx';
import HrManagement from './components/HrManagement.jsx';
import About from './components/About.jsx';


function App() {

  return (
    <Router>
      <ScrollToTop />
      <div className='mt-20 min-h-screen flex flex-col'>
        <Navbar />

        <Routes  basename={process.env.NODE_ENV === 'development' ? '/' : '/repo-name/'}>
          <Route path='/keithemulu' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/cv' element={<Cv />}></Route>
          <Route path='/contact' element={<ContactMe />}></Route>
          <Route path='/laboremus' element={<Laboremus />}></Route>
          <Route path='/refactory' element={<Refactory />}></Route>
          <Route path='/employeeReward' element={<EmployeeReward/>}></Route>
          <Route path='/hrManagement' element={<HrManagement/>}></Route>
        </Routes>

        <div className='mt-auto'>
          <CallToActionController>
            <CallToAction />
          </CallToActionController>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
