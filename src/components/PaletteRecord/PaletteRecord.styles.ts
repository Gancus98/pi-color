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
      height: 32px;
      font-size: 10px;
      padding: 0 4px;
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

export const ColorsWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content:flex-end;
    gap: 16px;
    @media (max-width: 768px) {
      gap: 2px;
    }
`

export const Input = styled.input`
@media (max-width: 768px) {
      font-size: 8px;
      max-width: 60px;
    }
`