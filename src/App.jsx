import './App.css'
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='mt-20'>
        <Navbar/>

        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        </Routes>

      </div>
    </Router>
  )
}

export default App
