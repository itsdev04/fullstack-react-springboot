import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/footer/Footer";
import React from "react";
import SearchBox from "./components/SearchBox";
import Dropdown from "./components/Dropdown";


function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <Header />
      <SearchBox label="Search" placeholder="Enter search term..." />
      <Home/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
