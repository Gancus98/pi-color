import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import * as Styled from './ColorTile.styles';

export enum TileSize {
  Normal = 'Normal',
  Small = 'Small',
  Big = 'VerySmall',
}

type ColorTileProps = {
  color: string;
  size?: TileSize;
  label?: boolean;
};

const ColorTile: React.FC<ColorTileProps> = ({
  color,
  size = TileSize.Normal,
  label = false,
}) => {
  const handleCopyClick = () => {
    navigator.clipboard.writeText(color);
    toast.success(`Color "${color}" copied to clipboard`, {
      position: 'bottom-left',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
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
      <Styled.Wrapper title="Click to copy" onClick={handleCopyClick}>
        <Styled.Color color={color} size={size}></Styled.Color>
        {label && <Styled.Label>{color}</Styled.Label>}
      </Styled.Wrapper>
    </>
  );
};

export default ColorTile;
