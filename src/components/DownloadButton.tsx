import React from "react";
import { toJpeg } from "html-to-image";

interface DownloadButtonProps {
  exportRef: React.RefObject<HTMLElement>;
}

export default function DownloadButton({ exportRef }: DownloadButtonProps) {
  return (
    <button
      onClick={async () => {
        if (!exportRef.current) return;
        const jpg = await toJpeg(exportRef.current, {
          canvasHeight: 640 * 3,
          canvasWidth: 640 * 3,
        });
        download(jpg, "chart.jpg");
      }}
      style={{
        background: `repeating-linear-gradient(
          -55deg,
          #FCE7F3,
          #FCE7F3 10px,
          #FBCFE8 10px,
          #FBCFE8 20px
        )`,
      }}
      className="px-2 py-1 rounded font-work text-purple-900 text-opacity-80 text-lg"
    >
      Download
    </button>
  );
}

function download(dataurl: string, filename: string) {
  const a = document.createElement("a");
  a.href = dataurl;
  a.setAttribute("download", filename);
  a.click();
}
