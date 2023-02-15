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
    let stockName = document.getElementById("stockName").value;
    axios
      .post(url, {
        stockName: stockName,
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
        <Input
          placeholder="Склада"
          id="stockName"
          addonBefore="Название склада"
        />
      </Modal>
    </div>
  );
};

export default Post;
