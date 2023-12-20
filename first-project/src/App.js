// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
// import Homepage from './Components/Homepage';
import Products from './Components/Products';
import AddProduct from './Components/AddProduct';
import UpdateProduct from './Components/UpdateProduct';
import Logout from './Components/Logout';
import Profile from './Components/Profile';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={<Homepage/>}/> */}
        <Route path='/' element={<Products/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/update' element={<UpdateProduct/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
