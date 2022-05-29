import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import SignUP from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Tools from './Pages/Tool/Tools';
import Footer from './Pages/Shared/Footer';
import Purchase from './Pages/Tool/Purchase';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import RequireAdmin from './Pages/Login/RequireAdmin';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tools" element={<Tools />} /> 
        <Route path="/tool/:id" element={<RequireAuth>
          <Purchase />
        </RequireAuth>} /> 
        <Route path="/purchase" element={<RequireAuth>
          <Purchase />
        </RequireAuth>} /> 
        <Route path="/dashboard" element={<RequireAuth>
          <Dashboard />
        </RequireAuth>} >
          <Route index element={<MyOrders/>}></Route>
          <Route path='review' element={<AddReview/>}></Route>
          <Route path='Makeadmin' element={<RequireAdmin>
            <MakeAdmin/>
          </RequireAdmin>}></Route>
          </Route> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP/>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
