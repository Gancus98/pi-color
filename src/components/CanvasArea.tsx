import React, { useEffect, useRef } from 'react';

const CanvasArea: React.FC = () => {
    const canvasRef = useRef(null);
    const handleNewImage = (input : any) => {
        if (input.target.files && input.target.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(input.target.files[0]);
            console.log(reader)
            let imgObj = new Image(); 
            reader.onload = (event) => {
                imgObj.src = reader.result?.toString() as string;
                imgObj.onload = (event) => {
                const canvas : HTMLCanvasElement  = canvasRef.current as unknown as HTMLCanvasElement
                const ctx = canvas.getContext('2d') as CanvasRenderingContext2D 
                ctx.drawImage(imgObj, 0, 0, 500, 300);
                }
            }
        }
    }

    useEffect(() => {
        const canvas : HTMLCanvasElement  = canvasRef.current as unknown as HTMLCanvasElement
        if (canvas) {
            const ctx = canvas.getContext('2d') as CanvasRenderingContext2D 
            ctx.fillStyle = '#ff0000'
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        }
      }, [])

    return (
        <div>
            <input type="file" onChange={handleNewImage} />
            <canvas ref={canvasRef} width={640} height={425} />          
        </div>
    );
};

export default CanvasArea