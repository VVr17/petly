import styled from 'styled-components';
import { theme, breakpoints } from 'constants/theme';

export const NoticeContainer = styled.div`
  width: 100%;
  padding: 60px 20px 40px 20px;

  ${theme.mq.tablet} {
    width: 704px;
    padding: 32px 20px 40px 20px;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 240px;
  height: 240px;

  ${theme.mq.mobileOnly} {
    margin: 0 auto;
  }

  ${theme.mq.tablet} {
    width: 288px;
    height: 328px;
  }

  ${theme.mq.mobileOnly} {
    margin-bottom: 20px;
  }
`;

export const PetsImg = styled.img`
  border-radius: 0px 0px 40px 40px;
  object-fit: cover;

  width: 240px;
  height: 240px;

  ${theme.mq.tablet} {
    width: 288px;
    height: 328px;
  }
`;

export const Category = styled.span`
  position: absolute;
  top: 20px;
  background: ${theme.colors.secondaryBackground};
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 0px 20px 20px 0;

  width: 158px;
  height: 28px;
`;

export const CategoryName = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: ${theme.colors.mainText};
`;

export const PetInfo = styled.div`
  margin-bottom: 28px;
  width: 100%;

  ${theme.mq.tablet} {
    display: flex;
  }
`;

export const TextContent = styled.div`
  ${theme.mq.tablet} {
    margin-left: 20px;
  }
`;

export const Title = styled.h2`
  display: block;
  width: 100%;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  margin-bottom: 16px;

  ${theme.mq.tablet} {
    font-size: 28px;
    line-height: 38px;
    margin-bottom: 20px;
    width: 300px;
  }
`;

export const PetData = styled.div`
  display: flex;
  margin-bottom: 28px;

  ${theme.mq.tablet} {
    margin-bottom: 0;
  }

  tr {
    text-align: left;
    font-size: 14px;
    line-height: 1.36;
    height: 27px;

    ${theme.mq.tablet} {
      font-size: 16px;
    }
  }

  th {
    font-weight: 600;
    display: block;
    margin-right: 30px;

    ${theme.mq.tablet} {
      margin-right: 50px;
    }
  }

  td {
    font-weight: 500;
    white-space: nowrap;
  }
`;

export const Comments = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 40px;

  ${theme.mq.tablet} {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 32px;
  }
`;

export const CommentsTitle = styled.span`
  font-weight: 600;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  ${theme.mq.tablet} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: end;
    padding-right: 16px;
  }
`;

export const Plug = styled.div`
  display: block;
  height: 665px;
  width: 300px;
  ${theme.mq.tablet} {
    height: 465px;
  }
`;

export const LinkModal = styled.a`
  color: ${theme.colors.mainText};
  &:hover,
  &:focus {
    color: ${theme.colors.secondaryHover};
    transition: color ${theme.transitionTiming};
  }
`;
