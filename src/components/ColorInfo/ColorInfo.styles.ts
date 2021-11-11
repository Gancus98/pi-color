import styled from 'styled-components'

interface Props {
    color: string;
  }

export const Wrapper = styled.div<Props>`
    width: 160px;
    height: 156px;
    background-color: ${p => p.color};

`;