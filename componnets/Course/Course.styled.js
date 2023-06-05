import styled from "styled-components";

const Card = styled.div`
  & .wrapper-card {
    flex-wrap: nowrap;
  }
  margin: 40px 30px;
  box-sizing: border-box;
  padding: 0 0;
  background-color: rgba(255, 255, 255, 1);
  color: #000;
  border-radius: 10px;
  box-shadow: 0px 19px 38px 0px rgba(0, 0, 0, 0.3),
    0px 15px 12px 0px rgba(0, 0, 0, 0.22);

  & .container {
    overflow: hidden;
  }

  & * {
    transition: all 0.5s ease;
  }

  & .wrapper-title {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: ;
    color: white;
    font-size: 20px;
    text-align: center;
    background-color: #445d0f63;
    border-radius: 10px 0 0 10px;
    text-align: center;
    white-space: wrap;
    text-overflow: ellipsis;
    max-width: 600px;
    box-sizing: border-box;
    margin: 0 12px;

    & .product-name {
      padding: 20px 4px;
    }
    & button {
      margin-bottom: 10px;
      padding: 5px 10px;
      background: rgba(255, 255, 255, 0.63);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(2.7px);
      -webkit-backdrop-filter: blur(2.7px);
      border: 1px solid rgba(255, 255, 255, 0.69);
      &:hover {
        color: rgba(255, 255, 255, 0.63);
        background-color: #000;
      }
    }
  }

  /* wrapper title end */

  & .wrapper-detail {
    transition: 0.5s;
    margin: 0 -20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    background-color: transparent;
    margin: 0 -9px;

    & .container-wr-front-card {
      width: 100%;
      padding: 11px 2px;
      min-height: 225px;
    }

    & .wrapper-front-card {
      width: 100%;
      display: flex;
      display: ${(props) => {
        return props.$open ? "none" : "flex";
      }};

      left: ${(props) => {
        return props.$open ? "0" : "";
      }};
      & .front-items {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        justify-content: center;
      }
      & .item {
        transition-delay: 0s;
        box-sizing: border-box;
        color: black;
        font-weight: bold;
        direction: rtl;
        margin: 10px;
        padding: 10px;
        background-color: #445d0f63;
        font-size: 14px;
        border-radius: 10px;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
        font-size: 15px;
        text-align: center;
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(9px);
        -webkit-backdrop-filter: blur(9px);
        border: 1px solid rgba(255, 255, 255, 0.38);
      }
    }
    & .wrapper-back-card {
      display: none;
      display: ${(props) => {
        return props.$open ? "flex" : "none";
      }};
    }
    & .wrapper-back-card ul {
      justify-content: space-evenly;
      min-width: 175px;
      direction: rtl;
      color: rgb(4, 106, 181);
      list-style: none;
      right: 0;
      top: 0;
      z-index: 1;
      font-size: 12px;

      & .wrapper-button {
        margin: 10px;
      }
    }
  }
  & span.datails {
    direction: rtl;
    margin: 2px 8px;
    padding: 4px;
    color: rgb(4, 106, 181);
    font-size: 12px;
    border-radius: 10px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    font-size: 12px;
    text-align: center;
    white-space: nowrap;
  }
`;

export default Card;
