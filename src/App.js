import React from "react";
import NavBar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import { useCookies } from "react-cookie";
import Register from "./components/Register/Register";
import Income from "./components/Income/Income";
import Expense from "./components/Expense/Expense";
import DashBoard from "./components/DashBoard/DashBoard";
import Transaction from "./components/Transactions/Transaction";
import About from "./components/About/About";
import "./App.css";


const App = () => {
  const [cookie] = useCookies(["token"]);

  return (
    <div className="main">
      <NavBar />
      <Routes>
        <Route path="/" element={cookie?.token ? <DashBoard /> : <Login />} />
        <Route
          path="/income"
          element={cookie?.token ? <Income /> : <Login />}
        />
        <Route
          path="/expense"
          element={cookie?.token ? <Expense /> : <Login />}
        />
        {/* <Route
          path="/transaction"
          element={cookie?.token ? <Transaction /> : <Login />}
        /> */}
        <Route path="/about" element={cookie?.token ? <About /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
