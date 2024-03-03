// other imports
import { BrowserRouter } from 'react-router-dom';

// page or component imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// styles
import './App.css';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
