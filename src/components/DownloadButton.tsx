import React, { useRef } from "react";
import clsx from "clsx";
import { useAtomValue } from "jotai/utils";
import { gridAlbums } from "../state/albumState";
import { getImageDataUrl } from "../util/getImageDataUrl";

export default function DownloadButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const albums = useAtomValue(gridAlbums);
  const urls = albums.map((album) => album?.images[0].url);

  return (
    <button
      ref={ref}
      onClick={async () => {
        const dataUrl = await getImageDataUrl(urls, 3, 3);
        if (!ref.current || !dataUrl) return;
        const a = document.createElement("a");
        a.href = dataUrl;
        a.setAttribute("download", "chart");
        a.setAttribute("id", "asdasd");
        a.click();
      }}
      className={clsx(
        "px-2 py-1 rounded font-work text-lg focus:outline-none focus:ring",
        "hover:shadow-md active:shadow-inner",
        "bg-stripes-light text-purple-900/80 hover:text-purple-600  ring-purple-400",
        "dark:bg-stripes-dark dark:text-purple-100/80 dark:hover:text-purple-100 dark:ring-purple-600"
      )}
    >
      Download
    </button>
  );
}
