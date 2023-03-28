import React, { FC } from "react";
import { Card } from "react-bootstrap";

type PropTypes = {
  className?: string;
  title?: string;
  image?: string;
  content?: any;
};

const CardContent: FC<PropTypes> = ({ className, title, image, content }) => {
  return (
    <Card className={className}>
      {image && <Card.Img variant="top" src={image} />}
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        {content}
      </Card.Body>
    </Card>
  );
};

export default CardContent;
