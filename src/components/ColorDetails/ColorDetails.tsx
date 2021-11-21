import React from 'react';
import * as Styled from './ColorDetails.styles';

type ColorDetailsProps = {
  colorDescription: string;
  colorValue: string;
};

const ColorDetails: React.FC<ColorDetailsProps> = ({
  colorDescription,
  colorValue,
}) => {
  const handleCopyClick = () => {
    navigator.clipboard.writeText(colorValue);
  };

  return (
    <Styled.Wrapper>
      {/* <Styled.DescriptionWrapper> */}
      <Styled.ColorDescription>{colorDescription}</Styled.ColorDescription>
      {/* </Styled.DescriptionWrapper> */}
      <Styled.CopyWrapper onClick={handleCopyClick}>
        <Styled.ColorValue>{colorValue}</Styled.ColorValue>
        <Styled.CopyIcon alt="copy icon" src="/img/copy.png" />
      </Styled.CopyWrapper>
    </Styled.Wrapper>
  );
};

export default ColorDetails;
