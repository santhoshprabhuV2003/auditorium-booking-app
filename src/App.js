import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Request from './component/Request';
import Admin from './component/Admin';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/request" element={<Request/>}/>
          <Route exact path='/admin' element={<Admin/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;