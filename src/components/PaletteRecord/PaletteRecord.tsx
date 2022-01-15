import React, { useState } from 'react';
import { removeFromDb, setNewPaletteName } from '../../utils/dbHelper';
import ColorTile, { TileSize } from '../ColorTile/ColorTile';
import * as Styled from './PaletteRecord.styles';

type PaletteRecordProps = {
  recordKey: string;
  name: string;
  colors: string[];
};

const PaletteRecord: React.FC<PaletteRecordProps> = ({
  recordKey,
  colors,
  name,
}) => {
  const [colorName, setColorName] = useState(name);
  const [removed, setRemoved] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const handleDelete = () => {
    removeFromDb(recordKey);
    setRemoved(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorName(e.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleStopEdit();
    }
  };

  const handleStopEdit = () => {
    setIsEdited(false);
    setNewPaletteName(
      recordKey,
      colorName.length > 0 ? colorName : 'Undefined name'
    );
  };

  return (
    <>
      {!removed && (
        <Styled.Wrapper>
          <Styled.SingleCell>
            {isEdited ? (
              <Styled.Input
                value={colorName}
                onChange={handleNameChange}
                onKeyDown={handleKeyDown}
                onBlur={handleStopEdit}
                autoFocus
              />
            ) : (
              <Styled.Typography onClick={() => setIsEdited(true)}>
                {colorName}
              </Styled.Typography>
            )}
          </Styled.SingleCell>
          <Styled.ColorsWrapper>
            {colors.map((color, index) => {
              return (
                <ColorTile
                  key={index}
                  color={color}
                  size={TileSize.Small}
                  label
                />
              );
            })}
          </Styled.ColorsWrapper>
          <Styled.RemoveColor onClick={handleDelete}>Delete</Styled.RemoveColor>
        </Styled.Wrapper>
      )}
    </>
  );
};

export default PaletteRecord;
