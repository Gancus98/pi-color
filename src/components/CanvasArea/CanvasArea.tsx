import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as Styled from '../CanvasArea/CanvasArea.styles';
import { ToolActions } from '../Picker/Picker';

const CANVAS_BASE_COLOR = '#222222';

type PickerProps = {
  setPickedColor: (color: string) => void;
  action?: ToolActions;
  setAction: (newAction: ToolActions) => void;
};

const CanvasArea: React.FC<PickerProps> = ({
  setPickedColor,
  action,
  setAction,
}) => {
  const canvasRef = useRef(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const [isDropActive, setIsDropActive] = useState(false);
  const [image, setImage] = useState<CanvasImageSource>();
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const [imageStartX, setImageStartX] = useState(0);
  const [imageStartY, setImageStartY] = useState(0);

  useEffect(() => {
    const canvas: HTMLCanvasElement =
      canvasRef.current as unknown as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      if (action === ToolActions.ZoomIn) {
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
      } else if (action === ToolActions.ZoomOut) {
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
      }
    }
    setAction(ToolActions.None);
  }, [action, image, setAction]);

  const handleInputChange = (input: any) => {
    if (input.target.files && input.target.files[0]) {
      putFileOnCanvas(input.target.files[0]);
    }
  };

  const putFileOnCanvas = useCallback((file: File) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      let loadedImage = new Image();
      reader.onload = () => {
        loadedImage.src = reader.result?.toString() as string;
        setImage(loadedImage);
        loadedImage.onload = () => {
          const canvas: HTMLCanvasElement =
            canvasRef.current as unknown as HTMLCanvasElement;
          const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
          const [imageScaledWidth, imageScaledHeight] =
            findCorrectSize(loadedImage);
          ctx.drawImage(loadedImage, 0, 0, imageScaledWidth, imageScaledHeight);
        };
      };
    }
  }, []);

  const findCorrectSize = (image: HTMLImageElement) => {
    const ratio = 750 / image.width;
    const width = image.width * ratio;
    const height = image.height * ratio;
    return [width, height];
  };

  useEffect(() => {
    const canvas: HTMLCanvasElement =
      canvasRef.current as unknown as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      ctx.fillStyle = CANVAS_BASE_COLOR;
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
  }, []);

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
      event.preventDefault();
      putFileOnCanvas(event?.dataTransfer?.files[0] as File);
      setIsDropActive(false);
    };

    canvas.onmousedown = event => {
      setIsMouseDown(true);
      console.log(event.clientX, event.clientY, mouseX, mouseY);
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    canvas.onmouseup = event => {
      console.log(event.clientX - mouseX);
      setImageStartX(prev => prev + event.clientX - mouseX);
      setImageStartY(prev => prev + event.clientY - mouseY);

      setIsMouseDown(false);
    };

    canvas.onmousemove = event => {
      if (isMouseDown) {
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        ctx.fillStyle = CANVAS_BASE_COLOR;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        const [imageScaledWidth, imageScaledHeight] = findCorrectSize(
          image as HTMLImageElement
        );
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
  ]);

  const handleCanvasClick = (event: any) => {
    const canvas: HTMLCanvasElement =
      canvasRef.current as unknown as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const { x: xOffset, y: yOffset } = ctx.canvas.getBoundingClientRect();

    const imageData = ctx.getImageData(
      event.pageX - xOffset,
      event.pageY - yOffset,
      1,
      1
    ).data;
    const color =
      'rgb(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ')';
    setPickedColor(color.toString());
  };

  const handleButtonClick = (event: any) => {
    fileInput.current!.click();
  };

  return (
    <Styled.Wrapper active={isDropActive}>
      <Styled.Button onClick={handleButtonClick}>Upload a file</Styled.Button>
      <input
        type="file"
        ref={fileInput}
        style={{ display: 'none' }}
        onChange={handleInputChange}
      />
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        width={700}
        height={450}
      />
    </Styled.Wrapper>
  );
};

export default CanvasArea;
