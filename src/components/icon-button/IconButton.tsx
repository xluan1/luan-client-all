import React, { FC, MouseEventHandler } from "react";
import { Button } from "react-bootstrap";

type PropsType = {
  className?: string;
  color?: string;
  type?: "submit" | "reset" | "button" | undefined;
  tittle?: string;
  icon?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const IconButton: FC<PropsType> = ({
  className,
  color,
  type,
  tittle,
  icon,
  onClick,
  disabled,
}) => {
  return (
    <Button
      className={className ? className : "btn-custom mt-2 ms-3 me-3"}
      type={type ? type : "submit"}
      variant={color}
      disabled={disabled}
      onClick={onClick}
    >
      <i className={icon} /> {tittle}
    </Button>
  );
};

export default IconButton;
