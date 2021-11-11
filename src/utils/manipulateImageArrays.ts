export const createPixelsArray = (imageData: Uint8ClampedArray, reduceEmpty: boolean = true) => {
    const pixels = [];
    for (let x = 0; x < imageData.length; x+=4) {
        if (reduceEmpty) {
            if (imageData[x + 3] === 0) {
                continue
            } else {
                pixels.push([imageData[x],imageData[x+1],imageData[x+2]])
            }
        } else {
            pixels.push([imageData[x],imageData[x+1],imageData[x+2]])
        } 
    }
    return pixels;
}

export const pixelsAvgColor = (pixels: number[][]) => {
    const totalPixelsNumber = pixels.length;
    let redPixelsSum = 0;
    let greenPixelsSum = 0;
    let bluePixelsSum = 0;
    pixels.forEach((pixel) => {
        redPixelsSum += pixel[0];
        greenPixelsSum += pixel[1];
        bluePixelsSum += pixel[2];
    })
    const avgPixelColor = [Math.round(redPixelsSum/totalPixelsNumber), Math.round(greenPixelsSum/totalPixelsNumber), Math.round(bluePixelsSum/totalPixelsNumber)]
    return avgPixelColor
}

export const reduceToEclipse = (pixels: number[][], radius: number) => {
    const pixels2d = []
    const totalLength = pixels.length;
    const len = Math.sqrt(totalLength)
    let x = 0;
    for (let i = 0; i < len; i+=1) {
        const subarr = []
        for (let j = 0; j < len; j+=1) {
            subarr.push(pixels[x])
            x+=1
        }
        pixels2d.push(subarr)
    }
    const pixelsInEclipse = []
    for (let i = 0; i < len; i+=1) {
        for (let j = 0; j < len; j+=1) {
            if (getDistanceBetweenPoints(radius,i, radius,j) <= radius) {
                pixelsInEclipse.push(pixels2d[i][j])
            }
        }
    }
    return pixelsInEclipse
}

const getDistanceBetweenPoints = (x1: number, x2: number, y1: number, y2: number) => {
    return (Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2)))
}