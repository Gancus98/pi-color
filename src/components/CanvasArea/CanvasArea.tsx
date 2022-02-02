import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { getImageColorsPalette } from '../../utils/imagePaletteHelper';
import {
  createPixelsArray,
  pixelsAvgColor,
  reduceToEclipse,
} from '../../utils/manipulateImageArrays';
import useWindowWidth from '../../utils/useWindowWidth';
import * as Styled from '../CanvasArea/CanvasArea.styles';
import { ToolActions } from '../Picker/Picker';

const CANVAS_BASE_COLOR = '#222222';

type PickerProps = {
  image: CanvasImageSource;
  handleSetImage: (image: CanvasImageSource) => void;
  setPickedColor: (color: string) => void;
  action?: ToolActions;
  setAction: (newAction: ToolActions) => void;
  pickerSize: number;
  handlePaletteColors: Dispatch<SetStateAction<string[]>>;
};

const CanvasArea: React.FC<PickerProps> = ({
  image,
  handleSetImage,
  setPickedColor,
  action,
  setAction,
  pickerSize,
  handlePaletteColors,
}) => {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const fileInput = useRef<HTMLInputElement>(null);
  const [isDropActive, setIsDropActive] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isTouchDown, setIsTouchDown] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const [imageStartX, setImageStartX] = useState(0);
  const [imageStartY, setImageStartY] = useState(0);

  const { width } = useWindowWidth();

  const findCorrectSize = useCallback(
    (image: HTMLImageElement) => {
      if (image.width > image.height) {
        if (width > 768) {
          if (image.width < 700 && image.height < 450) {
            return [image.width, image.height];
          }
          const ratio = 700 / image.width;
          const width = image.width * ratio;
          const height = image.height * ratio;
          return [width, height];
        } else {
          const ratio = 280 / image.width;
          const width = image.width * ratio;
          const height = image.height * ratio;
          return [width, height];
        }
      } else {
        if (width > 768) {
          const ratio = 450 / image.height;
          const width = image.width * ratio;
          const height = image.height * ratio;
          return [width, height];
        } else {
          const ratio = 220 / image.height;
          const width = image.width * ratio;
          const height = image.height * ratio;
          return [width, height];
        }
      }
    },
    [width]
  );

  useEffect(() => {
    const canvas: HTMLCanvasElement =
      canvasRef.current as unknown as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      if (action === ToolActions.ZoomIn) {
        clearCanvas(ctx);
        ctx.imageSmoothingEnabled = false;
        ctx.scale(2, 2);
        const [imageScaledWidth, imageScaledHeight] = findCorrectSize(
          image as HTMLImageElement
        );
        ctx.drawImage(
          image as CanvasImageSource,
          0,
          0,
          imageScaledWidth,
          imageScaledHeight
        );
        setAction(ToolActions.None);
      } else if (action === ToolActions.ZoomOut) {
        clearCanvas(ctx);
        ctx.scale(0.5, 0.5);
        const [imageScaledWidth, imageScaledHeight] = findCorrectSize(
          image as HTMLImageElement
        );
        ctx.drawImage(
          image as CanvasImageSource,
          0,
          0,
          imageScaledWidth,
          imageScaledHeight
        );
        setAction(ToolActions.None);
      }
    }
  }, [action, findCorrectSize, handlePaletteColors, image, setAction]);

  const handleInputChange = (input: any) => {
    if (input.target.files && input.target.files[0]) {
      const canvas: HTMLCanvasElement =
        canvasRef.current as unknown as HTMLCanvasElement;
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      clearCanvas(ctx);
      putFileOnCanvas(input.target.files[0]);
    }
    input.target.value = '';
  };

  const putFileOnCanvas = useCallback(
    (file: File) => {
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        let loadedImage = new Image();
        reader.onload = () => {
          loadedImage.src = reader.result?.toString() as string;
          handleSetImage(loadedImage);
          loadedImage.onload = () => {
            const canvas: HTMLCanvasElement =
              canvasRef.current as unknown as HTMLCanvasElement;
            const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
            const [imageScaledWidth, imageScaledHeight] =
              findCorrectSize(loadedImage);
            ctx.drawImage(
              loadedImage,
              0,
              0,
              imageScaledWidth,
              imageScaledHeight
            );
            handlePaletteColors(
              getImageColorsPalette(ctx, imageScaledWidth, imageScaledHeight)
            );
          };
        };
      }
    },
    [findCorrectSize, handlePaletteColors, handleSetImage]
  );

  const clearCanvas = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = CANVAS_BASE_COLOR;
    ctx.fillRect(0, 0, 7000, 4500);
  };

  useEffect(() => {
    const canvas: HTMLCanvasElement =
      canvasRef.current as unknown as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    clearCanvas(ctx);
  }, []);

  useEffect(() => {
    if (image) {
      const canvas: HTMLCanvasElement =
        canvasRef.current as unknown as HTMLCanvasElement;
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      const [imageScaledWidth, imageScaledHeight] = findCorrectSize(
        image as HTMLImageElement
      );
      ctx.drawImage(image, 0, 0, imageScaledWidth, imageScaledHeight);
      handlePaletteColors(
        getImageColorsPalette(ctx, imageScaledWidth, imageScaledHeight)
      );
    }
  }, [findCorrectSize, handlePaletteColors, image]);

  useEffect(() => {
    const canvas: HTMLCanvasElement =
      canvasRef.current as unknown as HTMLCanvasElement;

    canvas.ondragover = event => {
      event.preventDefault();
    };

    canvas.ondragenter = event => {
      event.preventDefault();
      setIsDropActive(true);
    };

    canvas.ondragleave = event => {
      event.preventDefault();
      setIsDropActive(false);
    };

    canvas.ondrop = event => {
      const canvas: HTMLCanvasElement =
        canvasRef.current as unknown as HTMLCanvasElement;
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      clearCanvas(ctx);
      event.preventDefault();
      putFileOnCanvas(event?.dataTransfer?.files[0] as File);
      setIsDropActive(false);
    };

    canvas.ontouchstart = event => {
      setIsTouchDown(true);
      setMouseX(event.changedTouches[0].clientX);
      setMouseY(event.changedTouches[0].clientY);
    };

    canvas.ontouchend = event => {
      setImageStartX(prev => prev + event.changedTouches[0].clientX - mouseX);
      setImageStartY(prev => prev + event.changedTouches[0].clientY - mouseY);
      setIsTouchDown(false);
    };

    canvas.ontouchmove = event => {
      event.preventDefault();
      const canvas: HTMLCanvasElement =
        canvasRef.current as unknown as HTMLCanvasElement;
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      const { x: xOffset, y: yOffset } = ctx.canvas.getBoundingClientRect();
      setCursorX(event.changedTouches[0].pageX - xOffset);
      setCursorY(event.changedTouches[0].pageY - yOffset);

      if (isTouchDown && action === ToolActions.Move) {
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        const [imageScaledWidth, imageScaledHeight] = findCorrectSize(
          image as HTMLImageElement
        );
        clearCanvas(ctx);

        ctx.drawImage(
          image as CanvasImageSource,
          event.changedTouches[0].clientX - mouseX + imageStartX,
          event.changedTouches[0].clientY - mouseY + imageStartY,
          imageScaledWidth,
          imageScaledHeight
        );
      }
    };

    canvas.onmousedown = event => {
      setIsMouseDown(true);
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    canvas.onmouseup = event => {
      setImageStartX(prev => prev + event.clientX - mouseX);
      setImageStartY(prev => prev + event.clientY - mouseY);

      setIsMouseDown(false);
    };

    canvas.onmousemove = event => {
      const canvas: HTMLCanvasElement =
        canvasRef.current as unknown as HTMLCanvasElement;
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      const { x: xOffset, y: yOffset } = ctx.canvas.getBoundingClientRect();
      setCursorX(event.pageX - xOffset);
      setCursorY(event.pageY - yOffset);

      if (isMouseDown && action === ToolActions.Move) {
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        const [imageScaledWidth, imageScaledHeight] = findCorrectSize(
          image as HTMLImageElement
        );
        clearCanvas(ctx);

        ctx.drawImage(
          image as CanvasImageSource,
          event.clientX - mouseX + imageStartX,
          event.clientY - mouseY + imageStartY,
          imageScaledWidth,
          imageScaledHeight
        );
      }
    };
  }, [
    isMouseDown,
    image,
    putFileOnCanvas,
    mouseX,
    mouseY,
    imageStartX,
    imageStartY,
    action,
    findCorrectSize,
    isTouchDown,
  ]);

  const handleCanvasClick = (event: any) => {
    const canvas: HTMLCanvasElement =
      canvasRef.current as unknown as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const { x: xOffset, y: yOffset } = ctx.canvas.getBoundingClientRect();
    switch (action) {
      case ToolActions.PixelPick: {
        const imageData = ctx.getImageData(
          event.pageX - xOffset,
          event.pageY - yOffset,
          1,
          1
        ).data;
        const color = +imageData[0] + ',' + imageData[1] + ',' + imageData[2];
        setPickedColor(color.toString());
        break;
      }
      case ToolActions.SquarePick: {
        const imageData = ctx.getImageData(
          event.pageX - xOffset,
          event.pageY - yOffset,
          pickerSize,
          pickerSize
        ).data;
        const pixels = createPixelsArray(imageData);
        const color = pixelsAvgColor(pixels);
        setPickedColor(color.toString());
        break;
      }
      case ToolActions.CirclePick: {
        const imageData = ctx.getImageData(
          event.pageX - xOffset,
          event.pageY - yOffset,
          pickerSize,
          pickerSize
        ).data;
        const pixels = createPixelsArray(imageData);
        const pixelsInEclipse = reduceToEclipse(pixels, pickerSize / 2);
        const color = pixelsAvgColor(pixelsInEclipse);
        setPickedColor(color.toString());
        break;
      }
      default: {
      }
    }
  };

  const handleButtonClick = (event: any) => {
    fileInput.current!.click();
  };

  return (
    <Styled.Wrapper active={isDropActive}>
      <Styled.ButtonWrapper>
        <Styled.Button onClick={handleButtonClick}>Upload a file</Styled.Button>
        <input
          type="file"
          ref={fileInput}
          style={{ display: 'none' }}
          onChange={handleInputChange}
        />
      </Styled.ButtonWrapper>
      <Styled.CanvasWrapper action={action} active={isDropActive}>
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          width={width > 768 ? 700 : 280}
          height={width > 768 ? 450 : 220}
        />
        {(action === ToolActions.SquarePick ||
          action === ToolActions.CirclePick) && (
          <Styled.Cursor
            style={{
              top: cursorY,
              left: cursorX,
              width: pickerSize,
              height: pickerSize,
              borderRadius: `${
                action === ToolActions.CirclePick ? '50%' : '0'
              }`,
            }}
            ref={cursorRef}
          />
        )}
      </Styled.CanvasWrapper>
    </Styled.Wrapper>
  );
};

export default CanvasArea;
