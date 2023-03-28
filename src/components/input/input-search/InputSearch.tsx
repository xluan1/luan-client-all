import React, { ChangeEventHandler, FC, MouseEventHandler } from "react";
import { Form, InputGroup } from "react-bootstrap";
import IconButton from "../../icon-button/IconButton";

type PropsType = {
  className?: string;
  placeHolder?: string;
  icon?: string;
  name?: string;
  value?: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  hanleClick?: MouseEventHandler;
  isButton?: boolean;
};

const InputSearch: FC<PropsType> = ({
  className,
  placeHolder,
  icon,
  name,
  value,
  handleChange,
  hanleClick,
  isButton = true,
}) => {
  return (
    <InputGroup className={className}>
      <Form.Control
        name={name}
        value={value}
        placeholder={placeHolder}
        onChange={handleChange}
      />
      {isButton && (
        <IconButton
          onClick={hanleClick}
          icon={icon}
          className="btn-custom"
          type="button"
        />
      )}
    </InputGroup>
  );
};

export default InputSearch;
