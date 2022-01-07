import styled from 'styled-components'
import { colors } from '../../utils/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${colors.background};
  padding: 56px;
  gap: 56px;
  box-sizing: border-box;
  @media (max-width: 1400px) {
    flex-direction: column;
    padding: 16px;
    gap: 16px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border: 1px solid ${colors.shadowColor};
  background-color: ${colors.secondaryLight};
  box-shadow: 0 0 16px 0 ${colors.shadowColor};
  border-radius:16px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  overflow: auto;
`

export const Title = styled.p`
color: ${colors.text};
font-size: 16px;
font-weight: bold;
margin-bottom: 16px;
`