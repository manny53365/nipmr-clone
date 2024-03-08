// other imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// page or component imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Professional from './pages/professional/Professional';

// styles
import './App.css';
import Academics from './pages/academics/Academics';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/professional' element={<Professional/>}/>
          <Route path='/academics' element={<Academics />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
