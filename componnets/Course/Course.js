import React, { useState } from "react";
import Card from "./Course.styled";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Course({ product }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container fluid>
        <Card $open={open}>
          <Row className="wrapper-card">
            <Col className="wrapper-title" sm={12} md={{ span: 5 }}>
              <Row>
                <Col className="product-name">{product.name}</Col>
              </Row>
              <Row>
                <Col>
                  <button onClick={() => setOpen(!open)}>
                    جزئیات و ثبت نام
                  </button>
                </Col>
              </Row>
            </Col>

            <Col className="wrapper-detail">
              <Row className="p-1 container-wr-front-card">
                <Col className="wrapper-front-card">
                  <Row className="front-items">
                    <Col className="item" sm={5}>
                      شروع {product.stringstartdate.replace("1402", "")}
                    </Col>
                    <Col className="item" sm={5}>
                      {product.productAvailableSessions[0].hour}
                    </Col>
                    <Col className="item">{product.stringday}</Col>
                  </Row>
                </Col>
                <Col className="wrapper-back-card " md={12}>
                  <Row>
                    <Col>
                      <ul>
                        <li>مدرس :{product.teacherName}</li>
                        <li>ظرفیت:{product.remainSession} نفر</li>
                        <li>تعداد جلسات : {product.remainSession} جلسه</li>
                        <li>مدت دوره : {product.classHour} ساعت</li>
                        <li>
                          هزینه ثبت نام : {product.price.toLocaleString()}ریال
                        </li>
                        <li>
                          تخفیف :
                          {(
                            (product.price * product.discountPercent) /
                            100
                          ).toLocaleString()}
                          ریال
                        </li>
                        <li>
                          هزینه قابل پرداخت : {product.payable.toLocaleString()}{" "}
                          ریال
                        </li>
                        <li>
                          <div className="wrapper-button">
                            <button>ثبت نام</button>
                            <button>درخواست مشاوره</button>
                          </div>
                        </li>
                      </ul>
                    </Col>
                    {/* <Col className="d-md-flex justify-content-md-center flex-md-column">
                    <span className="datails">
                      شروع {product.stringstartdate.replace("1402", "")}
                    </span>
                    <span className="datails">
                      {product.productAvailableSessions[0].hour}
                    </span>
                    <span className="datails">{product.stringday}</span>
                  </Col> */}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}

export default Course;
