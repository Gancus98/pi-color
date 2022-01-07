import styled from 'styled-components'
import { colors } from '../../utils/theme';

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 16px;
  width: 100%;
  height: 56px;
  display: flex;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 12px;
  background-color: ${colors.secondary};
  box-shadow: 0 0 6px 0px ${colors.shadowColor};
  color: ${colors.text};
  @media (max-width: 768px) {
      padding: 4px;;
      font-size: 10px;
    }
`;

export const RemoveColor = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.error};
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    box-sizing: border-box;
    &:hover {
        outline: 1px solid ${colors.error};
    };
    @media (max-width: 768px) {
      padding: 2px 4px;
      font-size: 10px;
    }
`

export const Typography = styled.p`
`

export const SingleCell = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: left;
  cursor: pointer;
`

export const Input = styled.input`
@media (max-width: 768px) {
      font-size: 8px;
      max-width: 60px;
    }
`