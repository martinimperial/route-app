import { lazy } from 'react';

// project import
import Home from '../Home';
import About from '../About';
import MinimalLayout from './MinimalLayout';
import Contact from '../Contact';
// ==============================

const MainRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/home',
      element: <Home />
    },    
    {
      path: '/about',
      element: <About />
    },    
    {
      path: '/contact',
      element: <Contact />
    },    
  ]
};

export default MainRoutes;
