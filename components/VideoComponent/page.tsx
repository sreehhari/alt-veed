"use client";
import { useState } from "react";
import { DropzoneButton } from "./Drop/page";
import { CanvasEditor } from "../CanvasEditor/page";
import { Button } from "@mantine/core";

export const VideoComponent = ({ onFileSelect }: { onFileSelect: (file: File) => void }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (file: File) => {
    console.log("Selected file:", file);
    setSelectedFile(file);
  };

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <DropzoneButton onFileSelect={onFileSelect} />
      </div>

     

      <div
        style={{
          padding: "5px",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Button fullWidth variant="filled" color="gray">
          hey
        </Button>
        <Button fullWidth variant="filled" color="gray">
          hey
        </Button>
      </div>
    </div>
  );
};
