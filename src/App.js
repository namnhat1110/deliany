import React, { useState } from 'react';
import { Modal, Button, Card, Divider, Input, Space } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import "./App.css"
const { Meta } = Card;
const { TextArea } = Input;

const App = () => {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(1);
  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleRemove = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal
      </Button>
      <Modal
        title="Summer Combo"
        visible={visible}
        width={"90vw"}
        style={{ top: "1rem" }}
        bodyStyle={{ height: "80vh", display: 'block', overflow: 'auto', overflowY: 'scroll' }}
        footer={[
          <Space>
            <Button type="primary" shape="circle" onClick={handleRemove} icon={<MinusOutlined />}></Button>
            <span>{count}</span>
            <Button type="primary" shape="circle" onClick={handleAdd} icon={<PlusOutlined />}></Button>
            <Button key="back" onClick={() => setVisible(false)}>
              Return
            </Button>
            <Button key="submit" type="danger" onClick={() => setVisible(false)}>
              Submit
            </Button>
          </Space>
        ]}
      >
        <Card
          cover={<img alt="example" src="https://specialedshortbus.com/wp-content/uploads/2020/01/51.jpg" />}
          bordered={false}
        >
          <Meta title="Price: 499.999 VND" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
          <Divider />
          <Meta title="Note:" />
          <TextArea rows={4} style={{ marginTop: '1rem' }} />
        </Card>
      </Modal>
    </div>
  );
};

export default App;
