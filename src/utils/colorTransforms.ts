const numberToHex = (c: number) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

export const rgbToHex = (r: number,g: number,b: number) => {
    return ("#" + numberToHex(r) + numberToHex(g) + numberToHex(b));
}

export const rgbToCmyk = (r: number,g: number,b: number) => {
    const r01 = r / 255;
    const g01 = g / 255;
    const b01 = b / 255;
    const black = 1 - Math.max(r01, g01, b01);
    const cyan = (1 - r01 - black) / (1 - black)
    const magenta = (1 - g01 - black) / (1 -black)
    const yellow = (1- b01 - black) / (1-black)
    return [Math.round(cyan*100), Math.round(magenta*100), Math.round(yellow*100), Math.round(black*100)].toString()
};

export const rgbToHSV = (r: number,g: number,b: number) => {
    const r01 = r / 255;
    const g01 = g / 255;
    const b01 = b / 255;
    const max = Math.max(r01, g01, b01);
    const min = Math.min(r01, g01, b01);
    const c = max - min;
    const V = max;
    let H = 0;
    if (c === 0) {
        H = 0;
    } else if (r01 === max) {
        H = ((((g01 - b01)/c) % 6) * 60)
    } else if (g01 === max) {
        H = ((((b01 - r01)/c) + 2) * 60)
    } else {
        H = ((((r01 - g01)/c) + 4) * 60)
    }
    let S = 0;
    if (c !== 0) {
        S = c/V;
    }
    return [Math.round(H),Math.round(S*100),Math.round(V*100)].toString()
};

export const rgbToHSL = (r: number,g: number,b: number) => {
    const r01 = r / 255;
    const g01 = g / 255;
    const b01 = b / 255;
    const max = Math.max(r01, g01, b01);
    const min = Math.min(r01, g01, b01);
    const c = max - min;
    let H = 0;
    if (c === 0) {
        H = 0;
    } else if (r01 === max) {
        H = ((((g01 - b01)/c) % 6) * 60)
    } else if (g01 === max) {
        H = ((((b01 - r01)/c) + 2) * 60)
    } else {
        H = ((((r01 - g01)/c) + 4) * 60)
    }
    const L = (max + min) / 2

    let S = 0;
    if (c !== 0) {
        S = c / (1 - Math.abs(2*L-1));
    }
    return [Math.round(H),Math.round(S*100),Math.round(L*100)].toString()
};

const COLORS = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
    "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887",
    "cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff",
    "darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
    "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1",
    "darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff",
    "firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff",
    "gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f",
    "honeydew":"#f0fff0","hotpink":"#ff69b4",
    "indianred ":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
    "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2",
    "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
    "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
    "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
    "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
    "navajowhite":"#ffdead","navy":"#000080",
    "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
    "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
    "rebeccapurple":"#663399","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
    "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4",
    "tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
    "violet":"#ee82ee",
    "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
    "yellow":"#ffff00","yellowgreen":"#9acd32"};

    export const getHTMLColorName = (r: number,g: number,b: number) => {
        const hex = rgbToHex(r, g, b);
        const keys = Object.keys(COLORS);
        const values = Object.values(COLORS);
        let findedIndex = undefined;
        values.forEach((el, index) => {
            if (el === hex) {
                findedIndex = index;
            }
        })
        if (findedIndex) {
            return keys[findedIndex]
        } else {
            return "HTML color dont exist"
        }
    };