"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { heroImages } from "@/data/portfolio";

/** Derives initials from the full name e.g. "Lim Yonghay" → "LY" */
function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

// ─── Per-position layout config ────────────────────────────────────────────
// rel = distance from current front card (0 = front, 1 = right, n-1 = left …)
// Tuned for 5 cards; gracefully degrades for fewer/more.
function getPos(rel: number, n: number) {
  const mirror = n - rel;

  const slots: Record<string, { x: number; z: number; ry: number; scale: number; opacity: number; zIdx: number }> = {
    front:    { x:   0, z: 120, ry:   0, scale: 1.00, opacity: 1.00, zIdx: 50 },
    right:    { x: 130, z:  30, ry: -40, scale: 0.82, opacity: 0.78, zIdx: 40 },
    farRight: { x: 210, z: -80, ry: -55, scale: 0.66, opacity: 0.42, zIdx: 30 },
    back:     { x: 145, z:-180, ry: -65, scale: 0.50, opacity: 0.10, zIdx: 10 },
    farLeft:  { x:-210, z: -80, ry:  55, scale: 0.66, opacity: 0.42, zIdx: 30 },
    left:     { x:-130, z:  30, ry:  40, scale: 0.82, opacity: 0.78, zIdx: 40 },
  };

  if (rel === 0)      return slots.front;
  if (rel === 1)      return slots.right;
  if (rel === 2)      return slots.farRight;
  if (mirror === 1)   return slots.left;
  if (mirror === 2)   return slots.farLeft;
  return slots.back;
}

export default function HeroPhotoCarousel({ ownerName }: { ownerName: string }) {
  const n = heroImages.length;
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(((idx % n) + n) % n);
    setTimeout(() => setAnimating(false), 660);
  }, [animating, n]);

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  // Auto-rotate
  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % n);
    }, 2800);
  }, [n]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer, stopTimer]);

  // Keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  return (
    <div className="flex flex-col items-center gap-4 select-none" onDragStart={(e) => e.preventDefault()}>

      {/* ── 3D Stage ─────────────────────────────────────────────── */}
      <div
        className="relative"
        style={{ width: 480, height: 420, perspective: 900, perspectiveOrigin: "50% 42%" }}
        onMouseEnter={stopTimer}
        onMouseLeave={startTimer}
      >
        {heroImages.map((img, i) => {
          const rel  = ((i - current) % n + n) % n;
          const pos  = getPos(rel, n);
          const isFront = rel === 0;

          return (
            <div
              key={i}
              onClick={() => {
                const r = ((i - current) % n + n) % n;
                if (r === 0) return;
                r <= Math.floor(n / 2) ? goTo(current + r) : goTo(current - (n - r));
              }}
              style={{
                position: "absolute",
                width: 200,
                height: 280,
                top: "50%",
                left: "50%",
                marginLeft: -100,
                marginTop: -140,
                transform: `translateX(${pos.x}px) translateZ(${pos.z}px) rotateY(${pos.ry}deg) scale(${pos.scale})`,
                opacity: pos.opacity,
                zIndex: pos.zIdx,
                transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.6s ease",
                cursor: isFront ? "default" : "pointer",
                willChange: "transform, opacity",
                userSelect: "none",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 6,
                  overflow: "hidden",
                  border: isFront
                    ? "1.5px solid rgba(201,104,48,0.55)"
                    : "1.5px solid rgba(201,104,48,0.10)",
                  transition: "border-color 0.6s ease",
                  background: "#1a1410",
                  position: "relative",
                  boxShadow: isFront
                    ? "0 8px 32px rgba(0,0,0,0.55), 0 0 20px rgba(201,104,48,0.10)"
                    : "0 4px 12px rgba(0,0,0,0.4)",
                }}
              >
                {img.src ? (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    draggable={false}
                    className="object-cover object-top"
                    sizes="200px"
                    priority={i === 0}
                  />
                ) : (
                  /* Initials fallback */
                  <div className="w-full h-full flex flex-col items-center justify-center gap-1">
                    <span className="font-display font-bold text-stone-700"
                      style={{ fontSize: 30 }}>
                      {getInitials(ownerName)}
                    </span>
                    <span className="font-mono text-stone-800 tracking-widest uppercase"
                      style={{ fontSize: 8 }}>
                      {img.alt}
                    </span>
                  </div>
                )}

                {/* Inner vignette so text stays readable on bright photos */}
                <div
                  style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.35) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Dot indicators ───────────────────────────────────────── */}
      <div className="flex items-center gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Photo ${i + 1}`}
            style={{
              width: i === current ? 18 : 5,
              height: 5,
              borderRadius: 3,
              background: i === current ? "#c96830" : "#2e2820",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

    </div>
  );
}
