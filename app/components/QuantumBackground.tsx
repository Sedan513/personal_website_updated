"use client";

import { useEffect, useRef } from "react";

class QuantumGate {
  x: number;
  y: number;
  size: number;
  rotation: number;
  type: "H" | "X";

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.rotation = 0;
    this.type = Math.random() > 0.5 ? "H" : "X";
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.beginPath();
    ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
    ctx.strokeStyle = "rgba(59, 130, 246, 0.85)";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "rgba(59, 130, 246, 1)";
    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.type, 0, 0);
    ctx.restore();
  }

  update() {
    this.rotation += 0.02;
  }
}

class BinarySignal {
  x: number;
  y: number;
  value: 0 | 1;
  width: number;
  height: number;
  timer: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.value = 0;
    this.width = 30;
    this.height = 20;
    this.timer = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.value
      ? "rgba(34, 197, 94, 0.75)"
      : "rgba(239, 68, 68, 0.75)";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "white";
    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(String(this.value), this.x + this.width / 2, this.y + this.height / 2);
  }

  update() {
    this.timer += 1;
    if (this.timer > 60) {
      this.value = Math.random() > 0.5 ? 1 : 0;
      this.timer = 0;
    }
  }
}

class Wave {
  y: number;
  amplitude: number;
  frequency: number;
  phase: number;

  constructor(y: number, amplitude: number, frequency: number, phase: number) {
    this.y = y;
    this.amplitude = amplitude;
    this.frequency = frequency;
    this.phase = phase;
  }

  draw(ctx: CanvasRenderingContext2D, width: number) {
    ctx.beginPath();
    ctx.moveTo(0, this.y);

    for (let x = 0; x < width; x += 2) {
      const y = this.y + Math.sin(x * this.frequency + this.phase) * this.amplitude;
      ctx.lineTo(x, y);
    }

    ctx.strokeStyle = "rgba(251, 146, 60, 0.45)";
    ctx.lineWidth = 2.5;
    ctx.stroke();
  }

  update() {
    this.phase += 0.02;
  }
}

class Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
  quantumState: number;

  constructor(width: number) {
    this.x = Math.random() * width;
    this.y = -20;
    this.size = 1;
    this.speed = 0.5;
    this.opacity = 0.1;
    this.color = "rgba(96, 165, 250, 0.1)";
    this.quantumState = Math.random() * Math.PI * 2;
    this.reset(width);
  }

  reset(width: number) {
    this.x = Math.random() * width;
    this.y = -20;
    this.size = Math.random() * 1.4 + 0.8;
    this.speed = Math.random() * 0.9 + 0.35;
    this.opacity = Math.random() * 0.12 + 0.05;
    this.color = `rgba(96, 165, 250, ${this.opacity})`;
  }

  update(height: number, width: number) {
    this.y += this.speed;
    this.quantumState += 0.05;
    this.x += Math.sin(this.quantumState) * 0.5;

    if (this.y > height + 20) {
      this.reset(width);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

export default function QuantumBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    let animationFrameId = 0;
    let particles: Particle[] = [];
    let quantumGates: QuantumGate[] = [];
    let binarySignals: BinarySignal[] = [];
    let waves: Wave[] = [];

    const initializeAnimations = () => {
      particles = Array.from({ length: 40 }, () => new Particle(canvas.width));
      quantumGates = Array.from(
        { length: 5 },
        () => new QuantumGate(Math.random() * canvas.width, Math.random() * canvas.height),
      );
      binarySignals = Array.from(
        { length: 3 },
        () => new BinarySignal(Math.random() * (canvas.width - 30), Math.random() * (canvas.height - 20)),
      );
      waves = [
        new Wave(canvas.height / 2, 30, 0.02, 0),
        new Wave(canvas.height / 2, 20, 0.03, Math.PI / 2),
      ];
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeAnimations();
    };

    const animate = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update(canvas.height, canvas.width);
        particle.draw(ctx);
      });

      quantumGates.forEach((gate) => {
        gate.update();
        gate.draw(ctx);
      });

      binarySignals.forEach((signal) => {
        signal.update();
        signal.draw(ctx);
      });

      waves.forEach((wave) => {
        wave.update();
        wave.draw(ctx, canvas.width);
      });

      animationFrameId = window.requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="quantumCanvas" ref={canvasRef} aria-hidden="true" />;
}
