import styled from 'styled-components';
import { theme } from 'constants/theme';


export const List = styled.ul`
    position: absolute;
    top: 404px;
    left: 96px;
    max-height: 90px;
    min-height: 20px;
    overflow-y: scroll;
    width: 420px;
    background-color: ${theme.colors.cardBackground};
    border: 2px solid #74c16a;
    border-radius: 8px;
    box-shadow: ${theme.boxShadow.notice};
    z-index: 1;
    ${theme.mq.mobileOnly} {
    top: 330px;
    left: 18px;
    width: 244px;
    max-width: 420px;
    border: 1px solid ${theme.colors.borderColor};
    box-shadow: ${theme.boxShadow.notice};
    }   
`;

export const ListItem = styled.li`
    padding: 4px 8px;
    font-size: 14px;
    line-height: 1.5;
    color: ${theme.colors.secondaryText};
    cursor: pointer;

    &:hover {
    background-color: rgba(34,139,34,0.2);
    }
`;