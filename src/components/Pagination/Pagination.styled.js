import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { theme } from 'constants/theme';
import { TbArrowLeftTail, TbArrowRightTail } from 'react-icons/tb';

export const MyPaginate = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  list-style-type: none;
  padding: 2rem 2rem;

  li a {
    height: 40px;
    padding: 0.3rem 1rem;
    border: 2px solid ${({ theme }) => theme.colors.accent};
    cursor: pointer;
    border-radius: 40px;
    :hover,
    :focus {
      background-color: ${theme.colors.hover};
      color: ${theme.colors.lightText};
    }
  }

  li.previous a,
  li.next a {
    border-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.accent};
    display: flex;
    align-items: center;
    height: 30px;
    padding: 1rem;
    border-radius: 40px;
    :hover,
    :focus {
      color: ${theme.colors.lightText};
    }
  }
  li.active a {
    background-color: ${theme.colors.accent};
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: ${theme.colors.secondaryText};
    cursor: default;
    :hover,
    :focus {
      background-color: transparent;
      color: ${theme.colors.secondaryText};
    }
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

export const Prev = styled(TbArrowLeftTail)``;
export const Next = styled(TbArrowRightTail)``;
