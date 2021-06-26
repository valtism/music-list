import React from "react";
import clsx from "clsx";
import { toJpeg } from "html-to-image";
import { download } from "../util/download";

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
