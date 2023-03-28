export interface BaseEntity {
  id?: string;
  createdBy?: string | undefined;
  updatedBy?: string | undefined;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BaseInfo {
  name?: string;
  description?: string;
}

export interface ResultList<T> {
  total: number;
  resultList: [T];
  index: number;
  maxResult: number;
}

export interface WrapperResponse {
  status: string;
  message: string;
  data: any;
}

export interface ShowModal {
  isOpened: boolean;
  handleShow?: () => void;
  handleClose: () => void;
}
