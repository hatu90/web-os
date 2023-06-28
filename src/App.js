import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { MiniApp } from './MiniApp';

const APPS = [
  {
    name: 'App1',
    id: 'mini-react-app',
    url: 'http://localhost:3001/widget.js'
  },
  {
    name: 'App2',
    id: 'vanila-app',
    url: '/vanila-app.js'
  }
]

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <div className='Sidebar'>
            {
              APPS.map((app) => (
                <Link key={app.id} to={`/${app.id}`}>
                  <button>{app.name}</button>
                </Link>
              ))
            }
          </div>
          <div>
            <Routes>
              <Route
                path='/:appId/*'
                element={<MiniApp apps={APPS} />}
                apps={APPS}
              />
            </Routes>
          </div>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
