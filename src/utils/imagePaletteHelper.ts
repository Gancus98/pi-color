import { createPixelsArray, pixelsAvgColor } from "./manipulateImageArrays";

export const getImageColorsPalette = (ctx: CanvasRenderingContext2D, imageWidth: number, imageHeight: number) => {
    const imageData = ctx.getImageData(0, 0, imageWidth, imageHeight).data;
    const pixelsArray = createPixelsArray(imageData)

    let buckets: any[] = splitPixels(pixelsArray)
    let newBuckets: any[] = [];
    let i = 0;
    while (i < buckets.length) {
        newBuckets.push(...splitPixels(buckets[i]))
        if (i === 4) {
            break
        }
        if (i === buckets.length-1) {
            buckets = newBuckets
            newBuckets = []
            i = 0;
            continue
        }
        i+=1;
    }
    const colorsPalette = buckets.map(pixelsBucket => pixelsAvgColor(pixelsBucket))
    return colorsPalette.map(color => `rgb(${color[0]}, ${color[1]}, ${color[2]})`)
}

const maxValue = (array: Array<number>) => array.reduce((max: number, v: number) => max >= v ? max : v);
const minValue = (array: Array<number>) => array.reduce((min: number, v: number) => min <= v ? min : v);

const splitPixels = (pixelsArray: number[][]) => {
    const redPixels: number[] = [];
    const greenPixels: number[] = [];
    const bluePixels: number[] = [];
    
    pixelsArray.forEach(pixel => {
        redPixels.push(pixel[0])
        greenPixels.push(pixel[1])
        bluePixels.push(pixel[1])
    })


    const redRange = maxValue(redPixels) - minValue(redPixels);
    const greenRange = maxValue(greenPixels) - minValue(greenPixels);
    const blueRange = maxValue(bluePixels) - minValue(bluePixels);

    let sortColor = 0;
    if (redRange >= greenRange && redRange >= blueRange) {
        sortColor = 0
    } else if (greenRange >= redRange && greenRange >= blueRange) {
        sortColor = 1
    } else {
        sortColor = 2
    }

    pixelsArray.sort((a, b) => {
        if (a[sortColor] < b[sortColor]) {
            return 1;
        }
        if (a[sortColor] > b[sortColor]) {
            return -1;
        }
        return 0
    });
    const half = Math.ceil(pixelsArray.length / 2);    
    const firstHalf = pixelsArray.slice(0, half)
    const secondHalf = pixelsArray.slice(-half)

    return [firstHalf, secondHalf]
}
