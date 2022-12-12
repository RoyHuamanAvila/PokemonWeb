import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/custom.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Teams from './pages/Teams'

const router = createBrowserRouter([
  {
    element: <App />, children: [
      { path: '/', element: <Home /> },
      { path: '/teams', element: <Teams /> }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
