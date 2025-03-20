import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import AddMenu from './pages/AddMenu';


function App() {

  return (
    <>
    <Router>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<AddMenu/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
