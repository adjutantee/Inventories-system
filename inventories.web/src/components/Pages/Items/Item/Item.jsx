import React from "react";
import "./Item.css";
import axios from "axios";
import { Table, Button, Modal, Input } from "antd";

const Item = ({ items }) => {
  const dataSource = items.map((item) => ({ ...item, key: item.id }));
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const showMoadal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (id) => {
    let article = document.getElementById("articleI").value;
    parseInt(article);
    let itemsName = document.getElementById("itemsNameI").value;

    axios
      .put("https://localhost:7215/api/warehouse", {
        id: id,
        article: article,
        itemsName: itemsName,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // const addPut = () => {

  // };

  const addDelete = (id) => {
    axios.delete(`https://localhost:7215/api/warehouse?id=${id}`, { id: id });
  };

  const colums = [
    {
      title: "ID",
      dataIndex: "warehouseId",
      key: "warehouseId",
    },
    {
      title: "Warehouse Name",
      dataIndex: "warehouseName",
      key: "warehouseName",
    },
    {
      title: "Warehouse Location",
      dataIndex: "warehouseLocation",
      key: "warehouseLocation",
    },
    {
      title: "Actions",
      key: "actions",
      render: (dataSource) => (
        <div>
          <Button
            type={Text}
            className="btn__delete"
            onClick={() => addDelete(dataSource.key)}
          >
            Удалить
          </Button>
          <Button type={Text} className="btn__open" onClick={showMoadal}>
            Изменить
          </Button>
          <Modal
            title="Внести изменения"
            open={isModalOpen}
            onOk={() => handleOk(dataSource.key)}
            onCancel={handleCancel}
          >
            <Input placeholder="Article" id="articleI" />
            <Input placeholder="Items Name" id="itemsNameI" />
          </Modal>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={colums} />
    </>
  );
};

export default Item;
