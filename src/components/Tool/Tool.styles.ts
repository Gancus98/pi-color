import styled from 'styled-components';
import { colors } from '../../utils/theme';

interface ToolProps {
  active: boolean;
}

export const Wrapper = styled.div<ToolProps>`
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background-color: ${colors.text};
  border: ${({active}) => active ? `3px solid ${colors.primary}` : `none`};
  transition: 0.25s transform;
  &:hover {
    transform: scale(1.2) translateY(-10%);
  }
  cursor: pointer;
`;

export const IconImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;
