import React, { useState } from 'react';
import CanvasArea from '../CanvasArea/CanvasArea';
import ColorInfo from '../ColorInfo/ColorInfo';
import ToolBar from '../ToolBar/ToolBar';
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

  const handlePickedColor = (color: string) => {
    setPickedColor(color);
  };

  const handleZoomIn = () => {
    console.log('Handle zoom click');

    setAction(ToolActions.ZoomIn);
  };

  const handleZoomOut = () => {
    console.log('Handle zoom click');
    setAction(ToolActions.ZoomOut);
  };

  const handleSetAction = (newAction: ToolActions) => {
    setAction(newAction);
  };

  return (
    <Styled.PickerWrapper>
      <Styled.LeftSection>
        <CanvasArea
          setPickedColor={handlePickedColor}
          action={action}
          setAction={handleSetAction}
        />
        <ToolBar handleZoomIn={handleZoomIn} handleZoomOut={handleZoomOut} />
      </Styled.LeftSection>
      <button onClick={handleZoomIn}>Zomm in</button>
      <button onClick={handleZoomOut}>Zomm out</button>
      <ColorInfo color={pickedColor} />
    </Styled.PickerWrapper>
  );
};

export default Picker;
