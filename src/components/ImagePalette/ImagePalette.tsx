import React, { useState } from 'react';
import Button from '../Button/Button';
import ColorTile from '../ColorTile/ColorTile';
import * as Styled from './ImagePalette.styles';

const MAX_COLORS_NUMBER = 8;
const MIN_COLORS_NUMBER = 2;

type ImagePaletteProps = {
  imageColors: string[];
};

const ImagePalette: React.FC<ImagePaletteProps> = ({ imageColors }) => {
  const [numberOfColors, setNumberOfColors] = useState(MAX_COLORS_NUMBER);
  console.log(numberOfColors);
  const handleIncreasePalette = () => {
    setNumberOfColors(prev => {
      if (prev < MAX_COLORS_NUMBER) {
        return prev + 1;
      }
      return prev;
    });
  };

  const handleDecreasePalette = () => {
    setNumberOfColors(prev => {
      if (prev > MIN_COLORS_NUMBER) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <Styled.Wrapper>
      {imageColors.map(
        (imgColor, index) =>
          index < numberOfColors && <ColorTile key={index} color={imgColor} />
      )}
      <Styled.ButtonsWrapper>
        <Button onClick={handleDecreasePalette}>-</Button>
        <Button onClick={handleIncreasePalette}>+</Button>
      </Styled.ButtonsWrapper>
    </Styled.Wrapper>
  );
};

export default ImagePalette;
