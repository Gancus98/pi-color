import styled from 'styled-components'
import { colors } from '../../utils/theme';

export const NavWrapper = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${colors.navbar};
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid ${colors.text};
    @media (max-width: 768px) {
        height: 40px;
    }
`;

export const NavButtonsWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-end;
    margin-right: 80px;
    @media (max-width: 768px) {
        margin-right: 16px;
    }
`;

export const Logo = styled.img`
  width: 62px;
  height: 62px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    }
`

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 80px;
    @media (max-width: 768px) {
        margin-left: 16px;
    }
`

export const Title = styled.h1`
    color: #ccc;
    @media (max-width: 768px) {
        font-size: 16px;
    } 
`