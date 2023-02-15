import axios from "axios";
import React from "react";
import Customer from "./Customer/Customer";
import Post from "./CustomerPost/Post";

const Customers = () => {
  const [error, setError] = React.useState(null);
  const [isLoader, setIsLoader] = React.useState(false);
  const [customers, setCustomers] = React.useState([]);
  React.useEffect(() => {
    axios.get("https://localhost:7161/api/customers").then(
      (result) => {
        setIsLoader(true);
        setCustomers(result.data.result);
      },
      (error) => {
        setIsLoader(true);
        setError(error);
      }
    );
  }, [customers]);

  if (error) {
    return <div>Error message: {error}</div>;
  } else if (!isLoader) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="customer">
        <Post url={"https://localhost:7161/api/customers"} />
        <div className="container">
          <Customer customers={customers} />
        </div>
      </div>
    );
  }
};

export default Customers;
