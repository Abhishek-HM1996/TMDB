import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import SignIn from './SignIn';
import Home from '../Home';
import Detail from '../Detail';
import Header from '../Header';


const AppRoutes = () => {
  return (
    <Router>
      <div>
      <Header/>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path='movies/details/:id' element={<Detail/>} />
          <Route path="/*" element={<SignIn />} />
        </Routes>

        {/* Your footer or other common components can go here */}
      </div>
    </Router>
  );
};

export default AppRoutes;