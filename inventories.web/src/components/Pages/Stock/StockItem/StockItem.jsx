import React from "react";
import "./StockItem.css";
import axios from "axios";
import { Table, Button, Modal, Input } from "antd";

const StockItem = ({ stock }) => {
  const dataSource = stock.map((item) => ({
    ...item,
    key: item.stockId,
    count: stock.indexOf(item),
  }));
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [identif, setIdentif] = React.useState(0);
  const [stockName, setStockName] = React.useState("");

  const showModal = (id, count) => {
    let { stockName } = dataSource[count];
    setStockName(stockName);
    setIsModalOpen(true);
    setIdentif(id);
  };

  const handleOk = () => {
    let stockName = document.getElementById("stockNameP").value;
    parseInt(stockName);
    axios
      .put("https://localhost:7274/api/warehouses", {
        stockId: identif,
        stockName: stockName,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const addDelete = (id) => {
    axios.delete(`https://localhost:7240/api/stocks?id=${id}`, {
      stockId: id,
    });
  };

  const colums = [
    {
      title: "ID",
      dataIndex: "stockId",
      key: "stockId",
    },
    {
      title: "Склад",
      dataIndex: "stockName",
      key: "stockName",
    },

    {
      title: "Действия",
      key: "actions",
      render: (dataSource) => (
        <div>
          <Button
            type={Text}
            className="btn__delete"
            onClick={() => addDelete(dataSource.stockId)}
          >
            Удалить
          </Button>
          <Button
            type={Text}
            className="btn__open"
            onClick={() => showModal(dataSource.stockId, dataSource.count)}
          >
            Изменить
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={colums} />
      <Modal
        key={identif}
        title="Внести изменения"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          placeholder="Склад"
          id="stockNameP"
          defaultValue={stockName}
          addonBefore="Склад"
        />
      </Modal>
    </>
  );
};

export default StockItem;
