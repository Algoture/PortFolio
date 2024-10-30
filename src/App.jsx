import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import Dock from "./Components/Dock.jsx";
import MainBody from "./MainBody.jsx";
import Terminal from "./Terminal.jsx";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/terminal" element={<Terminal />} />
          <Route path="*" element={<MainBody />} />
        </Routes>
      </Router>
      <Dock />
    </>
  );
}

export default App;
