import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const NotFoundPageStyles = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .logo {
    display: inline-block;
    margin-bottom: 40px;
  }
  .heading {
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .back {
    display: inline-block;
    padding: 15px 30px;
    color: white;
    background-image: linear-gradient(
      to right top,
      ${(props) => props.theme.primary},
      ${(props) => props.theme.secondary}
    );
  }
`;
const NotFoundPage = () => {
  return (
    <NotFoundPageStyles>
      <NavLink to="/" className={"logo"}>
        <img src="/404.png" alt="notfound" className="image" />
      </NavLink>
      <h1 className="heading">OOPS! Page Not Found</h1>
      <NavLink to="/" className={"back"}>Back To Home</NavLink>
    </NotFoundPageStyles>
  );
};

export default NotFoundPage;
