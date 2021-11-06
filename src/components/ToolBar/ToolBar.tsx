import React, { Dispatch, SetStateAction, useState } from 'react';
import { ToolActions } from '../Picker/Picker';
import Stepper from '../Stepper/Stepper';
import * as Styled from './ToolBar.styles';

type ToolBarProps = {
  handleZoomIn: () => void;
  handleZoomOut: () => void;
  handleMove: () => void;
  handlePickPixel: () => void;
  handlePickSquare: () => void;
  handlePickEclipse: () => void;
  pickerSize: number;
  handlePickerSize: Dispatch<SetStateAction<number>>;
};

const ToolBar: React.FC<ToolBarProps> = ({
  handleZoomIn,
  handleZoomOut,
  handleMove,
  handlePickPixel,
  handlePickSquare,
  handlePickEclipse,
  pickerSize,
  handlePickerSize,
}) => {
  const [showStepper, setShowStepper] = useState(false);

  const handleZoomInClick = () => {
    handleZoomIn();
    setShowStepper(false);
  };
  const handleZoomOutClick = () => {
    handleZoomOut();
    setShowStepper(false);
  };
  const handleMoveClick = () => {
    handleMove();
    setShowStepper(false);
  };

  const handlePickPixelClick = () => {
    handlePickPixel();
    setShowStepper(false);
  };

  const handlePickSquareClick = () => {
    handlePickSquare();
    setShowStepper(true);
  };

  const handlePickEclipseClick = () => {
    handlePickEclipse();
    setShowStepper(true);
  };

  return (
    <Styled.ToolBarWrapper>
      <Styled.ToolWrapper onClick={handleZoomInClick}>Zin</Styled.ToolWrapper>
      <Styled.ToolWrapper onClick={handleZoomOutClick}>Zout</Styled.ToolWrapper>
      <Styled.ToolWrapper onClick={handleMoveClick}>Move</Styled.ToolWrapper>
      <Styled.ToolWrapper onClick={handlePickPixelClick}>
        Pix
      </Styled.ToolWrapper>
      <Styled.ToolWrapper onClick={handlePickSquareClick}>
        Sq
      </Styled.ToolWrapper>
      <Styled.ToolWrapper onClick={handlePickEclipseClick}>
        Ec
      </Styled.ToolWrapper>
      {showStepper && (
        <Stepper pickerSize={pickerSize} handlePickerSize={handlePickerSize} />
      )}
    </Styled.ToolBarWrapper>
  );
};

export default ToolBar;
