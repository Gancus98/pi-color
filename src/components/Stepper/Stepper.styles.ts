import styled from 'styled-components'
import { colors } from '../../utils/theme';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Stepper = styled.input`
`;

export const Number = styled.span`
color: ${colors.text};
`;

export const TopWrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const Text = styled.p`
color: ${colors.text}
`;