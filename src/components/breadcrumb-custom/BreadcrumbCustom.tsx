import React, { FC } from "react";
import { Breadcrumb } from "react-bootstrap";

type PropsType = {
  className?: string;
  items: BreadcrumbItem[];
};

export type BreadcrumbItem = {
  className?: string;
  isActive?: boolean;
  toPage?: string;
  title?: string;
};

const BreadcrumbCustom: FC<PropsType> = ({ className, items }) => {
  return (
    <Breadcrumb className={className}>
      {items.map((data, index) => {
        return (
          <Breadcrumb.Item
            key={index}
            href={data.toPage}
            active={data.isActive}
          >
            {data.title}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadcrumbCustom;
