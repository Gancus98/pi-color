import styled from 'styled-components';
import { colors } from '../../utils/theme';


export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: ${colors.secondary};
  box-shadow: 0 0 6px 0px ${colors.shadowColor};
  border-radius: 8px;
  margin-top: 8px;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  transition: 2s all;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex: 1; */
`;

export const ColorDescription = styled.p`
  color: ${colors.text};
`;

export const ColorValue = styled.p`
  color: ${colors.text};
  margin-right: 8px;
`;

export const CopyIcon = styled.img`
  height: 24px;
  width: 24px;
  &:hover {
  transform: scale(1.2)
}
`;

export const CopyWrapper = styled.div`
display: flex;
align-items: center;
justify-content: right;
/* flex: 1; */
  height: 28px;
  /* width: 28px; */
  /* border: 1px solid ${colors.primary}; */
  border-radius: 8px;
  transition: 0.3 transform;
  cursor: pointer;

`;