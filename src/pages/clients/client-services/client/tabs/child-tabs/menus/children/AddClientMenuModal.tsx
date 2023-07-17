import React, { FC, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { ShowModal } from "xuanluan-component/lib/utils/types/baseType";
import {
  ClientMenuDTO,
  NewClientMenu,
} from "../../../../../../../../utils/types/clientType";
import { useAppSelector } from "xuanluan-component/lib/redux/store";
import { selectUsername } from "xuanluan-component/lib/redux/auth/auth-selectors";
import { addClientMenu } from "../../../../../../../../utils/service-api/client-service-api";
import { Button, Form, Input } from "antd";
import { DeleteOutlined, PlusOutlined, DownOutlined } from "@ant-design/icons";
import { FormInstance, useForm } from "antd/es/form/Form";
import { NamePath } from "antd/es/form/interface";

interface PropsType extends ShowModal {
  clientId: string;
  fetchMenuTree: () => Promise<void>;
}

const AddClientMenuModal: FC<PropsType> = ({
  clientId,
  handleClose,
  isOpened,
  fetchMenuTree,
}) => {
  const currentUser = useAppSelector(selectUsername);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [form] = useForm<NewClientMenu>();

  const handleSubmit = (request: NewClientMenu) => {
    setIsSubmitting(true);
    request.byUser = currentUser;
    addClientMenu(clientId, request).then((result) => {
      if (result.data) {
        setIsSubmitting(false);
        form.resetFields();
        fetchMenuTree();
      }
    });
  };

  return (
    <Modal fullscreen scrollable show={isOpened} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm Menu</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onFinish={handleSubmit} form={form}>
          <FormMenuTree name={"menus"} isRoot form={form} />
          <Button
            className="me-2 btn-secondary"
            onClick={handleClose}
            disabled={isSubmitting}
          >
            Đóng
          </Button>
          <Button
            className="btn-success"
            htmlType="submit"
            disabled={isSubmitting}
          >
            Thêm
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const initMenuDTO: ClientMenuDTO = {
  id: "",
  name: "",
  description: "",
  path: "",
  icon: "",
};

const FormMenuTree: FC<{
  name: NamePath;
  style?: React.CSSProperties;
  isRoot?: boolean;
  form: FormInstance<NewClientMenu>;
}> = ({ name, style, isRoot, form }) => {
  return (
    <Form.List name={name} initialValue={[]}>
      {(fields, { add, remove }) => (
        <>
          {fields.map((field, index) => {
            return (
              <Row key={index} style={style}>
                <Col xs={3}>
                  <Form.Item
                    label="Tên"
                    name={[field.name, "name"]}
                    rules={[
                      { required: true, message: "Tên không được để trống" },
                    ]}
                  >
                    <Input placeholder="Nhập tên" />
                  </Form.Item>
                </Col>
                <Col xs={3}>
                  <Form.Item label="Đường dẫn" name={[field.name, "path"]}>
                    <Input placeholder="Nhập đường dẫn" />
                  </Form.Item>
                </Col>
                <Col xs={4}>
                  <Form.Item label="Mô tả" name={[field.name, "description"]}>
                    <Input placeholder="Nhập mô tả" />
                  </Form.Item>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <Button
                        className="w-100"
                        onClick={() => {
                          add({ subMenus: [initMenuDTO] }, field.name);
                        }}
                        icon={<DownOutlined rev={undefined} />}
                      />
                    </Col>
                    <Col>
                      <Button
                        className="w-100"
                        onClick={() => remove(field.name)}
                        icon={<DeleteOutlined rev={undefined} />}
                      />
                    </Col>
                  </Row>
                </Col>

                <FormMenuTree
                  name={[field.name, `subMenus`]}
                  style={{ marginLeft: 3 }}
                  form={form}
                />
              </Row>
            );
          })}
          {isRoot && (
            <Form.Item>
              <Button
                className="btn-custom"
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined rev={undefined} />}
              >
                Thêm
              </Button>
            </Form.Item>
          )}
        </>
      )}
    </Form.List>
  );
};

export default AddClientMenuModal;
