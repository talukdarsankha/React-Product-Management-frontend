
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
  <>
  <BrowserRouter>
  <Navbar/>
  <h1>Hello World</h1>

  <Routes>

   <Route path='/' element={<Home/>}></Route>
   <Route path='/addProduct' element={<AddProduct/>}></Route> 
   <Route path='/editProduct/:id' element={<EditProduct/>}></Route>

  </Routes>
  </BrowserRouter>
  </>
  
  );
}

export default App;
