import clsx from "clsx";
import React from "react";
import { AlbumObject } from "spotify-api-types";
import { ReactComponent as CloseIcon } from "../images/close.svg";

interface AlbumTileProps {
  album: AlbumObject;
  onCloseClick?: () => void;
  className?: string;
}

export default function AlbumTile({
  album,
  onCloseClick,
  className,
}: AlbumTileProps) {
  return (
    <div
      className={clsx(
        "group overflow-hidden",
        className
      )}
    >
      <div className="relative flex flex-col">
        {onCloseClick && (
          <CloseButton
            onClick={(e) => {
              e.stopPropagation();
              onCloseClick();
            }}
          />
        )}
        <img
          src={album.images[0].url}
          onDragStart={(e) => e.preventDefault()}
          className="self-center"
        />
      </div>

      {/* <Details album={album} /> */}
    </div>
  );
}

function CloseButton({
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      className="invisible group-hover:visible absolute top-0 right-0 p-2 bg-black bg-opacity-30 rounded-bl-lg text-gray-200 hover:text-white focus:outline-none"
      {...props}
    >
      <CloseIcon className="w-4 h-4 fill-current" />
    </button>
  );
}

interface DetailsProps {
  album: AlbumObject;
}

function Details({ album }: DetailsProps) {
  return (
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
  );
}
