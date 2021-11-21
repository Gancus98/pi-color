import React, { Dispatch, SetStateAction, useState } from 'react';
import { ToolActions } from '../Picker/Picker';
import Stepper from '../Stepper/Stepper';
import Tool from '../Tool/Tool';
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
  action?: ToolActions;
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
  action,
}) => {
  const [showStepper, setShowStepper] = useState(false);
  console.log(action);

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

  const tools = [
    {
      toolAction: '',
      alt: 'zoom in icon',
      src: '/img/zoomIn.png',
      action: handleZoomInClick,
    },
    {
      toolAction: '',
      alt: 'zoom out icon',
      src: '/img/zoomOut.png',
      action: handleZoomOutClick,
    },
    {
      toolAction: ToolActions.Move,
      alt: 'move',
      src: '/img/moveImg.png',
      action: handleMoveClick,
    },
    {
      toolAction: ToolActions.PixelPick,
      alt: 'pixel picker',
      src: '/img/pixelPicker.png',
      action: handlePickPixelClick,
    },
    {
      toolAction: ToolActions.SquarePick,
      alt: 'square picker',
      src: '/img/squarePicker.png',
      action: handlePickSquareClick,
    },
    {
      toolAction: ToolActions.CirclePick,
      alt: 'eclipse picker',
      src: '/img/eclipsePicker.png',
      action: handlePickEclipseClick,
    },
  ];

  return (
    <Styled.ToolBarWrapper>
      {tools.map(tool => (
        <Tool
          src={tool.src}
          alt={tool.alt}
          onClick={tool.action}
          isActive={action === tool.toolAction}
        />
      ))}
      {showStepper && (
        <Stepper pickerSize={pickerSize} handlePickerSize={handlePickerSize} />
      )}
    </Styled.ToolBarWrapper>
  );
};

export default ToolBar;
