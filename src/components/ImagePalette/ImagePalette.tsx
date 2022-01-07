import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { rgbToHex } from '../../utils/colorTransforms';
import { addNewPalette } from '../../utils/dbHelper';
import Button from '../Button/Button';
import ColorTile from '../ColorTile/ColorTile';
import * as Styled from './ImagePalette.styles';

const MAX_COLORS_NUMBER = 6;
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

  const handleSavePalette = () => {
    console.log(imageColors.length);
    if (imageColors.length !== 0) {
      toast.success(`Palette saved successfully`, {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      addNewPalette(
        imageColors.reduce((initial: string[], currentColor: string, index) => {
          if (index < numberOfColors) {
            const [r, g, b] = currentColor.split(',');
            const rValue = parseInt(r.replace('rgb(', ''));
            const gValue = parseInt(g);
            const bValue = parseInt(b.replace(')', ''));
            return [...initial, rgbToHex(rValue, gValue, bValue)];
          }
          return [...initial];
        }, [])
      );
    } else {
      toast.error(`Can't save empty palette`, {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }
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
        <Styled.SaveWrapper>
          <Styled.Save>Save palette</Styled.Save>
          <Styled.SaveIcon
            onClick={handleSavePalette}
            alt="copy icon"
            src="/img/save.png"
          />
        </Styled.SaveWrapper>
        <Styled.TilesWrapper>
          {imageColors.map(
            (imgColor, index) =>
              index < numberOfColors && (
                <ColorTile key={index} color={imgColor} />
              )
          )}
        </Styled.TilesWrapper>
        <Styled.ButtonsWrapper>
          <Button onClick={handleDecreasePalette}>-</Button>
          <Button onClick={handleIncreasePalette}>+</Button>
        </Styled.ButtonsWrapper>
      </Styled.Wrapper>
    </>
  );
};

export default ImagePalette;
