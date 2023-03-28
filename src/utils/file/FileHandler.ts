import { ChangeEvent, useRef, useState } from "react";
import { FileRequest } from "../types/clientType";
import FileUtils from "../file/FileUtil";

const FileHandler = () => {
  const currentFile = useRef<FileRequest>();
  const [file, setFile] = useState<string>("");

  const getImageSrc = (): string => {
    const result = FileUtils.getFileBase64(
      currentFile.current?.data,
      currentFile.current?.type
    );

    return result;
  };

  const handleFileSelect = async (event: ChangeEvent<HTMLInputElement>) => {
    await FileUtils.uploadFileSelect(event).then((data) => {
      currentFile.current = data.data.data;
    });
    setFile(getImageSrc());
  };

  return { currentFile, file, handleFileSelect };
};

export default FileHandler;
