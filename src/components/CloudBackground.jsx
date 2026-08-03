import { useEffect, useRef } from "react";

const CLOUDS = [
  { x: 0.04, y: 0.13, scale: 1.05, speed: 2.7, direction: 1 },
  { x: 0.56, y: 0.26, scale: 0.72, speed: 1.9, direction: -1 },
  { x: 0.2, y: 0.46, scale: 0.82, speed: 2.3, direction: 1 },
  { x: 0.72, y: 0.62, scale: 1.12, speed: 2.9, direction: -1 },
  { x: -0.04, y: 0.79, scale: 0.68, speed: 1.7, direction: 1 },
  { x: 0.46, y: 0.91, scale: 0.88, speed: 2.4, direction: 1 },
];

const PIECES = [
  { type: "outline", x: 0, y: 0, opacity: 0.58 },
  { type: "curl", x: -48, y: -3, size: 29, rotation: -0.2, opacity: 0.72 },
  { type: "curl", x: -8, y: -28, size: 38, rotation: 0.25, opacity: 0.8 },
  { type: "curl", x: 38, y: -12, size: 32, rotation: -0.12, opacity: 0.76 },
  { type: "curl", x: 8, y: 17, size: 26, rotation: 0.4, opacity: 0.65 },
  { type: "curl", x: 68, y: 11, size: 22, rotation: -0.3, opacity: 0.58 },
  { type: "ribbon", x: 150, y: 9, length: 190, bend: -28, opacity: 0.5 },
  { type: "ribbon", x: 158, y: 24, length: 210, bend: 16, opacity: 0.38 },
  { type: "ribbon", x: 145, y: 37, length: 176, bend: 32, opacity: 0.28 },
];

function traceSpiral(context, size, rotation) {
  context.rotate(rotation);
  context.beginPath();

  for (let index = 0; index <= 52; index += 1) {
    const progress = index / 52;
    const angle = progress * Math.PI * 4.4;
    const radius = size * (1 - progress * 0.84);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius * 0.72;

    if (index === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  }
}

function traceOutline(context) {
  context.beginPath();
  context.moveTo(-88, 24);
  context.bezierCurveTo(-92, 4, -75, -10, -57, -5);
  context.bezierCurveTo(-55, -35, -22, -51, -4, -29);
  context.bezierCurveTo(13, -59, 58, -46, 57, -14);
  context.bezierCurveTo(87, -21, 103, 2, 89, 22);
  context.bezierCurveTo(69, 48, 27, 50, -4, 42);
  context.bezierCurveTo(-36, 55, -75, 47, -88, 24);
}

function traceRibbon(context, length, bend) {
  const half = length / 2;
  context.beginPath();
  context.moveTo(-half, 0);
  context.bezierCurveTo(
    -half * 0.42,
    bend,
    half * 0.18,
    -bend * 0.75,
    half,
    0
  );
}

function tracePiece(context, piece) {
  if (piece.type === "curl") {
    traceSpiral(context, piece.size, piece.rotation);
  } else if (piece.type === "outline") {
    traceOutline(context);
  } else {
    traceRibbon(context, piece.length, piece.bend);
  }
}

function paintPiece(context, piece, x, y, scale, direction, theme) {
  context.save();
  context.translate(x, y);
  context.scale(scale * direction, scale);
  context.lineCap = "round";
  context.lineJoin = "round";

  tracePiece(context, piece);
  context.globalAlpha = piece.opacity * 0.34;
  context.strokeStyle = theme.cloudGlow;
  context.lineWidth = piece.type === "outline" ? 8 : 6;
  context.shadowColor = "rgba(112, 174, 198, 0.75)";
  context.shadowBlur = 14;
  context.stroke();

  tracePiece(context, piece);
  context.globalAlpha = piece.opacity;
  context.strokeStyle = theme.cloudStroke;
  context.lineWidth = piece.type === "outline" ? 2.1 : 1.7;
  context.shadowColor = "rgba(255, 255, 255, 0.9)";
  context.shadowBlur = 3;
  context.stroke();
  context.restore();
}

export default function CloudBackground({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const pointer = { x: -1000, y: -1000, active: false };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame;
    let width = 0;
    let height = 0;
    let motifs = [];

    // Meteor state
    let meteor = null;
    let nextMeteorAt = performance.now() + 1500;

    const createMotifs = () =>
      CLOUDS.map((cloud, cloudIndex) => ({
        ...cloud,
        phase: cloudIndex * 1.31,
        pieces: PIECES.map((piece) => ({
          ...piece,
          offsetX: 0,
          offsetY: 0,
          velocityX: 0,
          velocityY: 0,
        })),
      }));

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      motifs = createMotifs();
    };

    const updatePointer = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const clearPointer = () => {
      pointer.active = false;
    };

    const createMeteor = () => ({
      x: width * (0.55 + Math.random() * 0.4),
      y: -40,
      length: 90 + Math.random() * 50,
      speed: 7 + Math.random() * 3,
      opacity: 0.65 + Math.random() * 0.3,
    });

    const drawMeteor = (item) => {
      const tailX = item.x + item.length;
      const tailY = item.y - item.length * 0.55;

      const gradient = context.createLinearGradient(
        tailX,
        tailY,
        item.x,
        item.y
      );

      gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
      gradient.addColorStop(
        0.75,
        `rgba(190, 225, 255, ${item.opacity * 0.45})`
      );
      gradient.addColorStop(
        1,
        `rgba(255, 255, 255, ${item.opacity})`
      );

      context.save();
      context.beginPath();
      context.moveTo(tailX, tailY);
      context.lineTo(item.x, item.y);
      context.strokeStyle = gradient;
      context.lineWidth = 2;
      context.lineCap = "round";
      context.shadowColor = "rgba(190, 225, 255, 0.8)";
      context.shadowBlur = 8;
      context.stroke();
      context.restore();
    };


    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);


      motifs.forEach((cloud) => {
        const travelWidth = width + 620;
        const startingX = cloud.x * width;
        const drift = time * cloud.speed * theme.speed * 0.008;
        const cloudX =
          ((startingX + drift * cloud.direction + 310) % travelWidth + travelWidth) %
            travelWidth -
          310;
        const cloudY =
          cloud.y * height +
          (reduceMotion ? 0 : Math.sin(time * 0.00015 + cloud.phase) * 11);

        cloud.pieces.forEach((piece) => {
          const anchorX =
            cloudX +
            piece.x * cloud.scale * cloud.direction +
            piece.offsetX;
          const anchorY = cloudY + piece.y * cloud.scale + piece.offsetY;
          const deltaX = anchorX - pointer.x;
          const deltaY = anchorY - pointer.y;
          const distance = Math.hypot(deltaX, deltaY) || 1;
          const influenceRadius = piece.type === "ribbon" ? 145 : 125;

          if (!reduceMotion && pointer.active && distance < influenceRadius) {
            const force = (1 - distance / influenceRadius) * 0.82;
            piece.velocityX += (deltaX / distance) * force;
            piece.velocityY += (deltaY / distance) * force;
          }

          if (!reduceMotion) {
            piece.velocityX += -piece.offsetX * 0.014;
            piece.velocityY += -piece.offsetY * 0.014;
            piece.velocityX *= 0.92;
            piece.velocityY *= 0.92;
            piece.offsetX += piece.velocityX;
            piece.offsetY += piece.velocityY;
          }

          paintPiece(
            context,
            piece,
            anchorX,
            anchorY,
            cloud.scale,
            cloud.direction,
            theme
          );
        });
      });


      if (theme.meteors && ! reduceMotion) {
        if (!meteor && time > nextMeteorAt) {
          meteor = createMeteor();
        }

        if (meteor) {
          drawMeteor(meteor);
          meteor.x -= meteor.speed;
          meteor.y += meteor.speed * 0.55;

          const isOffScreen =
            meteor.x < -meteor.length || meteor.y > height + meteor.length;

          if (isOffScreen) {
            meteor = null;
            nextMeteorAt = time + 1500 + Math.random() * 2500;
          }
        }
      } else {
        meteor = null;
      }

      context.globalAlpha = 1;
      context.shadowBlur = 0;
      if (!reduceMotion) animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", updatePointer, { passive: true });
    document.documentElement.addEventListener("pointerleave", clearPointer);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", updatePointer);
      document.documentElement.removeEventListener("pointerleave", clearPointer);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="cloud-background" aria-hidden="true" />;
}
