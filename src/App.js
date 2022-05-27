import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import SignUP from './Pages/Login/SignUp';
import Tools from './Pages/Tool/Tools';
import Footer from './Pages/Shared/Footer';
import Purchase from './Pages/Tool/Purchase';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tools" element={<Tools />} /> 
        <Route path="/tool/:id" element={<Purchase />} /> 
        <Route path="/purchase" element={<Purchase />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
