import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Stock from "./components/Pages/Stock/Stock";
import Orders from "./components/Pages/Orders/Orders";
import Items from "./components/Pages/Items/Items";
import Warhouse from "./components/Pages/Warhouse/Warhouse";
import Customers from "./components/Pages/Customers/Customers";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/warhouse" element={<Warhouse />} />
        <Route path="/customer" element={<Customers />} />
      </Routes>
    </div>
  );
}

export default App;
