/** @jsx jsx */
import { jsx, css, Global, ClassNames } from '@emotion/react';

const container = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 36px;
`;

const btnStyle = css`
  cursor: pointer;
  &:hover {
    filter: brightness(150%);
  }
`;

const imageStyle = (isSelected: boolean) => css`
  opacity: ${isSelected ? '1' : '0.3'};
`;

const styles = {
  container,
  imageStyle,
  btnStyle,
};

export default styles;
