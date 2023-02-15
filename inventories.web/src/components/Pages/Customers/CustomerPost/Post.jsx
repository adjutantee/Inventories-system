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
    let customerName = document.getElementById("customerName").value;
    let customerCompany = document.getElementById("customerCompany").value;
    let customerAddress = document.getElementById("customerAddress").value;
    let customerCity = document.getElementById("customerCity").value;
    let customerState = document.getElementById("customerState").value;
    let customerPhone = document.getElementById("customerPhone").value;
    axios
      .post(url, {
        customerName: customerName,
        customerCompany: customerCompany,
        customerAddress: customerAddress,
        customerCity: customerCity,
        customerState: customerState,
        customerPhone: customerPhone,
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
          placeholder="Поставщик"
          id="customerName"
          addonBefore="Поставщик"
        />
        <Input
          placeholder="Компания поставщика"
          id="customerCompany"
          addonBefore="Компания поставщика"
        />
        <Input placeholder="Адрес" id="customerAddress" addonBefore="Адрес" />
        <Input placeholder="Город" id="customerCity" addonBefore="Город" />
        <Input
          placeholder="Состояние"
          id="customerState"
          addonBefore="Состояние"
        />
        <Input
          placeholder="Телефон"
          id="customerPhone"
          type="number"
          addonBefore="Телефон"
        />
      </Modal>
    </div>
  );
};

export default Post;
