import React, { useState } from 'react';
import CanvasArea from '../CanvasArea/CanvasArea';
import ColorInfo from '../ColorInfo/ColorInfo';
import * as Styled from './Picker.styles';

type PickerProps = {};

const Picker: React.FC<PickerProps> = () => {
  const [pickedColor, setPickedColor] = useState('');

  const handlePickedColor = (color: string) => {
    setPickedColor(color);
  };

  return (
    <Styled.PickerWrapper>
      <CanvasArea setPickedColor={handlePickedColor} />
      <ColorInfo color={pickedColor} />
    </Styled.PickerWrapper>
  );
};

export default Picker;
