// other imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// page or component imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Services from './pages/services/Services';

// styles
import './App.css';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/services' element={<Services />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
