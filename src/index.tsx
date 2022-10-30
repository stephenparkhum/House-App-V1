import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import House from './components/House'
import { Container } from 'reactstrap'
// import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import testUser from './data/data'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App user={testUser} />
  },
  {
    path: "house",
    element: <House user={testUser} />

  },
  {
    path: "house/:houseId",
    element: <House user={testUser} />
  }
])

root.render(
  <React.StrictMode>
    <Container>
      <RouterProvider router={router} />
    </Container>
  </React.StrictMode>
);
