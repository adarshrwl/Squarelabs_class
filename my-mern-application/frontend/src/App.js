import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { navbar } from "./common/navbar/navbar";
import { login } from "./components/login/login";

function App() {
  return (
    <Router>
      <navbar />
      <Routes>
        <Route path="/login" element={<login />} />
        <Route path="/singup" element={<login />} />
        <Route path="/home" element={<login />} />
        <Route path="/test" element={<login />} />
        <Route path="/a" element={<login />} />
        <Route path="/login" element={<login />} />
      </Routes>
    </Router>
  );
}

export default App;
