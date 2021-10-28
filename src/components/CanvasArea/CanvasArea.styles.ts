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
    flex-direction: column;
    background-color: ${p => p.active ? 'green' : 'blue'};
    width: 704px;
    height: 494px;
    align-items: center;
    justify-content: center;
    &:hover {
        cursor: move;
    }
`;

export const Button = styled.button`
    width: 120px;
    height: 40px;
    background-color: orange;
    border: none;
    border-radius: 5px;
`
