import Header from "./components/Header"
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container pt-3">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default App
