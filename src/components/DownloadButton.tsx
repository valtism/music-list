import React, { useRef, useState } from "react";
import clsx from "clsx";
import { useAtomValue } from "jotai/utils";

import { gridAlbums } from "../state/albumState";
import { getImageDataUrl } from "../util/getImageDataUrl";

import { ReactComponent as SpinnerIcon } from "../images/spinner.svg";

export default function DownloadButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const albums = useAtomValue(gridAlbums);
  const urls = albums.map((album) => album?.images[0].url);
  const [loading, setLoading] = useState(false);

  return (
    <button
      ref={ref}
      onClick={async () => {
        setLoading(true);
        const dataUrl = await getImageDataUrl(urls, 3, 3);
        if (!ref.current || !dataUrl) return;
        const a = document.createElement("a");
        a.href = dataUrl;
        a.setAttribute("download", "chart");
        a.click();
        setLoading(false);
      }}
      className={clsx(
        "w-28 h-10 flex items-center justify-center py-1 rounded font-work text-lg focus:outline-none focus:ring",
        "hover:shadow-md active:shadow-inner",
        "bg-stripes-light text-purple-900/80 hover:text-purple-600  ring-purple-400",
        "dark:bg-stripes-dark dark:text-purple-100/80 dark:hover:text-purple-100 dark:ring-purple-600"
      )}
    >
      {loading ? (
        <SpinnerIcon className="animate-spin h-5 w-5 text-gray-500" />
      ) : (
        "Download"
      )}
    </button>
  );
}
