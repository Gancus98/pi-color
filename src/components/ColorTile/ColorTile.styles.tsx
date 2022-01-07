import styled, { css } from 'styled-components';
import { TileSize } from './ColorTile';

interface ColorProps {
  color: string;
  size: TileSize;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.2s all;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Color = styled.div<ColorProps>`
  background-color: ${p => p.color};
  border-radius: 40%;
  ${({ size }) => {
    if (size === TileSize.Small) {
      return css`
        width: 32px;
        height: 32px;
      `;
    } else if (size === TileSize.Big) {
      return css`
        width: 92px;
        height: 92px;
      `;
    } else {
      return css`
        width: 56px;
        height: 56px;
      `;
    }
  }}
  @media (max-width: 768px) {
    ${({ size }) => {
      if (size === TileSize.Small) {
        return css`
          width: 20px;
          height: 20px;
        `;
      } else if (size === TileSize.Big) {
        return css`
          width: 42px;
          height: 42px;
        `;
      } else {
        return css`
          width: 32px;
          height: 32px;
        `;
      }
    }}
  }
`;

export const Label = styled.p`
  font-size: 12px;
  @media (max-width: 768px) {
    font-size: 8px;
  }
`;
