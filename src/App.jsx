// other imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// page or component imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home/Home';

// styles
import './App.css';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
