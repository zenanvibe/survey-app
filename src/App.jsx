import React from "react";
import Login from "./Components/views/Login/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from "./views/Dashboard/Dashboard";
// import ListOrder from "./views/Dashboard/ListOrder";
import Dashboard from "./Components/views/Dashboard/Dashboard";

function App(){
    return(
        <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
    
      </Routes>
    </Router>
    );
}

export default App;