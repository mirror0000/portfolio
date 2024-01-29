import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Preloader from './components/Pre';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tooltip } from 'react-tooltip';
import { MainRoutes } from './infos/MainRoutes';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div
        className="App"
        id={load ? 'no-scroll' : 'scroll'}
      >
        <Navbar />
        <ScrollToTop />
        <Routes>
          {MainRoutes.map(({ route, element }, idx) => (
            <Route
              key={`route-${idx}`}
              path={route}
              element={element}
            />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
        <Tooltip
          anchorSelect=".title-tooltip"
          place="bottom"
        />
      </div>
    </Router>
  );
}

export default App;
