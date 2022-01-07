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
    const newName =
      e.target.value.length > 0 ? e.target.value : 'Unnamed color';
    setColorName(newName);
    setNewColorName(recordKey, newName);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setIsEdited(false);
    }
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
                onBlur={() => setIsEdited(false)}
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
