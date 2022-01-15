import React, { useState } from 'react';
import CanvasArea from '../CanvasArea/CanvasArea';
import ColorInfo from '../ColorInfo/ColorInfo';
import ImagePalette from '../ImagePalette/ImagePalette';
import ToolBar from '../ToolBar/ToolBar';
import Complementary from '../Complementary/Complementary';
import * as Styled from './Picker.styles';

type PickerProps = {};

export enum ToolActions {
  ZoomIn = 'ZoomIn',
  ZoomOut = 'ZoomOut',
  Move = 'Move',
  PixelPick = 'PixelPick',
  SquarePick = 'SquarePick',
  CirclePick = 'CirclePick',
  None = 'None',
}

const Picker: React.FC<PickerProps> = () => {
  const [pickedColor, setPickedColor] = useState('');
  const [action, setAction] = useState<ToolActions>(ToolActions.None);
  const [pickerSize, setPickerSize] = useState(2);
  const [imagePaletteColors, setImagePaletteColors] = useState<string[]>([]);
  const handlePickedColor = (color: string) => {
    setPickedColor(color);
  };

  const handleZoomIn = () => {
    setAction(ToolActions.ZoomIn);
  };

  const handleZoomOut = () => {
    setAction(ToolActions.ZoomOut);
  };

  const handleMove = () => {
    setAction(ToolActions.Move);
  };

  const handlePickPixel = () => {
    setAction(ToolActions.PixelPick);
  };

  const handlePickSquare = () => {
    setAction(ToolActions.SquarePick);
  };

  const handlePickEclipse = () => {
    setAction(ToolActions.CirclePick);
  };

  const handleSetAction = (newAction: ToolActions) => {
    setAction(newAction);
  };

  return (
    <Styled.PickerWrapper>
      <Styled.LeftSection>
        <Styled.MainContainer>
          <Styled.MainWrapper>
            <CanvasArea
              setPickedColor={handlePickedColor}
              action={action}
              setAction={handleSetAction}
              pickerSize={pickerSize}
              handlePaletteColors={setImagePaletteColors}
            />
            <ToolBar
              handleZoomIn={handleZoomIn}
              handleZoomOut={handleZoomOut}
              handleMove={handleMove}
              handlePickPixel={handlePickPixel}
              handlePickSquare={handlePickSquare}
              handlePickEclipse={handlePickEclipse}
              pickerSize={pickerSize}
              handlePickerSize={setPickerSize}
              action={action}
            />
          </Styled.MainWrapper>
          <ImagePalette
            imageColors={imagePaletteColors}
            setPickedColor={handlePickedColor}
          />
        </Styled.MainContainer>
      </Styled.LeftSection>
      <Styled.RightSection>
        <ColorInfo color={!!pickedColor ? pickedColor : '255,255,255'} />
        <Complementary
          color={!!pickedColor ? pickedColor : '255,255,255'}
        ></Complementary>
      </Styled.RightSection>
    </Styled.PickerWrapper>
  );
};

export default Picker;
