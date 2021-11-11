import styled from 'styled-components'

interface Props {
    active: boolean;
  }

export const Input = styled.input`
    height:40px;
    background-color: yellow;
    border: none;
    &.file-upload-button {
        background-color: red;
    }
`;

export const Wrapper = styled.div<Props>`
    display: flex;
    position: relative;
    flex-direction: column;
    background-color: ${p => p.active ? 'green' : 'blue'};
    width: 704px;
    height: 494px;
    align-items: center;
    justify-content: center;
    &:hover {
        cursor: pointer;
    }
`;

export const Button = styled.button`
    width: 120px;
    height: 40px;
    background-color: orange;
    border: none;
    border-radius: 5px;
`

export const CanvasWrapper = styled.div`
  width: 700px;
  height: 450px;
  position: relative;
  overflow: hidden;
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