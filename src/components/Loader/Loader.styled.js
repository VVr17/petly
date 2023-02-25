import { theme } from 'constants/theme';
import styled, { keyframes } from 'styled-components';

const pawAnimation = keyframes`
	0%{
		opacity: 1;
	}
	50%{
		opacity: 0;
	}
	100%{
		opacity: 0;
	}
`;

export const LoaderContainer = styled.div`
  position: absolute;
  z-index: 5;
  top: 35%;
  left: 50%;
  transform-origin: 50% 50%;
  transform: rotate(90deg) translate(-50%, 0%);
  font-size: 50px;
  width: 1em;
  height: 3em;
`;

export const Paw = styled.div`
  width: 1em;
  height: 1em;
  animation: ${pawAnimation} 2050ms ease-in-out infinite;
  opacity: 0;

  svg {
    width: 100%;
    height: 100%;
  }

  &:nth-child(odd) {
    transform: rotate(-10deg);
  }

  &:nth-child(even) {
    transform: rotate(10deg) translate(125%, 0);
  }

  ${Array.from({ length: 6 }).map(
    (_, i) => `&:nth-child(${i + 1}) {
      animation-delay: ${(i * -1 + 6) * 0.25}s;
    }`
  )}

  .no-cssanimations & {
    opacity: 1;
  }
`;

export const StyledSvg = styled.svg`
  fill: #ff634e;
  display: block;
`;
