import React from 'react';
import ReactDOM from 'react-dom/client';
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
    element: <House user={testUser} houseType={0} />

  },
  {
    path: "airbnb",
    element: <House user={testUser} houseType={1} />
  }
])

root.render(
  <React.StrictMode>
    <Container>
      <RouterProvider router={router} />
    </Container>
  </React.StrictMode>
);
