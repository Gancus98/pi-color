import React, { useEffect, useRef } from 'react';
import * as Styled from '../CanvasArea/CanvasArea.styles';

type PickerProps = {
  setPickedColor: (color: string) => void;
};

const CanvasArea: React.FC<PickerProps> = ({ setPickedColor }) => {
  const canvasRef = useRef(null);
  const handleNewImage = (input: any) => {
    if (input.target.files && input.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(input.target.files[0]);
      console.log(reader);
      let imgObj = new Image();
      reader.onload = event => {
        imgObj.src = reader.result?.toString() as string;
        imgObj.onload = event => {
          const canvas: HTMLCanvasElement =
            canvasRef.current as unknown as HTMLCanvasElement;
          const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
          ctx.drawImage(imgObj, 0, 0, 500, 300);
        };
      };
    }
  };

  useEffect(() => {
    const canvas: HTMLCanvasElement =
      canvasRef.current as unknown as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      ctx.fillStyle = '#ff0000';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
  }, []);

  const handleCanvasClick = (event: any) => {
    const canvas: HTMLCanvasElement =
      canvasRef.current as unknown as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    // console.log(ctx['canvas'].offsetHeight);
    const { x: xOffset, y: yOffset } = ctx.canvas.getBoundingClientRect();

    const imageData = ctx.getImageData(
      event.pageX - xOffset,
      event.pageY - yOffset,
      1,
      1
    ).data;
    console.log('Canvas clicked');
    const color =
      'rgb(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ')';
    setPickedColor(color.toString());
  };

  return (
    <div>
      <Styled.Input type="file" onChange={handleNewImage} />
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        width={640}
        height={425}
      />
    </div>
  );
};

export default CanvasArea;
