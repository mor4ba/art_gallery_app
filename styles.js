import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #__next {
    min-height: 100vh;
  }

  h1 {
    text-align: center;
    margin-top: 3.5rem;

  }

  body {
    margin: 0;
    font-family: system-ui;
    padding-bottom: 3.5rem;
    min-height: 100vh;
  }

  h2, h3 {
    line-height: 1.4;
  }

  button.favorite,
  button  {
    width: fit-content;
    padding: 0.5rem 1rem;
    cursor: pointer;
    box-shadow: none;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.25rem
    position: relative;
    min-width: 180px;

    span {
      position: absolute;
      bottom: 0.5rem;
      right: -0.5rem;
      transform: rotate(36deg);
    
      img {
        width: 40px;
        height: 40px;
      }
    }
   }

  .art__single,
  .spotlight  {
    display: flex;
    margin: 0 auto;
    flex-direction: column; 
    width: fit-content;
    gap: 1rem;

    img.artwork {
      width: 100%;
      height: auto;
      object-fit: contain;
      box-shadow: 1px 1px 17px -1px black;
    }
  }

  .art__single {
    margin-top: 3.5rem;
  }

  li {
    list-style: none;
  }

  .button.backwards {
    top: 7.2rem;   
    text-decoration: none;
    color: black; 
    font-size: 2.5rem;
    font-family: monospace;
    text-transform:lowercase;
    position: absolute;
    left: 1rem;
    top: 7.2rem;
    
    &::before {
      position: relative;
      content: "<";
      font-size: inherit;
      margin-right: 0.7rem;
    }
  }

`;
