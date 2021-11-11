import React from 'react';
import {
  getHTMLColorName,
  rgbToCmyk,
  rgbToHex,
  rgbToHSL,
  rgbToHSV,
} from '../../utils/colorTransforms';
import * as Styled from './ColorInfo.styles';

type ColorInfoProps = {
  color: string;
};

const ColorInfo: React.FC<ColorInfoProps> = ({ color }) => {
  const [r, g, b] = color.split(',');
  const rValue = parseInt(r);
  const gValue = parseInt(g);
  const bValue = parseInt(b);

  return (
    <Styled.Wrapper color={rgbToHex(rValue, gValue, bValue)}>
      <p>
        RGB: {rValue}, {gValue}, {bValue}
      </p>
      <p>HEX: {rgbToHex(rValue, gValue, bValue)}</p>
      <p>CMYK: {rgbToCmyk(rValue, gValue, bValue)}</p>
      <p>HSV: {rgbToHSV(rValue, gValue, bValue)}</p>
      <p>HSL: {rgbToHSL(rValue, gValue, bValue)}</p>
      <p>HTML color: {getHTMLColorName(rValue, gValue, bValue)}</p>
    </Styled.Wrapper>
  );
};

export default ColorInfo;
