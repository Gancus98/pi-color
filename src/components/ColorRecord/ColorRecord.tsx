import React, { useState } from 'react';
import { removeFromDb, setNewColorName } from '../../utils/dbHelper';
import ColorTile from '../ColorTile/ColorTile';
import * as Styled from './ColorRecord.styles';
import { TileSize } from '../ColorTile/ColorTile';

type ColorRecordProps = {
  recordKey: string;
  color: string;
  name: string;
};

const ColorRecord: React.FC<ColorRecordProps> = ({
  recordKey,
  color,
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
    setNewColorName(
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
          <Styled.Typography>{color}</Styled.Typography>
          <ColorTile color={color} size={TileSize.Small} />
          <Styled.RemoveColor onClick={handleDelete}>Delete</Styled.RemoveColor>
        </Styled.Wrapper>
      )}
    </>
  );
};

export default ColorRecord;
