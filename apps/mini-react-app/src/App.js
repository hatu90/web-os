import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App({ basePath }) {
  return (
    <div>
      <BrowserRouter basename={basePath}>
        <React.Fragment>
        <nav>
          <Link to='/about'>About</Link>
          <Link to='/dashboard'>Dashboard</Link>
        </nav>
        <Routes>
          <Route path='/about' element={<h2>About</h2>} />
          <Route path='/dashboard' element={<h2>Dashboard</h2>} />
        </Routes>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
