import React from 'react';
import * as Styled from './ColorTile.styles';

type ColorTileProps = {
  color: string;
};

const ColorTile: React.FC<ColorTileProps> = ({ color }) => {
  return <Styled.Wrapper color={color}></Styled.Wrapper>;
};

export default ColorTile;
