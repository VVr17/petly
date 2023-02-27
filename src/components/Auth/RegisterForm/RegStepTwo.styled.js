import styled from 'styled-components';
import { theme } from 'constants/theme';
export const List = styled.ul`
  position: absolute;
  top: 279px;
  left: 100px;
  margin-top: 4px;
list-style-type: none;
    border: 1px solid red;
    max-height: 120px;
    min-height: 20px;
    overflow-y: scroll;
  width: 420px;
  list-style: none;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;
  ${theme.mq.mobileOnly} {
    top: 150px;
    le
  }
`;

export const ListItem = styled.li`
  padding: 4px 8px;
  font-size: 14px;
  line-height: 1.5;
  color: #333333;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;