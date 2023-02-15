import React from "react";
import "./Stock.css";
import StockItem from "./StockItem/StockItem";
import Post from "./StockPost/Post";
import axios from "axios";
import { Input } from "antd";

const Stock = () => {
  const [error, setError] = React.useState(null);
  const [isLoader, setIsLoader] = React.useState(false);
  const [stock, setStock] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  const filtered = stock.filter((item) => {
    return item.stockName.toLowerCase().includes(searchValue.toLowerCase());
  });

  React.useEffect(() => {
    axios.get("https://localhost:7240/api/stocks").then(
      (result) => {
        setIsLoader(true);
        setStock(result.data.result);
      },
      (error) => {
        setIsLoader(true);
        setError(error);
      }
    );
  }, [stock]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoader) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="items">
        <div className="container">
          <Post url={"https://localhost:7240/api/stocks"} />
          <div className="items__block">
            <Input
              onChange={(event) => setSearchValue(event.target.value)}
              addonAfter="Поиск"
            />
            <StockItem stock={filtered} />
          </div>
        </div>
      </div>
    );
  }
};

export default Stock;
