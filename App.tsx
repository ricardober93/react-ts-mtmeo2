import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

export default function App() {
  return (
    <Router>
      <h1 className="title"> my frist app</h1>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}
