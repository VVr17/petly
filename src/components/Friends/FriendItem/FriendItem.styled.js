import styled from 'styled-components';

//============================= LINKS (a) ===========================

export const FriendLinkTitle = styled.a`
  display: inline-block;
  margin-bottom: 10px;
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
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: 1.36;
    margin-bottom: ${p => p.theme.space[3]};
  }
  ${p => p.theme.mq.desktop} {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 27px;
  }

  :hover {
    color: rgb(255, 97, 1);
  }
`;

export const FriendLink = styled.a`
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes.xxxs};
  line-height: 16px;
  transition: color ${p => p.theme.transitionTiming};
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
  ${p => p.theme.mq.tablet} {
    font-size: ${p => p.theme.fontSizes.xxs};
  }
  ${p => p.theme.mq.desktop} {
    font-size: ${p => p.theme.fontSizes.xs};
  } ;
`;

// ========================= LIST (ul) ===========================

export const FriendContentList = styled.ul`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;

  ${p => p.theme.mq.tablet} {
    width: 180px;
  }
`;

export const TimeList = styled.ul`
  position: absolute;
  top: 35px;
  left: 5px;
  width: 125px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background-color: ${p => p.theme.colors.lightText};
  border: ${p => `1px solid ${p.theme.colors.accent}`};
  box-shadow: ${p => p.theme.boxShadow.notice};
  border-radius: 8px;
  padding: 12px;
  margin-bottom: -4px;

  ${p => p.theme.mq.tablet} {
    top: 40px;
    width: 140px;
  }

  ${p => p.theme.mq.desktop} {
    top: 50px;
    width: 160px;
  }
`;

//=================== LIST ITEMS (li) ============================

export const FriendListItem = styled.li`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 12px;
  padding: 12px;
  background-color: ${p => p.theme.colors.cardBackground};
  box-shadow: ${p => p.theme.boxShadow.main};
  border-radius: 20px;

  ${p => p.theme.mq.tablet} {
    flex-basis: calc((100% - 32px) / 2);
    margin-bottom: 32px;
    padding: 16px;
    border-radius: 40px;
  }

  ${p => p.theme.mq.desktop} {
    flex-basis: calc((100% - 16px * 4) / 3);
  }
`;

export const TextWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5px;
  padding-left: 5px;
`;

export const TimeItem = styled.li`
  margin-bottom: 4px;
  ${p => p.theme.mq.tablet} {
  }
`;

// ======================= TEXT, TITLE (p, h3) ======================

export const FriendTitle = styled.h3`
  text-align: center;
  padding: 0 4px;
`;

export const FriendText = styled.p`
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSizes.xxxs};
  line-height: 1.35;

  ${p => p.theme.mq.tablet} {
    font-size: ${p => p.theme.fontSizes.xxs};
    line-height: 19px;
  }
  ${p => p.theme.mq.desktop} {
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: 22px;
  }
`;

export const FriendTime = styled(FriendText)`
  transition: color ${p => p.theme.transitionTiming};
  &:hover {
    color: ${p => p.theme.colors.secondaryText};
  }
`;

export const HoursItemText = styled(FriendText)`
  font-weight: ${p => p.theme.fontWeight.medium};
`;

// ============= DIV, IMG, BUTTON =========================
export const FriendContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
`;

export const FriendImg = styled.img`
  max-width: 110px;
  ${p => p.theme.mq.tablet} {
    max-width: 120px;
    margin-right: 14px;
  }
  ${p => p.theme.mq.desktop} {
    max-width: 158px;
    margin-right: 16px;
  }
`;

export const TimeBtn = styled.button`
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: ${p => p.theme.fontSizes.xxxs};
  line-height: 16px;
  display: flex;
  align-items: center;
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: inherit;
  transition: color ${p => p.theme.transitionTiming};
  &.active {
    color: ${p => p.theme.colors.accent};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
  }

  ${p => p.theme.mq.tablet} {
    font-size: ${p => p.theme.fontSizes.xxs};
    line-height: 19px;
  }
  ${p => p.theme.mq.desktop} {
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: 22px;
  }
`;
