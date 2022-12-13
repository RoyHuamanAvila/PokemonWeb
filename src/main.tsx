import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/custom.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Box from './pages/Box'
import { Provider } from 'react-redux'
import { store } from './app/store'


const router = createBrowserRouter([
  {
    element: <App />, children: [
      { path: '/', element: <Home /> },
      { path: '/box', element: <Box /> }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
