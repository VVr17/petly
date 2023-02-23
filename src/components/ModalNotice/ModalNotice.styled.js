import styled from 'styled-components';
import { theme, breakpoints } from '../../constants/theme';


export const NoticeContainer = styled.div`
   width: 100%;
   margin-top: 40px;
`;

export const PetInfo = styled.div`
margin-bottom: 20px;
    @media (min-width: ${breakpoints[1]}px) {
        display: flex;
    }
`;

export const ImgWrapper = styled.div`
    position: relative;
`;

export const PetsImg = styled.img`
    margin-bottom: 20px;
    border-radius: 0px 0px 40px 40px;
    object-fit: cover;

    @media (min-width: ${breakpoints[0]}px) {
        width: 240px;
        height: 240px;
    }

    @media (min-width: ${breakpoints[1]}px) {
        width: 288px;
        height: 328px;
        margin-right: 20px;
        margin-bottom: 28px;
    }
`;

export const Category = styled.span`
    position: absolute;
    top: 20px;
    background: ${theme.colors.secondaryBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 20px 20px 0;

    @media (min-width: ${breakpoints[0]}px) {
        width: 158px;
        height: 28px;
    }
`;

export const CategoryName = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: ${theme.colors.mainText};
`;


export const TextContent = styled.div`
    @media (min-width: ${breakpoints[1]}px) {
        margin-left: 20px;
    }
`

export const Title = styled.h1`
   display: inline-block;
   font-weight: 700;
   font-size: 24px;
   line-height: 33px;
   letter-spacing: -0.01em;
   margin-bottom: 16px;
   width: 250px;

    @media (min-width: ${breakpoints[1]}px) {
        font-size: 28px;
        line-height: 38px;
        margin-bottom: 20px;
    }
`;

export const PetData = styled.div`
    display: flex;
    margin-bottom: 28px;

    @media (min-width: ${breakpoints[1]}px) {
        margin-bottom: 0;
    }
`;

export const CategoryData = styled.ul`
    flex-grow: 1;

    @media (min-width: ${breakpoints[1]}px) {
        flex-grow: 0;
        
    }
`;

export const DataItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 8px;
    }

    @media (min-width: ${breakpoints[1]}px) {
        flex-grow: 0;
        margin-right: 51px;
    }
`;

export const CategoryText = styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;

    @media (min-width: ${breakpoints[1]}px) {
        font-size: 16px;
        line-height: 22px;
    }
`;

export const ValueData = styled.ul``;

export const ValueText = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    white-space: nowrap;
    @media (min-width: ${breakpoints[1]}px) {
        font-size: 16px;
        line-height: 22px;
    }
`;

export const Comments = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 40px;

    @media (min-width: ${breakpoints[1]}px) {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 32px;
    }
`;

export const CommentsTitle = styled.span`
    font-weight: 600;
`;


export const Buttons = styled.div`
&:not(:last-child) {
   margin-left: 20px;
};
    @media (min-width: ${breakpoints[1]}px) {
        display: flex;
        justify-content: end;
        padding-right: 16px;
    }
`;

export const ButtonDiv = styled.div`
// background-color: blue;
`