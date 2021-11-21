import React from 'react';
import {
  getHTMLColorName,
  rgbToCmyk,
  rgbToHex,
  rgbToHSL,
  rgbToHSV,
} from '../../utils/colorTransforms';
import ColorDetails from '../ColorDetails/ColorDetails';
import * as Styled from './ColorInfo.styles';

type ColorInfoProps = {
  color: string;
};

const ColorInfo: React.FC<ColorInfoProps> = ({ color }) => {
  const [r, g, b] = color.split(',');
  const rValue = parseInt(r);
  const gValue = parseInt(g);
  const bValue = parseInt(b);
  console.log('here', color);

  return (
    <Styled.Wrapper>
      <Styled.WindowWrapper>
        <Styled.Title>Color details:</Styled.Title>
        <Styled.MainWrapper>
          <Styled.Color color={rgbToHex(rValue, gValue, bValue)} />
          <Styled.ColorsInfoWrapper>
            <ColorDetails
              colorDescription="RGB:"
              colorValue={`rgb(${rValue}, ${gValue}, ${bValue})`}
            />
            <ColorDetails
              colorDescription="HEX:"
              colorValue={`${rgbToHex(rValue, gValue, bValue)}`}
            />
            <ColorDetails
              colorDescription="CMYK:"
              colorValue={`${rgbToCmyk(rValue, gValue, bValue)}`}
            />
            <ColorDetails
              colorDescription="HSV:"
              colorValue={rgbToHSV(rValue, gValue, bValue)}
            />
            <ColorDetails
              colorDescription="HSL:"
              colorValue={rgbToHSL(rValue, gValue, bValue)}
            />
            <ColorDetails
              colorDescription="HTML color:"
              colorValue={getHTMLColorName(rValue, gValue, bValue)}
            />
          </Styled.ColorsInfoWrapper>
        </Styled.MainWrapper>
      </Styled.WindowWrapper>
    </Styled.Wrapper>
  );
};

export default ColorInfo;
