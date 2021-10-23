import React, { useEffect, useRef, useState } from 'react';
import * as Styled from '../CanvasArea/CanvasArea.styles';

type PickerProps = {
  setPickedColor: (color: string) => void;
};

const CanvasArea: React.FC<PickerProps> = ({ setPickedColor }) => {
  const canvasRef = useRef(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const [isDropActive, setIsDropActive] = useState(false);

  const handleInputChange = (input: any) => {
    if (input.target.files && input.target.files[0]) {
      putFileOnCanvas(input.target.files[0]);
    }
  };

  const putFileOnCanvas = (file: File) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      let loadedImage = new Image();
      reader.onload = () => {
        loadedImage.src = reader.result?.toString() as string;
        loadedImage.onload = () => {
          const canvas: HTMLCanvasElement =
            canvasRef.current as unknown as HTMLCanvasElement;
          const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
          ctx.drawImage(loadedImage, 0, 0, 700, 450);
        };
      };
    }
  };

  // initial canvas setup
  useEffect(() => {
    const canvas: HTMLCanvasElement =
      canvasRef.current as unknown as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      ctx.fillStyle = '#cccccc';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

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
  }, []);

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
