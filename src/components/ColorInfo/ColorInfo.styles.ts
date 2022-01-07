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

export const HeaderWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const SaveWrapper = styled.div`
display: flex;
`

export const SaveIcon = styled.img`
height: 24px;
  width: 24px;
  cursor: pointer;
  &:hover {
  transform: scale(1.2)
}
`

export const Save = styled.p`
color: ${colors.text};
font-size: 16px;
font-weight: bold;
margin-right: 8px;
`

export const MainWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  gap: 16px;
`;

export const Color = styled.div<Props>`
    margin-top: 12px;
    width: 80px;
    border-radius: 16px;
    height: 94%;
    background-color: ${p => p.color};
    @media (max-width: 1400px) {
    height: 272px;
  }
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