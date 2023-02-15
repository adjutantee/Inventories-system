import React from "react";
import Item from "./Item/Item";
import Post from "../../CRUD/Post/Post";
import axios from "axios";

const Items = () => {
  const [error, setError] = React.useState(null);
  const [isLoader, setIsLoader] = React.useState(false);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://localhost:7215/api/warehouse").then(
      (result) => {
        setIsLoader(true);
        setItems(result.data.result);
      },
      (error) => {
        setIsLoader(true);
        setError(error);
      }
    );
  }, [items]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoader) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="items">
        <div className="container">
          <Post url={"https://localhost:7215/api/warehouse"} />
          <div className="items__block"></div>
        </div>
      </div>
    );
  }
};

export default Items;
