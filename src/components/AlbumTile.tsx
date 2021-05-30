import React from "react";
import { AlbumObject } from "spotify-api-types";
import { ReactComponent as CloseIcon } from "../images/close.svg";

interface AlbumTileProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  album: AlbumObject;
  onCloseClick?: () => void;
}

export default function AlbumTile({
  album,
  onCloseClick,
  ...props
}: AlbumTileProps) {
  return (
    <li {...props}>
      <div className="group relative p-2 rounded overflow-hidden bg-white">
        <div className="relative flex flex-col">
          {onCloseClick && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCloseClick();
              }}
              className="invisible group-hover:visible absolute top-0 right-0 p-2 bg-black bg-opacity-30 rounded-bl-lg text-gray-200 hover:text-white focus:outline-none"
            >
              <CloseIcon className="w-4 h-4 fill-current" />
            </button>
          )}
          <img
            src={album.images[1].url}
            onDragStart={(e) => e.preventDefault()}
            className="rounded self-center mb-1"
          />
          <div className="flex flex-col whitespace-nowrap">
            <div title={album.name} className="relative overflow-hidden">
              <span className="text-sm">{album.name}</span>
              <div className="absolute right-0 top-0 h-full w-4 bg-gradient-to-l from-white via-white" />
            </div>
            <div
              title={album.artists[0].name}
              className="text-sm text-gray-600 leading-4 truncate"
            >
              {album.artists[0].name}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
