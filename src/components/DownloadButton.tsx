import React from "react";
import clsx from "clsx";
import { download } from "../util/download";
import { getCanvas } from "../util/getCanvas";

interface DownloadButtonProps {
  exportRef: React.RefObject<HTMLElement>;
}

export default function DownloadButton({ exportRef }: DownloadButtonProps) {
  return (
    <button
      onClick={async () => {
        if (!exportRef.current) return;
        const canvas = await getCanvas(exportRef.current);
        download(canvas.toDataURL("image/jpeg;base64;"), "chart.jpg");
      }}
      className={clsx(
        "px-2 py-1 rounded font-work text-lg focus:outline-none focus:ring",
        "hover:shadow-md active:shadow-inner",
        "bg-stripes-light text-purple-900/80  ring-purple-400",
        "dark:bg-stripes-dark dark:text-purple-100/80 dark:hover:text-purple-100 dark:ring-purple-600"
      )}
    >
      Download
    </button>
  );
}
