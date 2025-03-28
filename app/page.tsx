"use client";

import { useState } from "react";
import { DoubleNavbar } from "@/components/Navbar/page";
import { VideoComponent } from "@/components/VideoComponent/page";
import { CanvasEditor } from "@/components/CanvasEditor/page";
import { Flex, Text } from "@mantine/core";

export default function HomePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (file: File) => {
    console.log("Selected file:", file);
    setSelectedFile(file);
  };

  return (
    <Flex direction="row" style={{ height: "100vh" }}>
      {/* ✅ Sidebar (Fixed: No children, just a prop) */}
      <DoubleNavbar extraContent={<VideoComponent onFileSelect={handleFileSelect} />} />

      {/* ✅ Main content area */}
      <Flex flex={1} align="center" justify="center">
        {selectedFile ? (
          <CanvasEditor file={selectedFile} />
        ) : (
          <Text c="dimmed">No file selected</Text>
        )}
      </Flex>
    </Flex>
  );
}
