import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import {
  getHTMLColorName,
  rgbToCmyk,
  rgbToHex,
  rgbToHSL,
  rgbToHSV,
} from '../../utils/colorTransforms';
import { addNewColor } from '../../utils/dbHelper';
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

  const handleSaveColor = () => {
    addNewColor(rgbToHex(rValue, gValue, bValue));
    toast.success(
      `Color ${rgbToHex(rValue, gValue, bValue)} saved successfully`,
      {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      }
    );
  };

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <Styled.Wrapper>
        <Styled.WindowWrapper>
          <Styled.HeaderWrapper>
            <Styled.Title>Color details:</Styled.Title>
            <Styled.SaveWrapper>
              <Styled.Save>Save color</Styled.Save>
              <Styled.SaveIcon
                onClick={handleSaveColor}
                alt="copy icon"
                src="/img/save.png"
              />
            </Styled.SaveWrapper>
          </Styled.HeaderWrapper>
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
    </>
  );
};

export default ColorInfo;
