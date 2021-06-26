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

        /**
         * Exporting with html2canvas will put white bars around the image if there
         * is any scroll on the document. We scroll to 0,0 to avoid vertical bars,
         * and set the html overflow to "hidden" because a scrollbar will produce
         * a vertical bar on the left.
         */
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        window.scrollTo(0, 0);
        document.documentElement.style.overflow = "hidden";
        const canvas = await html2canvas(exportRef.current, {
          scale: 3,
          useCORS: true,
        });
        window.scrollTo(scrollX, scrollY);
        document.documentElement.style.overflow = "";
        download(canvas.toDataURL("image/jpeg;base64;"), "chart.jpg");
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
