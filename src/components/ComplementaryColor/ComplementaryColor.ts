import styled from 'styled-components'
import { colors } from '../../utils/theme';

export const TilesWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 16px;
    color: ${colors.text}
`

export const Wrapper = styled.div`
    width: 100%;
    height: 40%;  
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const WindowWrapper = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid ${colors.shadowColor};
  background-color: ${colors.secondaryLight};
  box-shadow: 0 0 16px 0 ${colors.shadowColor};
  border-radius:16px;
`;

export const Title = styled.p`
color: ${colors.text};
font-size: 16px;
font-weight: bold;
`