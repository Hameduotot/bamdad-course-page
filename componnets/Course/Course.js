import React, { useState } from "react";
import {
  Card,
  FullHeightContainer,
  FullHeightRow,
  StyledColFlex2,
  StyledColFlex5,
  StyledContainer,
  StyledH2,
  StyledButton,
  CardWrapper,
  CardFrontWrapper,
  CourseFront,
  CourseBack,
  CardBackWrapper 
} from "./Course.styled";

function Course({ product }) {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <FullHeightContainer>
        <FullHeightRow>
          <StyledColFlex2 sm={12} md={6} lg={4}>
            <StyledContainer>
              <StyledH2>{product.name}</StyledH2>
              <StyledButton
                variant="info"
                onClick={() => setOpen(!open)}
                size="sm"
              >
                جزئیات و ثبت نام
              </StyledButton>
            </StyledContainer>
          </StyledColFlex2>
          <StyledColFlex5 sm={12} md={6} lg={8}>
            <CardWrapper>
              <CardFrontWrapper open={open}>
                <CourseFront
                  startFrom={product.stringstartdate}
                  hour={product.productAvailableSessions[0].hour}
                  day={product.stringday}
                />
              </CardFrontWrapper>
              <CardBackWrapper open={!open}>
                <CourseBack product={product} />
              </CardBackWrapper>
            </CardWrapper>
          </StyledColFlex5>
        </FullHeightRow>
      </FullHeightContainer>
    </Card>
  );
}

export default Course;
