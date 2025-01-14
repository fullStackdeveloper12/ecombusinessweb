import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Home from "./pages/home/Home.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path={`/`} element={<Home />} exact={true} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
