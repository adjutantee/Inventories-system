import React from "react";
import "./Stock.css";
import StockItem from "./StockItem/StockItem";
import Post from "./StockPost/Post";
import axios from "axios";
import { Input, Row, Col } from "antd";

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
        <Row justify={"center"}>
          <Col xs={10} sm={10} md={10} lg={10} xl={8}>
            <Post url={"https://localhost:7240/api/stocks"} />
          </Col>
          <Col xs={10} sm={10} md={10} lg={10} xl={10}>
            <Input
              onChange={(event) => setSearchValue(event.target.value)}
              addonAfter="Поиск"
            />
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={22} sm={22} md={22} lg={18} xl={18}>
            <StockItem stock={filtered} />
          </Col>
        </Row>
      </div>
    );
  }
};

export default Stock;
