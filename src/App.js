import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicePage';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/services'element={<ServicesPage/>}/>
        <Route path='/pricing'element={<Pricing/>}/>
        <Route path='/contact'element={<Contact/>}/>
      </Routes>
      <Footer/>
      <WhatsAppButton/>
      </BrowserRouter>
    </div>
  );
}

export default App;
