import React from 'react';
import {
  generatePaletteFromOneColor,
  getHTMLColorName,
  rgbToCmyk,
  rgbToHex,
  rgbToHSL,
  rgbToHSV,
} from '../../utils/colorTransforms';
import Button from '../Button/Button';
import ColorTile from '../ColorTile/ColorTile';
import * as Styled from './PaletteGenerator.styles';

type PaletteGeneratorProps = {
  color: string;
};

const PaletteGenerator: React.FC<PaletteGeneratorProps> = ({ color }) => {
  const [r, g, b] = color.split(',');
  const rValue = parseInt(r);
  const gValue = parseInt(g);
  const bValue = parseInt(b);

  const complementaryColorValues = generatePaletteFromOneColor(
    rValue,
    gValue,
    bValue
  );
  const complementaryColor = `rgb(${complementaryColorValues[0]},${complementaryColorValues[1]},${complementaryColorValues[2]})`;

  return (
    <Styled.Wrapper color={rgbToHex(rValue, gValue, bValue)}>
      <Button
        onClick={() => {
          console.log('hello');
        }}
      >
        Generate
      </Button>
      <Styled.TilesWrapper>
        <ColorTile color={`rgb(${rValue},${gValue},${bValue})`}></ColorTile>
        <ColorTile color={complementaryColor}></ColorTile>
      </Styled.TilesWrapper>
    </Styled.Wrapper>
  );
};

export default PaletteGenerator;
