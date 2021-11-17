import styled from 'styled-components'

interface Props {
    color: string;
  }

export const Wrapper = styled.div<Props>`
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TilesWrapper = styled.div`
    display: flex;
    justify-content: center;
`