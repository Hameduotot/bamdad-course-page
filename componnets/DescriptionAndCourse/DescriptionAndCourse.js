import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Course from "../Course/Course";

function DescriptionAndCourse({ product, Description }) {
  return (
    <>
      <Container fluid>
        {product ? (
          <Row>
            <Col
              sm={12}
              md={12}
              xl={{ span: 5, offset: 0 }}
              lg={{ span: 8, offset: 2 }}
            >
              {product?.map((product) => (
                <Course product={product.product} key={product.id} sm={12} />
              ))}
            </Col>

            <Col dir="rtl" sm={12} md={12} xl={7} lg={12}>
              <Description />
            </Col>
          </Row>
        ) : (
          <Row>
            <Col lg={{ span: 10, offset: 1 }} dir="rtl">
              <Description />
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}

export default DescriptionAndCourse;
