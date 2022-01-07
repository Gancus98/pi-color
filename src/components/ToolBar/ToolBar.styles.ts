import styled from 'styled-components';
import { colors } from '../../utils/theme';

export const ToolBarWrapper = styled.div`
  width: 704px;
  height: 56px;
  /* background-color: white; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  @media (max-width: 768px) {
    width: 300px;
    height: 36px;
  }
`;

export const ToolWrapper = styled.div`
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  box-shadow: 0 0 4px 0 ${colors.shadowColor};
&:hover {
  background-color: ${colors.secondaryLight};
  box-shadow: 0 0 16px 0 ${colors.primary};
}
`

export const IconImg = styled.img`
width: 40px;
height: 40px;
object-fit: cover;
`
