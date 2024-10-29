import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import MainBody from "./MainBody.jsx";
import Terminal from "./Terminal.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="https://umeshnagare.vercel.app/terminal" element={<Terminal />} />
          <Route path="*" element={<MainBody />} />
        </Routes>
      </Router>
      <NavBar />
    </>
  );
}

export default App;
