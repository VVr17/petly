import { createGlobalStyle } from 'styled-components';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import { theme } from 'constants/theme';

const ToastifyGlobalStyle = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    z-index: 9999;
    font-size: 20px;
    font-weight: 500;
  }

  .Toastify__toast {
    border-radius: 40px;
    padding: 10px 24px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    background-color: ${theme.colors.cardBackground};
  }

  .Toastify__toast--success {
    /* background-color: purple; */
    color: purple;
  }

  .Toastify__toast--error {
    /* background-color: red; */
    color: red;
  }

  .Toastify__toast--warning {
    /* background-color: yellow; */
    color: yellow;
  }

  .Toastify__toast--info {
    /* border: 4px solid blue; */
    color: blue;
  }

  .Toastify__toast-body {
    margin: 0;
  }

  .Toastify__close-button {
    color: black;
  }

  .Toastify__progress-bar {
    /* background-color: rgba(255, 255, 255, 0.5); */
    background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  }

  .Toastify__progress-bar--animated {
    animation: Toastify__trackProgress 1s linear;
  }

  @keyframes Toastify__trackProgress {
    0% {
      transform: scaleX(1);
    }
    50% {
      transform: scaleX(0.5);
    }
    100% {
      transform: scaleX(1);
    }
  }
`;
const ToastStylesComponent = () => {
  return <ToastContainer css={ToastifyGlobalStyle} />;
};
export default ToastifyGlobalStyle;
