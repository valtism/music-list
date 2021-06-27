import React from "react";
import clsx from "clsx";
import { useAtomValue } from "jotai/utils";
import { gridAlbums } from "../state/albumState";
import { download } from "../util/download";

export default function DownloadButton() {
  const albums = useAtomValue(gridAlbums);
  const urls = albums.map((album) => album?.images[0].url);

  return (
    <button
      onClick={async () => download(urls, 3, 3)}
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
