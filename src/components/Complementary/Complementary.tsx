import React from 'react';
import {
  generatePaletteFromOneColor,
  rgbToHex,
} from '../../utils/colorTransforms';
import ColorTile, { TileSize } from '../ColorTile/ColorTile';
import * as Styled from './Complementary.styles';

type ComplementaryProps = {
  color: string;
};

const Complementary: React.FC<ComplementaryProps> = ({ color }) => {
  const [r, g, b] = color.split(',');
  const rValue = parseInt(r);
  const gValue = parseInt(g);
  const bValue = parseInt(b);

  const complementaryColorValues = generatePaletteFromOneColor(
    rValue,
    gValue,
    bValue
  );
  const complementaryColor = rgbToHex(
    complementaryColorValues[0],
    complementaryColorValues[1],
    complementaryColorValues[2]
  );

  return (
    <Styled.Wrapper color={rgbToHex(rValue, gValue, bValue)}>
      <Styled.WindowWrapper>
        <Styled.Title>Complementary color:</Styled.Title>
        <Styled.TilesWrapper>
          <ColorTile
            size={TileSize.Big}
            label
            color={rgbToHex(rValue, gValue, bValue)}
          ></ColorTile>
          <ColorTile
            size={TileSize.Big}
            label
            color={complementaryColor}
          ></ColorTile>
        </Styled.TilesWrapper>
      </Styled.WindowWrapper>
    </Styled.Wrapper>
  );
};

export default Complementary;
