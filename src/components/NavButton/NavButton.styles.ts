import styled from 'styled-components'
import { colors } from '../../utils/theme';

export const NavButton = styled.button`
    width: 160px;
    height: 56px;
    background-color: ${colors.secondary};
    outline: none;
    border: none;
    bottom: 0;
    cursor: pointer;
    &:hover {
        background-color: ${colors.secondaryHover};
    }
    &:nth-child(1) {
        border-top-left-radius: 30px;
    }
    &:nth-child(2) {
        border-top-right-radius: 30px;
    }
`;