import styled from 'styled-components'
import { colors } from '../../utils/theme';

export const Button = styled.button`
    padding: 8px 16px;
    height: 40px;
    background-color: ${colors.secondary};
    cursor: pointer;
    border: none;
    &:hover {
        background-color: ${colors.secondaryHover};
    }
`;