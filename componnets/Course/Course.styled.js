import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { Badge } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const StyledBadge = styled(Badge)`
  padding: 8px;
`;

export function CourseFront({ startFrom, hour, day }) {
  return (
    <FullHeightContainer>
      <CourseDetailWrapper>
        <StyledBadge>شروع {startFrom.replace("1402", "")}</StyledBadge>
        <StyledBadge>{hour}</StyledBadge>
        <StyledBadge>{day}</StyledBadge>
      </CourseDetailWrapper>
    </FullHeightContainer>
  );
}

const StyledUL = styled.ul`
  color: rgb(4, 106, 181);
  list-style: none;
  font-size: 12px;

  & li {
    padding: 2px;
  }
`;

const ButtonWrapper = styled(Container)`
  & button {
    margin: 2px;
    font-size: 14px;
  }
`;

export function CourseBack({ product }) {
  return (
    <Container>
      <StyledUL>
        <li>مدرس :{product.teacherName}</li>
        <li>ظرفیت:{product.remainSession} نفر</li>
        <li>تعداد جلسات : {product.remainSession} جلسه</li>
        <li>مدت دوره : {product.classHour} ساعت</li>
        <li>هزینه ثبت نام : {product.price.toLocaleString()}ریال</li>
        <li>
          تخفیف :
          {((product.price * product.discountPercent) / 100).toLocaleString()}
          ریال
        </li>
        <li>هزینه قابل پرداخت : {product.payable.toLocaleString()} ریال</li>
      </StyledUL>
      <ButtonWrapper>
        <Button>ثبت نام</Button>
        <Button variant="secondary">درخواست مشاوره</Button>
      </ButtonWrapper>
    </Container>
  );
}

export const Card = styled.div`
  box-sizing: border-box;
  padding: 16px 16px;
  background-color: rgba(255, 255, 255, 1);
  color: #000;
  border-radius: 10px;
  box-shadow: 0px 19px 38px 0px rgba(0, 0, 0, 0.3),
    0px 15px 12px 0px rgba(0, 0, 0, 0.22);
  margin: 16px 0;
  height: 1px;
  min-height: 250px;

  @media (min-width: 320px) {
    min-height: 350px;
  }
  @media (min-width: 481px) {
    min-height: 250px;
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;

export const FullHeightContainer = styled(Container)`
  height: 100%;
`;

export const FullHeightRow = styled(Row)`
  height: 100%;
  @media (min-width: 320px) {
    flex-direction: column;
  }

  @media (min-width: 481px) {
    flex-direction: unset;
  }
`;

const CourseDetailWrapper = styled(FullHeightRow)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const StyledH2 = styled.h2`
  @media (min-width: 320px) {
    font-size: 16px;
  }
  @media (min-width: 481px) {
    font-size: 16px;
    text-align: right;
  }
`;

export const StyledButton = styled(Button)`
  @media (min-width: 992px) {
    font-size: 12px;
  }
`;

export const CardWrapper = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const CardFrontWrapper = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  right: ${({ open }) => (open ? 0 : "-400px")};
  transition: all 1s ease 0s;
`;
export const CardBackWrapper = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  left: ${({ open }) => (open ? 0 : "-400px")};
  transition: all 1s ease 0s;
`;

export const StyledColFlex2 = styled(Col)`
  @media (min-width: 320px) {
    flex: 2;
  }

  @media (min-width: 481px) {
    flex: unset;
  }
`;
export const StyledColFlex5 = styled(Col)`
  @media (min-width: 320px) {
    flex: 5;
  }

  @media (min-width: 481px) {
    flex: unset;
  }
`;
