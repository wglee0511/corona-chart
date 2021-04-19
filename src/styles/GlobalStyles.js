import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
    }
    body{
        font-size:14px;
    
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    }
    a{
        text-decoration:none;
        color:inherit;
        cursor: pointer;
    }
    ol, ul, li {
        list-style: none;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
    input, button {
        background-color: transparent;
    }
    h1, h2, h3, h4, h5, h6 {
    font-family:'Maven Pro', sans-serif;
  }
  .flex-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  


.table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .table thead {
    background-color: ${theme.bgColor};
    color: white;
    border: 1px solid white;
    border-top: 0;
  }
  .table.table-cart thead {
    background-color: ${theme.bgColor};
  }
  .table th {
    padding: 15px;
  }
  .table td {
    padding: 10px;
  }
  
  .table tbody {
    font-size: 18px;
    border: 1px solid white;
  }
  
  .table-cart {
    text-align: center;
  }
  .table-cart tbody td:first-child {
    display: flex;
    align-items: center;
    gap: 15px;
    padding-left: 20px;
  }
  
  .table-nutrition tbody td:last-child {
    text-align: center;
  }
  
  .table tbody tr:nth-child(2n) {
    background-color: white;
  }
  
  .table tbody tr:nth-child(2n + 1) {
    background-color: ${theme.SecondBg};
  }
  
  .th-product {
    text-align: left;
    padding-left: 25px;
  }
  
  .cart-highlight {
    background-color: ${theme.bgColor};
    color: white;
  }


  .spinner {
    animation: rotator 1.4s linear infinite;
  }
  
  @keyframes rotator {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }
  .path {
    stroke-dasharray: 187;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
  }
  
  @keyframes colors {
    0% {
      stroke: #4285f4;
    }
    25% {
      stroke: #de3e35;
    }
    50% {
      stroke: #f7c223;
    }
    75% {
      stroke: #1b9a59;
    }
    100% {
      stroke: #4285f4;
    }
  }
  @keyframes dash {
    0% {
      stroke-dashoffset: 187;
    }
    50% {
      stroke-dashoffset: 46.75;
      transform: rotate(135deg);
    }
    100% {
      stroke-dashoffset: 187;
      transform: rotate(450deg);
    }
  
`;

export default GlobalStyles;
