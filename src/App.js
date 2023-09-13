import './App.css';
import {BrowserRouter as router, Route, Switch, Router, Routes, BrowserRouter, Link} from 'react-router-dom';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import {AuthContext} from "./Helpers/AuthContext"
import { useState, useEffect } from 'react';
import axios from 'axios'
import CreateInventory from './pages/CreateInventory';
import Inventory from './pages/Inventory';


function App() {
  
  const [authState, setAuthState] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:3002/auth/auth', { headers:{
      accessToken: localStorage.getItem("accessToken")
    }}).then(((response) => {
      if (response.data.error){
        setAuthState(false)
    } else{
        setAuthState(true)
    }
  }))
  }, [])


  return (
    <div className="App">
      <AuthContext.Provider value={{authState, setAuthState}}>
      <BrowserRouter>
        <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/createInventory'>Add Inventory</Link>
        {!authState && ( 
        <>
          <Link to='/login'>Login</Link>
          <Link to='/registration'>Register</Link>
        </>
        )}
        </div>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/createInventory" element = {<CreateInventory/>} />
          <Route path="/inventory/:id" element = {<Inventory/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registration" element={<Registration/>} />
        </Routes>
      </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
