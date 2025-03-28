"use client";

import { useEffect, useRef } from "react";

interface CanvasEditorProps {
  file?: File | null;
}

export function CanvasEditor({ file }: CanvasEditorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!file || !canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    const objectURL = URL.createObjectURL(file);

    img.src = objectURL;
    img.onload = () => {
      const canvas = canvasRef.current!;
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      // Cleanup object URL to prevent memory leaks
      URL.revokeObjectURL(objectURL);
    };

    return () => {
      URL.revokeObjectURL(objectURL); // Cleanup on unmount
    };
  }, [file]);

  return (
    <div>
      {file ? (
        file.type.startsWith("video") ? (
          <video src={URL.createObjectURL(file)} width="500" controls />
        ) : file.type.startsWith("image") ? (
          <canvas ref={canvasRef} style={{ border: "1px solid white" }} />
        ) : (
          <p>Unsupported file type</p>
        )
      ) : (
        <p>No file selected</p>
      )}
    </div>
  );
}
