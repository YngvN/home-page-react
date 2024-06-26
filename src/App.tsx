import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import { Layout } from './sections/layout';
import Home from './pages/home/home';
import Music from './pages/music/music';
import Developer from './pages/developer/developer';
import Contact from './pages/contact/contact';
import RouteNotFound from './pages/404notfound';
import Loading from './utility/actions/renders/loading';

import './App.css';

function App() {

  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="music" element={<Music />} />
        <Route path="developer" element={<Developer />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<RouteNotFound />} />
      </Route>
    </Routes>

  );
}

export default App;
