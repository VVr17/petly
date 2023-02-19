import styled from 'styled-components';
import { breakpoints } from 'constants/theme';

export const FriendLink = styled.a`
  display: inline-block;
  margin-bottom: 12px;
  font-family: ${p => p.theme.fontFamily.manrope};
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSizes.xxs};
  text-decoration: none;
  text-align: center;
  line-height: ${p => p.theme.space[3]};
  color: ${p => p.theme.colors.accent};
  transition: color ${p => p.theme.transitionTiming};

  :after {
    display: block;
    content: '';
    border-bottom: solid 1px ${p => p.theme.colors.accent};
    transform: scaleX(0);
    transition: transform ${p => p.theme.transitionTiming};
  }

  :hover:after {
    transform: scaleX(1);
  }

  ${p => p.theme.mq.tablet} {
    margin-bottom: 16px;
  }
  ${p => p.theme.mq.desktop} {
    font-size: 20px;
    line-height: 27px;
  }

  :hover {
    color: rgb(255, 97, 1);
  }
`;

export const FriendListItem = styled.li`
  width: 280px;
  min-height: 192px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
  padding: 12px;
  background-color: ${p => p.theme.colors.cardBackground};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    /* margin-right: 32px; */
    margin-bottom: 32px;
    padding: 16px;
    border-radius: 40px;
  }
  ${p => p.theme.mq.desktop} {
    flex-basis: calc((100% - 16px * 4) / 3);

    /* min-height: 287px; */
  }
`;

export const FriendTitle = styled.h3`
  text-align: center;
  padding: 0 4px;
`;

export const FriendContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 12px;
  width: 100%;

  @media screen and (max-width: 768px) {
    gap: 14px;
  }

  @media screen and (max-width: 1024px) {
    gap: 16px;
  }
`;

export const ImgWrapper = styled.div`
  width: 110px;
  height: 78px;
  flex: 0 0 auto;

  @media screen and (max-width: 768px) {
    width: 120px;
    height: 85px;
  }

  @media screen and (max-width: 1024px) {
    width: 158px;
    height: 112px;
  }
`;

export const FriendImg = styled.img`
  display: block;
  object-fit: contain;
  object-position: 50% 50%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HoursWrapper = styled.div`
  position: relative;
`;

export const FriendText = styled.p`
  margin-top: 4px;

  font-family: inherit;
  font-size: 12px;
  line-height: 1.35;

  font-weight: 500;
  color: #606060;

  @media screen and (max-width: 768px) {
    margin-top: 8px;
    font-size: 14px;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

export const FriendTime = styled(FriendText)`
  &:hover {
    cursor: red;
    color: #606060;
  }
`;

export const HoursOfWeek = styled.ul`
  position: absolute;
  top: calc(100% + 3px);

  ${p =>
    p.isOpen
      ? `display: flex;
      flex-direction: column;
      gap: 4px;`
      : `display: none;`}
  padding: 12px;
  background-color: #606060;
  border: 1px solid black;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    top: calc(100% + 4px);
  }
`;

export const HoursItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;

  font-family: inherit;
  font-size: 12px;
  line-height: 1.35;

  font-weight: 500;
  color: #606060;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
