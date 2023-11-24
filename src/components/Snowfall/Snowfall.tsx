import React, { useRef, useEffect, useCallback } from 'react';

import Canvas, { Render } from "../Canvas/Canvas";

type Snowflake = {
  x: number;
  y: number;
  size: number;
  speed: number;
};

const Snowfall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snowflakes: Snowflake[] = [];
  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;
  const offset = 2;
  const frameInterval = 1000 / 30; // Устанавливаем желаемый интервал между кадрами

  // useEffect(() => {
  //   let lastFrameTime = 0;

  //   if (canvasRef.current) {
  //     const canvas = canvasRef.current;
  //     const ctx = canvas.getContext('2d');

  //     if (ctx) {
  //       canvas.width = canvasWidth;
  //       canvas.height = canvasHeight;

  //       for (let i = 0; i < 20; i++) {
  //         const size = Math.random() * 3 + 1;
  //         const x = Math.random() * canvasWidth;
  //         const y = Math.random() * canvasHeight;
  //         snowflakes.push({
  //           x,
  //           y,
  //           size,
  //           speed: map(size, 1, 4, 1, 4),
  //         });
  //       }

  //       const render = (timestamp: number) => {
  //         if (timestamp - lastFrameTime > frameInterval) {
  //           lastFrameTime = timestamp;

  //           canvas.width = canvasWidth;
  //           canvas.height = canvasHeight;

  //           ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  //           snowflakes.forEach((flake) => {

  //             ctx.beginPath();
  //             ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
  //             ctx.fillStyle = '#d8eaff';
  //             ctx.fill();
  //             ctx.closePath();

  //             flake.y += flake.speed;
  //             if (flake.y > canvasHeight) {
  //               flake.y = 0;
  //               flake.x = Math.random() * canvasWidth;
  //             }

  //             flake.x += Math.sin(flake.y / 20);
  //             if (flake.x > canvasWidth || flake.x < 0) {
  //               flake.x = Math.random() * canvasWidth;
  //             }

  //           });
  //         }

  //         requestAnimationFrame(render);
  //       };

  //       requestAnimationFrame(render);
  //     }
  //   }
  // }, [canvasWidth, canvasHeight]);

  const map = (value: number, x1: number, x2: number, y1: number, y2: number): number => {
    return ((value - x1) * (y2 - y1)) / (x2 - x1) + y1;
  };

  const init: Render = useCallback(async ({
    width,
    height,
    quality,
    context,
    next
  }) => {

    for (let i = 0; i < 20; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * canvasWidth;
      const y = Math.random() * canvasHeight;
      snowflakes.push({
        x,
        y,
        size,
        speed: map(size, 1, 4, 1, 4),
      });
    }

    next()

  }, [])

  const render: Render = useCallback(async ({
    width,
    height,
    quality,
    context,
    next
  }) => {

    context.clearRect(0, 0, canvasWidth, canvasHeight);

    snowflakes.forEach((flake) => {

      context.beginPath();
      context.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
      context.fillStyle = '#d8eaff';
      context.fill();
      context.closePath();

      flake.y += flake.speed;
      if (flake.y > canvasHeight) {
        flake.y = 0;
        flake.x = Math.random() * canvasWidth;
      }

      flake.x += Math.sin(flake.y / 20);
      if (flake.x > canvasWidth || flake.x < 0) {
        flake.x = Math.random() * canvasWidth;
      }

    });

    next();

  }, []);

  return (
    <Canvas
      quality={1}
      limitFrames={30}
      onRender={render}
      onInitial={init}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 1
      }}
    />
  )

  // return <canvas ref={canvasRef} style={{
  //   position: "absolute",
  //   width: "100%",
  //   height: "100%",
  //   zIndex: 1
  // }} />;
};

export default Snowfall;