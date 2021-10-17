import React from 'react';
import CanvasArea from '../CanvasArea';
import NavButton from '../NavButton/NavButton';
import * as Styled from './Picker.styles';

type PickerProps = {};

const Picker: React.FC<PickerProps> = () => {
  return (
    <Styled.PickerWrapper>
      <CanvasArea />
    </Styled.PickerWrapper>
  );
};

export default Picker;
