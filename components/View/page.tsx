"use client"
import { CanvasEditor } from "../CanvasEditor/page"
const View = () => {
  return (
    <div>
          {/* ✅ Properly render the ActiveComponent with props */}

          {/* ✅ Show the CanvasEditor only when a file is selected */}
          {selectedFile && <CanvasEditor file={selectedFile} />}

    </div>
  )



export default 

