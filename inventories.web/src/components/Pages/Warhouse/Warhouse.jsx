import React from "react";
import axios from "axios";
import "./Warhouse.css";
import WarehouseItem from "./WarehouseItem/WarehouseItem";
import Post from "./WarhousePost/Post";

const Warhouse = () => {
  const [error, setError] = React.useState(null);
  const [isLoader, setIsLoader] = React.useState(false);
  const [warehouse, setWarehouse] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://localhost:7274/api/warehouses").then(
      (result) => {
        setIsLoader(true);
        setWarehouse(result.data.result);
      },
      (error) => {
        setIsLoader(true);
        setError(error);
      }
    );
  }, [warehouse]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoader) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="items">
        <div className="container">
          <Post url={"https://localhost:7274/api/warehouses"} />
          <div className="items__block">
            <WarehouseItem warehouse={warehouse} />
          </div>
        </div>
      </div>
    );
  }
};

export default Warhouse;
