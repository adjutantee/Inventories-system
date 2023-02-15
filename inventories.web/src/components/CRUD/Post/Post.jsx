import React from "react";
import "./Post.css";
import axios from "axios";
import { Button, Modal, Input } from "antd";

const Post = ({ url, body }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const showMoadal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    let article = document.getElementById("article").value;
    parseInt(article);
    let itemsName = document.getElementById("itemsName").value;
    axios.post(url, body);
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
        <Input placeholder="Article" id="article" />
        <Input placeholder="Items Name" id="itemsName" />
      </Modal>
    </div>
  );
};

export default Post;
