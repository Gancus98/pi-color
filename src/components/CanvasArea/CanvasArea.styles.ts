import styled from 'styled-components'
import { colors } from '../../utils/theme';
import { ToolActions } from '../Picker/Picker';

interface Props {
    active: boolean;
    action?: ToolActions
  }

export const Input = styled.input`
    height:40px;
    border: none;
    &.file-upload-button {
        background-color: red;
    }
    @media (max-width: 768px) {
        height:32px;
  }
`;

export const Wrapper = styled.div<Props>`
    display: flex;
    position: relative;
    flex-direction: column;

    width: 704px;
    height: 494px;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        width: 290px;
        height: 250px;
  }

`;

export const Button = styled.button`
    width: 120px;
    height: 40px;
    background-color: ${colors.text};
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s all;
    &:hover {
        transform: scale(1.1)
    }
    @media (max-width: 768px) {
        width: 80px;
        height: 32px;
        font-size: 8px;
  }
`

export const ButtonWrapper = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        height: 42px;
  }
`

export const CanvasWrapper = styled.div<Props>`
  width: 700px;
  height: 450px;
  position: relative;
  overflow: hidden;
  border: ${p => p.active ? '2px solid green' : 'none'};
  box-shadow: 0 0 8px 0 ${colors.shadowColor};
  &:hover {
        cursor: ${({action}) => {
            if (action === ToolActions.Move) return 'move'
            else if (action === ToolActions.PixelPick) return 'crosshair'
            else return 'auto'
            }};
    }
    @media (max-width: 768px) {
        width: 290px;
        height: 250px;
  }
`;

export const Cursor = styled.div`
   width: 20px;
   height: 20px;
   top: 0;
   left: 150px;
   border: 1px solid red;
   position:absolute; 
   will-change: left, top;
   pointer-events: none;

`;