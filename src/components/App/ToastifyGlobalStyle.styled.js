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
    color: #db793d;
  }

  .Toastify__toast--success {
    color: #07bc0c;
  }

  .Toastify__toast--error {
    color: #e74c3c;
  }

  .Toastify__toast--warning {
    color: #f1c40f;
  }

  .Toastify__toast--info {
    color: #3498db;
  }

  .Toastify__toast-body {
    margin: 0;
  }

  .Toastify__close-button {
    margin-top: 10px;
    width: 24px;
    color: black;
  }

  .Toastify__close-button > svg {
    width: 20px;
    height: 20px;
  }

  .Toastify__progress-bar {
    height: 8px;
    border-radius: 8px;
    background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  }

  .Toastify__progress-bar--info {
    background: linear-gradient(90deg, #083f79 0%, #94cef7 105.44%);
  }

  .Toastify__progress-bar--success {
    background: linear-gradient(90deg, #1d7908 0%, #b0f992 105.44%);
  }

  .Toastify__progress-bar--warning {
    background: linear-gradient(90deg, #fa6d0b 0%, #fae062 105.44%);
  }

  .Toastify__progress-bar--error {
    background: linear-gradient(90deg, #eb0a0a 0%, #fea4a4 105.44%);
  }
`;

export default ToastifyGlobalStyle;
