"use client";

import { useEffect, useRef } from "react";

export default function MouseDistortion() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const points = [];
    const maxPoints = 30;

    const mouse = {
      x: width * 0.5,
      y: height * 0.5,
      targetX: width * 0.5,
      targetY: height * 0.5,
      started: false,
    };

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    function addPoint(x, y) {
      points.push({
        x,
        y,
        life: 1,
      });

      if (points.length > maxPoints) {
        points.shift();
      }
    }

    function onPointerMove(e) {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.started = true;
    }

    function drawLineTrail() {
      ctx.clearRect(0, 0, width, height);

      if (!mouse.started) return;

      mouse.x += (mouse.targetX - mouse.x) * 0.18;
      mouse.y += (mouse.targetY - mouse.y) * 0.18;

      addPoint(mouse.x, mouse.y);

      for (let i = 0; i < points.length; i++) {
        points[i].life *= 0.94;
      }

      while (points.length && points[0].life < 0.03) {
        points.shift();
      }

      if (points.length < 2) return;

      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];

        const alpha = i / points.length;
        const widthLine = alpha * 8;

        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(curr.x, curr.y);
        ctx.strokeStyle = `rgba(0,0,0,${alpha * 0.35})`;
        ctx.lineWidth = Math.max(1, widthLine);
        ctx.stroke();
      }

      const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 24);
      glow.addColorStop(0, "rgba(0,0,0,0.22)");
      glow.addColorStop(1, "rgba(0,0,0,0)");

      ctx.beginPath();
      ctx.fillStyle = glow;
      ctx.arc(mouse.x, mouse.y, 24, 0, Math.PI * 2);
      ctx.fill();
    }

    function animate() {
      raf = requestAnimationFrame(animate);
      drawLineTrail();
    }

    resize();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "normal",
      }}
    />
  );
}