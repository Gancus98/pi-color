import styled from 'styled-components'

interface Props {
    color: string;
  }

export const Wrapper = styled.div<Props>`
    width: 160px;
    height: 50%;
    background-color: ${p => p.color};

`;