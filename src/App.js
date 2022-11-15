import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (<div> User Management & User Login
    <BrowserRouter>
      <NavBar />
      <Routes>

      </Routes>
      </BrowserRouter>
  </div>)
}

export default App;
