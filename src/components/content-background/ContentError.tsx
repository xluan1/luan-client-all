import React, { FC, useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import IconButton from "../icon-button/IconButton";

type PropsType = {
  className?: string;
  title?: string;
  titleLink?: string;
  toPage?: string;
  srcImage?: string;
  duration?: number;
  rollBack?: boolean;
};

const ContentError: FC<PropsType> = ({
  className,
  title,
  titleLink = "Trở về trang chủ",
  toPage = "home",
  srcImage,
  duration = 5000,
  rollBack = true,
}) => {
  const navigate = useNavigate();
  const [timeBack, setTimeBack] = useState(duration);
  const [clicked, setClicked] = useState<boolean>(false);

  useEffect(() => {
    if (rollBack) {
      const timerInterval = setInterval(() => {
        setTimeBack(timeBack - 1000);
      }, 1000);
      !clicked &&
        setTimeout(() => {
          navigate(toPage);
        }, duration);
      return () => {
        clearInterval(timerInterval);
      };
    }
  }, [clicked, timeBack]);

  return (
    <Container className={className} fluid>
      <h3 className="cb-title">{title}</h3>
      <Row>
        <Col className="col-4 align-self-center text-center">
          <p className="cb-timer">
            {rollBack && (
              <>
                {titleLink} sau {timeBack / 1000} giây
              </>
            )}
          </p>
          <IconButton
            tittle="Trở về"
            onClick={() => {
              setClicked(true);
              navigate(toPage);
            }}
          />
        </Col>
        <Col>
          <Image src={srcImage} className="cb-image" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default ContentError;
