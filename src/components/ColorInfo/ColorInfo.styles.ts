import styled from 'styled-components'
import { colors } from '../../utils/theme';

interface Props {
    color: string;
  }

export const Wrapper = styled.div`
    width: 100%;
    height: 50%;  
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

export const MainWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  gap: 16px;
`;

export const Color = styled.div<Props>`
    width: 80px;
    border-radius: 16px;
    height: 100%;
    background-color: ${p => p.color};
`;

export const ColorsInfoWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.p`
color: ${colors.text};
font-size: 16px;
font-weight: bold;
`