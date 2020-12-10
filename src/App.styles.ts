import styled, { createGlobalStyle } from "styled-components";
import image from "./images/pic2.jpg";

export const GlobalStyles = createGlobalStyle`
  html {
    height:100%;
    box-sizing:border-box;
  }

  body{
    background-image:url(${image});
    background-position:center;
    background-size:cover;
    margin:0;
    padding: 0 1.2rem;
    display:flex;
    justify-content:center;
  }

  *,*::before,*::after{
    box-sizing:inherit;
    font-family:'Catamaran', sans-serif;
  }
`;

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",
      sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    block-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    text-align: center;
    margin: 1.2rem;
    font-weight: 400;
  }

  .start,
  .next {
    cursor: pointer;
    background-image: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 0.7rem;
    height: 2.5;
    margin: 1.2rem 0;
    padding: 0 2.5rem;
  }

  .start {
    max-width: 13rem;
  }
`;
