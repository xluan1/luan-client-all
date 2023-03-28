import React, { ChangeEventHandler, FC } from "react";
import { Image } from "react-bootstrap";
import FormInput from "../../form/form-input/FormInput";
import "./InputFile.css";

type PropTypes = {
  className?: string;
  currentImage?: string;
  name?: string;
  value?: any;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  roundedCircle?: boolean;
  error?: string;
  disabled?: boolean;
  title?: string;
};

const InputFile: FC<PropTypes> = ({
  className,
  currentImage,
  name,
  value,
  handleChange,
  roundedCircle = true,
  error,
  disabled,
  title = "Tải ảnh lên",
}) => {
  return (
    <div className={className}>
      <Image roundedCircle={roundedCircle} fluid src={currentImage} />
      <label
        htmlFor="file-upload"
        className="btn-custom btn-file mx-auto d-block text-center"
      >
        <i className="fa fa-cloud-upload" /> {title}
      </label>
      <FormInput
        id="file-upload"
        name={name}
        value={value}
        type="file"
        handleChange={handleChange}
        error={error}
        disabled={disabled}
      />
    </div>
  );
};

export default InputFile;
