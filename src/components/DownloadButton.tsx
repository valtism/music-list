import React from "react";
import clsx from "clsx";
// import { toCanvas, toJpeg } from "html-to-image";
import { download } from "../util/download";
import html2canvas from "html2canvas";

interface DownloadButtonProps {
  exportRef: React.RefObject<HTMLElement>;
}

export default function DownloadButton({ exportRef }: DownloadButtonProps) {
  return (
    <button
      onClick={async () => {
        if (!exportRef.current) return;
        window.scrollTo(0, 0);
        // const canvas = await toCanvas(exportRef.current, {
        //   canvasHeight: 640 * 3,
        //   canvasWidth: 640 * 3,
        // });
        const canvas = await html2canvas(exportRef.current, {
          useCORS: true,
        });
        download(canvas.toDataURL("image/jpeg;base64;"), "chart.jpg");
        const ctx = canvas.getContext("2d");
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
      }}
      className={clsx(
        "px-2 py-1 rounded font-work text-lg focus:outline-none focus:ring",
        "hover:shadow-md active:shadow-inner",
        "bg-stripes-light text-purple-900/80  ring-purple-400",
        "dark:bg-stripes-dark dark:text-purple-100/80 dark:ring-purple-600"
      )}
    >
      Download
    </button>
  );
}
