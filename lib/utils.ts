import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { Camera } from "@/types/canvas";

const COLORS = [
  "#F24236",
  "#2F9C95",
  "#A3F7B5",
  "#05B2DC",
  "#FADF7F",
  "#1B4079 ",
  "#CBDF90",
  "#1B4079",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}

export function pointerEventToCanvasPoint(
  e: React.PointerEvent,
  camera: Camera
) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y,
  };
}
