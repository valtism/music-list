import React from "react";
import { AlbumObject } from "spotify-api-types";
import Searchbox from "./components/Searchbox";
import { useAuth } from "./hooks/useAuth";
import Grid, { SortableItem } from "./components/Grid";
import { useAlbumState } from "./hooks/useAlbumState";
import { ReactComponent as CloseIcon } from "./images/close.svg";

export default function App() {
  const auth = useAuth();
  const [albums, dispatch] = useAlbumState();

  return (
    <div className="font-nunito flex flex-col items-center space-y-4 pt-10 text-gray-900">
      <Searchbox
        auth={auth}
        onAlbumSelect={(album) => dispatch({ type: "add", payload: album })}
      />
      <Grid
        items={albums.ids.map((id) => albums.entities[id])}
        onDragEnd={(event) => {
          const { active, over } = event;
          if (!over) return;
          if (active.id === over.id) return;
          const oldIndex = albums.ids.indexOf(active.id);
          const newIndex = albums.ids.indexOf(over.id);
          dispatch({
            type: "sort",
            payload: { id: active.id, from: oldIndex, to: newIndex },
          });
        }}
      >
        <div className="w-full text-center">
          {albums.ids
            .map((id) => albums.entities[id])
            .map((album) => (
              <SortableItem
                key={album.id}
                id={album.id}
                className="inline-block focus:outline-none cursor-default"
              >
                <AlbumTile
                  album={album}
                  onCloseClick={() =>
                    dispatch({ type: "delete", payload: album.id })
                  }
                />
              </SortableItem>
            ))}
        </div>
      </Grid>
    </div>
  );
}

interface AlbumTileProps {
  album: AlbumObject;
  onCloseClick: () => void;
}

function AlbumTile({ album, onCloseClick }: AlbumTileProps) {
  return (
    <div className="group relative flex flex-col w-48 m-2 rounded overflow-hidden text-left">
      <button
        onClick={onCloseClick}
        className="invisible group-hover:visible absolute top-0 right-0 p-2 bg-black bg-opacity-30 rounded-bl-lg text-gray-200 hover:text-white"
      >
        <CloseIcon className="w-4 h-4 fill-current" />
      </button>
      <img src={album.images[1].url} className="rounded self-center mb-1" />
      <div className="flex flex-col whitespace-nowrap">
        <span title={album.name} className="text-sm truncate">
          {album.name}
        </span>
        <span
          title={album.artists[0].name}
          className="text-sm text-gray-600 leading-4 truncate"
        >
          {album.artists[0].name}
        </span>
      </div>
    </div>
  );
}
