import styled from 'styled-components'
import { colors } from '../../utils/theme';

export const NavWrapper = styled.div`
    width: 100vw;
    height: 70px;
    background-color: ${colors.primary};
    display: flex;
    justify-content: center;
`;

export const NavButtonsWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-end;
`;

