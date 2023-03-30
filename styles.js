import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  header {
    width: 100%;
    padding: 1rem 0;
    background: lightgrey;
    
    nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 2rem;

      a {
        text-decoration: none;
        color: black;
        font-size: 1.2rem;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }

  ul {
    display: flex;
    margin: 0 auto;
    margin-top: 3rem;
    flex-direction: column;
    width: fit-content;
    gap: 4rem;

    h2, h3 {
      line-height: 1.4;
      margin-bottom: 0.5rem;
    }

     li {
      display: flex;
      flex-direction: column;
      position: relative;

      a img {
        width: 100%;
        object-fit: contain;
        height: auto;
      }

      a {
        margin-bottom: 0.5rem;
      }
    }
  }

  button.favorite,
  button  {
    width: fit-content;
    mmargin: 0 auto;
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
    margin-top: 3.5rem;
    flex-direction: column; 
    width: fit-content;
    gap: 1rem;

    h2, h3 {
      line-height: 1.4;
    }

    .art__info {
      margin-top: 1.5rem;
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
      
      span {
        font-weight: 500;
      }
    }

    a.button {
      text-decoration: none;
      color: black; 
      font-size: 2.5rem;
      font-family: monospace;
      text-transform: lowercase;
      position: absolute;
      left: 1rem;
      top: 5.5rem;
    }

    .art__colors {
      display: flex;
      flex-direction: row;
      gap: 1.5rem;

      li {
        list-style: none;
        width: 80px;
        height: 80px;
        flex: 1 1 0;

        div {
          height: 100%;
          width: 100%;
        }
      }
    }

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    margin-bottom: 3rem;

    label {
      margin-bottom: 0.5rem;
    }

    input, textarea {
      margin-bottom: 2rem;
    }
  }

`;
