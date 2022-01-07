import styled from 'styled-components'
import { colors } from '../../utils/theme';

interface NavButtonProps {
    active: boolean
}

export const NavButton = styled.button<NavButtonProps>`
    width: 160px;
    height: 56px;
    background-color: ${({active}) => active ? colors.text : colors.secondaryLight};
    outline: none;
    border: none;
    bottom: 0;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    color: ${({active}) => active ? colors.secondaryLight : colors.text};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    @media (max-width: 768px) {
    width: 86px;
    height: 32px;
    font-size: 12px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    } 
`;