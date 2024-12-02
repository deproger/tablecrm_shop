import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
