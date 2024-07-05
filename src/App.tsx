import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import OgrTable from "./pages/ogrTable"
import UniTable from "./pages/uniTable"
import AddOgr from "./pages/addOgr"
import Navbar from "./components/navbar/navbar"
function App() {
  return (
    <div>
       <Router>
          <Navbar/>
      <Routes> 
        <Route path="/add" element={<AddOgr />} />
        <Route path="/" element={<OgrTable />} />
        <Route path="/univesties" element={<UniTable />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
