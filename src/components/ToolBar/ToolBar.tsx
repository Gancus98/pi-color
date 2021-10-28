import React from 'react';
import * as Styled from './ToolBar.styles';

type ToolBarProps = {
  handleZoomIn: () => void;
  handleZoomOut: () => void;
};

const ToolBar: React.FC<ToolBarProps> = ({ handleZoomIn, handleZoomOut }) => {
  const handleZoomInSelected = () => {
    handleZoomIn();
    // console.log('ToolBar ZoomIn Selected');
  };

  const handleZoomOutSelected = () => {
    handleZoomOut();
    // console.log('ToolBar ZoomOut Selected');
  };

  const handleMoveSelected = () => {
    // console.log('ToolBar Move Selected');
  };

  return (
    <Styled.ToolBarWrapper>
      <Styled.ToolWrapper onClick={handleZoomInSelected}>
        Zin
      </Styled.ToolWrapper>
      <Styled.ToolWrapper onClick={handleZoomOutSelected}>
        Zout
      </Styled.ToolWrapper>
      <Styled.ToolWrapper onClick={handleMoveSelected}>Move</Styled.ToolWrapper>
      <Styled.ToolWrapper></Styled.ToolWrapper>
      <Styled.ToolWrapper></Styled.ToolWrapper>
      <Styled.ToolWrapper></Styled.ToolWrapper>
    </Styled.ToolBarWrapper>
  );
};

export default ToolBar;
