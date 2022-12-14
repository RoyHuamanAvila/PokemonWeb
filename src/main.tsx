import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/custom.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Box from './pages/Box'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


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
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </DndProvider>
  </React.StrictMode>,
)
