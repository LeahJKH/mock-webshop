import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Navbar from "./components/layout/navbar";
import "./variables.css"
import "./app.css"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" />
        <Route />
      </Routes>
    </>
  );
}

export default App;
