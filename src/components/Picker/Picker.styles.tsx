import styled from 'styled-components';
import { colors } from '../../utils/theme';

export const PickerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${colors.background};
`;

export const LeftSection = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const RightSection = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const MainWrapper = styled.div`
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  display: flex;
  margin: 4px;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.primary};
  border: 1px solid ${colors.shadowColor};
  background-color: ${colors.secondaryLight};
  box-shadow: 0 0 16px 0 ${colors.shadowColor};
  border-radius: 16px;
  margin-right: -32px;
`;
