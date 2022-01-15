import React, { useEffect, useState } from 'react';
import { getAllColors, getAllPalettes } from '../../utils/dbHelper';
import ColorRecord from '../ColorRecord/ColorRecord';
import PaletteRecord from '../PaletteRecord/PaletteRecord';
import * as Styled from './Library.styles';

type ColorRecordType = {
  recordKey: string;
  color: string;
  name: string;
};

type PaletteRecordType = {
  recordKey: string;
  name: string;
  colors: string[];
};

type LibraryProps = {};

const Library: React.FC<LibraryProps> = () => {
  const [colors, setColors] = useState<ColorRecordType[]>([]);
  const [palettes, setPalettes] = useState<PaletteRecordType[]>([]);

  useEffect(() => {
    (async () => {
      const values = await getAllColors();
      const rvalues: ColorRecordType[] = [];
      values?.forEach(val => {
        const data = val.split(';');
        rvalues.push({
          recordKey: data[0],
          name: data[1],
          color: data[2],
        });
      });
      setColors(rvalues);

      const paletteValues = await getAllPalettes();
      const palettes: PaletteRecordType[] = [];
      paletteValues?.forEach(val => {
        const data = val.split(';');
        palettes.push({
          recordKey: data[0],
          name: data[1],
          colors: data.reduce((initial: string[], el: string, index) => {
            if (index >= 2) {
              return [...initial, data[index]];
            }
            return initial;
          }, []),
        });
      });
      setPalettes(palettes);
    })();
  }, []);

  const renderedColors = colors?.map((color, index) => {
    return (
      <ColorRecord
        key={index}
        recordKey={color.recordKey}
        name={color.name}
        color={color.color}
      ></ColorRecord>
    );
  });

  const renderedPalettes = palettes?.map((color, index) => {
    return (
      <PaletteRecord
        key={index}
        recordKey={color.recordKey}
        name={color.name}
        colors={color.colors}
      ></PaletteRecord>
    );
  });

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Title>Colors:</Styled.Title>
        {renderedColors}
      </Styled.Container>
      <Styled.Container>
        <Styled.Title>Palettes:</Styled.Title>
        {renderedPalettes}
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Library;
