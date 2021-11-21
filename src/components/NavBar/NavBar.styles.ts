import styled from 'styled-components'
import { colors } from '../../utils/theme';

export const NavWrapper = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${colors.navbar};
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid ${colors.text};
`;

export const NavButtonsWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-end;
    margin-right: 80px;
`;

export const Logo = styled.img`
  width: 62px;
  height: 62px;
  object-fit: cover;
`

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 80px;
`

export const Title = styled.h1`
    color: #ccc;
`