type Draw = {
  ctx: CanvasRenderingContext2D;
  currentPoint: PointerEvent;
  prevPoint: Point | null;
};

type Point = { x: number; y: number };
