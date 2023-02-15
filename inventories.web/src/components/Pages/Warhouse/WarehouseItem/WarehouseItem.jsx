import React from "react";
import axios from "axios";
import { Table, Button, Modal, Input } from "antd";
import "./WarehouseItem.css";

const WarehouseItem = ({ warehouse }) => {
  const dataSource = warehouse.map((item) => ({
    ...item,
    key: item.warehouseId,
    count: warehouse.indexOf(item),
  }));
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [identif, setIdentif] = React.useState(0);
  const [warehouseName, setWarehouseName] = React.useState("");
  const [warehouseLocation, setWarehouseLocation] = React.useState("");

  const showModal = (id, count) => {
    let { warehouseName, warehouseLocation } = dataSource[count];
    setWarehouseName(warehouseName);
    setWarehouseLocation(warehouseLocation);
    setIsModalOpen(true);
    setIdentif(id);
  };

  const handleOk = () => {
    let warehouseName = document.getElementById("warehouseNameP").value;
    let warehouseLocation = document.getElementById("warehouseLocationP").value;
    axios
      .put("https://localhost:7274/api/warehouses", {
        warehouseId: identif,
        warehouseName: warehouseName,
        warehouseLocation: warehouseLocation,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const addDelete = (id) => {
    axios.delete(`https://localhost:7274/api/warehouses?warehouseId=${id}`, {
      warehouseId: id,
    });
  };

  const colums = [
    {
      title: "ID",
      dataIndex: "warehouseId",
      key: "warehouseId",
    },
    {
      title: "Кабинет",
      dataIndex: "warehouseName",
      key: "warehouseName",
    },
    {
      title: "Местоположение",
      dataIndex: "warehouseLocation",
      key: "warehouseLocation",
    },
    {
      title: "Действия",
      key: "actions",
      render: (dataSource) => (
        <div>
          <Button
            type={Text}
            className="btn__delete"
            onClick={() => addDelete(dataSource.warehouseId)}
          >
            Удалить
          </Button>
          <Button
            type={Text}
            className="btn__open"
            onClick={() => showModal(dataSource.warehouseId, dataSource.count)}
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
          placeholder="Кабинет"
          id="warehouseNameP"
          defaultValue={warehouseName}
          addonBefore="Кабинет"
        />
        <Input
          placeholder="Местоположение"
          id="warehouseLocationP"
          defaultValue={warehouseLocation}
          addonBefore="Местоположение"
        />
      </Modal>
    </>
  );
};

export default WarehouseItem;
