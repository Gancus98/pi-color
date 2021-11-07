import styled from 'styled-components';

interface ColorProps {
  color: string;
}

export const Wrapper = styled.div<ColorProps>`
  width: 56px;
  height: 56px;
  background-color: ${p => p.color};
`;
