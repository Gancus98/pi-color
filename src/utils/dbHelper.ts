import { set, get, keys, del } from 'idb-keyval';

const KEY_INDEX_NAME = 'keyindex';

export const addNewColor = async (colorHex: string) => {
    if (await get(KEY_INDEX_NAME) === undefined) {
        set(KEY_INDEX_NAME, 1)
    }
    const newID = await get(KEY_INDEX_NAME)
    await set(KEY_INDEX_NAME, parseInt(newID)+1)
    const key = `color${newID?.toString()}`
    set(key, `Unnamed color;${colorHex}`)
}

export const addNewPalette = async (colorsHex: string[]) => {
    if (await get(KEY_INDEX_NAME) === undefined) {
        set(KEY_INDEX_NAME, 1)
    }
    const newID = await get(KEY_INDEX_NAME)
    await set(KEY_INDEX_NAME, parseInt(newID)+1)
    const key = `palette${newID?.toString()}`
    let value = `Unnamed palette`;
    colorsHex.forEach(colorHex => {
        value += `;${colorHex}`;
    })
    set(key, value)
}


export const getAllColors = async () => {
   try {
        const allKeys = await keys().then()
        const colorKeys = allKeys.filter(key => key.toString().includes('color'));
        const colorValues = colorKeys.map(async key => {
            return `${key};${await get(key)}`;
            }
        );
        const colorValuesResolved = await Promise.all(colorValues);
    return colorValuesResolved;
    } catch {
    }
}

export const getAllPalettes = async () => {
    try {
         const allKeys = await keys().then()
         const paletteKeys = allKeys.filter(key => key.toString().includes('palette'));
         const paletteValues = paletteKeys.map(async key => {
             return `${key};${await get(key)}`;
             }
         );
         const paletteValuesResolved = await Promise.all(paletteValues);
     return paletteValuesResolved;
     } catch {
     }
 }

export const removeFromDb = (key: string) => {
    del(key);
}

export const setNewColorName = async (key: string, newName: string) => {
    const value = await get(key);
    const splittedValue = value.split(';');
    set(key, `${newName};${splittedValue[1]}`);
}

export const setNewPaletteName = async (key: string, newName: string) => {
    const value = await get(key);
    const splittedValue = value.split(';');
    const newSplittedValue = splittedValue.map((element: string, index: number) => {
        if (index === 0) return newName
        return element
    })
    set(key, newSplittedValue.join(';'));
}