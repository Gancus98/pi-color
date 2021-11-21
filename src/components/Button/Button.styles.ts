import styled from 'styled-components'
import { colors } from '../../utils/theme';

export const Button = styled.button`
    padding: 8px 16px;
    height: 40px;
    background-color: ${colors.text};
    cursor: pointer;
    border: none;
    transition: 0.25s transform;
    &:hover {
        background-color: ${colors.primary};
        /* transform: scale(1.2); */
    }
    border-radius: 16px;
`;