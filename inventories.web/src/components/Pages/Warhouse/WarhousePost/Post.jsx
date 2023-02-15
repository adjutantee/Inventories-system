import React from "react";
import "./Post.css";
import axios from "axios";
import { Button, Modal, Input } from "antd";

const Post = ({ url }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const showMoadal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    let warehouseName = document.getElementById("warehouseName").value;
    parseInt(warehouseName);
    let warehouseLocation = document.getElementById("warehouseLocation").value;
    axios
      .post(url, {
        warehouseName: warehouseName,
        warehouseLocation: warehouseLocation,
      })
      .then((response) => console.log(response));
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="post">
      <Button onClick={showMoadal} type={"primary"} className="post__button">
        Добавить
      </Button>
      <Modal
        title="Добавить"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input placeholder="Кабинет" id="warehouseName" addonBefore="Кабинет" />
        <Input
          placeholder="Местоположение"
          id="warehouseLocation"
          addonBefore="Местоположение"
        />
      </Modal>
    </div>
  );
};

export default Post;
