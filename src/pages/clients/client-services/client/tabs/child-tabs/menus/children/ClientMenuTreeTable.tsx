import React, { CSSProperties, FC, useEffect, useState } from "react";
import {
  ClientMenuDTO,
  ClientMenuUpdate,
} from "../../../../../../../../utils/types/clientType";
import { Button, Form, Input, Modal, Table } from "antd";
import {
  getClientMenu,
  updateClientMenu,
} from "../../../../../../../../utils/service-api/client-service-api";
import { selectUsername } from "xuanluan-component/lib/redux/auth/auth-selectors";
import { useAppSelector } from "xuanluan-component/lib/redux/store";

type PropsType = {
  style?: CSSProperties;
  className?: string;
  menuTree: ClientMenuDTO[];
  fetchMenuTree: () => Promise<void>;
  clientId: string;
};

const getColumns = (showModal: (record: ClientMenuDTO) => void): any[] => {
  return [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      editable: true,
      notNull: true,
    },
    {
      title: "Đường dẫn",
      dataIndex: "path",
      key: "path",
      editable: true,
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      editable: true,
    },
    {
      title: "Chức năng",
      dataIndex: "action",
      key: "action",
      render: (_: any, record: ClientMenuDTO) => {
        return <Button onClick={() => showModal(record)}>Cập nhật</Button>;
      },
    },
  ];
};

const ClientMenuTreeTable: FC<PropsType> = ({
  style,
  className,
  menuTree,
  fetchMenuTree,
  clientId,
}) => {
  const [form] = Form.useForm<ClientMenuDTO>();
  const [isShow, setIsShow] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ClientMenuDTO>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const username = useAppSelector(selectUsername);

  const showModal = (record: ClientMenuDTO) => {
    setModalData(record);
    setIsShow(true);
  };

  const cancel = () => {
    setModalData(undefined);
    setIsShow(false);
  };

  useEffect(() => {
    const fetchData = async (menuId: string) => {
      await getClientMenu(clientId, menuId).then((result) => {
        if (result.data) {
          const data: ClientMenuDTO = result.data.data;
          setModalData(data);
          form.setFieldsValue({
            name: data.name,
            description: data.description,
            path: data.path,
            icon: data.icon,
          });
        }
      });
    };
    modalData && fetchData(modalData.id);

    console.log(modalData);
  }, [isShow]);

  const save = async (value: ClientMenuDTO) => {
    if (modalData) {
      setIsLoading(true);
      const request: ClientMenuUpdate = { dto: value, byUser: username };
      await updateClientMenu(clientId, modalData.id, request).then((result) => {
        if (result.data) {
          setIsLoading(true);
          fetchMenuTree();
          cancel();
        }
      });
    }
  };

  return (
    <>
      <Table
        className={className}
        style={style}
        rowKey={"id"}
        columns={getColumns(showModal)}
        dataSource={menuTree}
        childrenColumnName="subMenus"
        pagination={{
          onChange: cancel,
        }}
      />
      {isShow && modalData && (
        <Modal
          title="Cập nhật thông tin Menu"
          open={isShow}
          onCancel={cancel}
          confirmLoading={isLoading}
          onOk={form.submit}
          centered
          maskClosable={false}
        >
          <Form form={form} onFinish={save}>
            <Form.Item
              className="f-input-mb"
              label="Tên"
              name="name"
              rules={[{ required: true, message: "Xin nhập tên cho menu!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item className="f-input-mb" label="Đường dẫn" name="path">
              <Input />
            </Form.Item>
            <Form.Item className="f-input-mb" label="Mô tả" name="description">
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default ClientMenuTreeTable;
