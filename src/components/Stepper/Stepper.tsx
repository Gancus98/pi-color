import React, { Dispatch, SetStateAction } from 'react';
import * as Styled from './Stepper.styles';

type StepperProps = {
  pickerSize: number;
  handlePickerSize: Dispatch<SetStateAction<number>>;
};

const NavButton: React.FC<StepperProps> = ({
  pickerSize,
  handlePickerSize,
}) => {
  const handlePickerSizeChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    handlePickerSize(parseInt(event.currentTarget.value));
  };

  return (
    <Styled.Wrapper>
      <Styled.TopWrapper>
        <Styled.Text>Picker size:</Styled.Text>
        <Styled.Number>{pickerSize}</Styled.Number>
      </Styled.TopWrapper>
      <Styled.Stepper
        type="range"
        min="2"
        max="100"
        value={pickerSize}
        onChange={handlePickerSizeChange}
      />
    </Styled.Wrapper>
  );
};

export default NavButton;
