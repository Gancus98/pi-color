import styled from 'styled-components'
import { colors } from '../../utils/theme';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100px;
    height: 500px;
    margin-right: 16px;
    @media (max-width: 768px) {
    width: 40px;
    height: 100%;
  }
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    margin-bottom: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    align-self: flex-end;
    justify-self: flex-end;
    gap: 4px;
    margin-top: 16px;
`;

export const Button = styled.button`
    padding: 8px 16px;
    height: 40px;
    background-color: ${colors.text};
    cursor: pointer;
    border: none;
    transition: 0.25s transform;
    &:hover {
        background-color: ${colors.primary};
    }
    border-radius: 16px;
    @media (max-width: 768px) {
    height: 24px;
    padding: 8px 8px;
  }
`;

export const TilesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100px;
    height: 80%;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
    width: 40px;
  }
`;

export const SaveWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 16px;
@media (max-width: 768px) {
    flex-direction: column;
  }
`

export const SaveIcon = styled.img`
height: 24px;
  width: 24px;
  cursor: pointer;
  &:hover {
  transform: scale(1.2)
}
`

export const Save = styled.p`
color: ${colors.text};
font-size: 16px;
font-weight: bold;
margin-right: 8px;
@media (max-width: 768px) {
    font-size: 8px;;
  }
`