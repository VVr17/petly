import { theme } from 'constants/theme';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapperCard = styled.li`
  width: 100%;

  ${theme.mq.tablet} {
    width: 336px;
  }

  ${theme.mq.desktop} {
    width: 394px;
  }
`;

export const LinearGradient = styled.div`
  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  margin-bottom: 4px;

  ${theme.mq.tablet} {
    width: 280px;
    height: 8px;
  }

  ${theme.mq.desktop} {
    width: 340px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 16px;
  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.37;
  color: ${theme.colors.mainText};
`;

export const Text = styled.p`
  height: 176px;
  overflow: hidden;
  margin-bottom: 20px;
  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeight.normal};
  line-height: 1.37;
  color: ${theme.colors.thirdText};

  ${theme.mq.tablet} {
    margin-bottom: 40px;
  }
`;

export const Date = styled.span`
  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeight.normal};
  line-height: 1.37;
  color: ${theme.colors.secondaryText};
`;

export const Link = styled(NavLink)`
  text-decoration: underline;
  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.37;
  color: ${theme.colors.accent};
  padding: 3px;

  &:hover,
  &:focus {
  background-color: ${theme.colors.hover};
  border-radius: 15px;
  color: ${theme.colors.lightText};
  }
`;

export const WrapperSignature = styled.div`
  display: flex;
  justify-content: space-between;
`;
