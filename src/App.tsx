import React from "react";
import { AlbumObject } from "spotify-api-types";
import Searchbox from "./components/Searchbox";
import { useAuth } from "./hooks/useAuth";
import Grid, { SortableItem } from "./components/Grid";
import { useAlbumState } from "./hooks/useAlbumState";

export default function App() {
  const auth = useAuth();
  const [albums, dispatch] = useAlbumState();

  return (
    <div className="font-nunito flex flex-col items-center pt-10 text-gray-900">
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
        <div className="w-full">
          {albums.ids
            .map((id) => albums.entities[id])
            .map((album) => (
              <SortableItem
                key={album.id}
                id={album.id}
                className="inline-block focus:outline-none"
              >
                <AlbumTile album={album} />
              </SortableItem>
            ))}
        </div>
      </Grid>
    </div>
  );
}

interface AlbumTileProps {
  album: AlbumObject;
}

function AlbumTile({ album }: AlbumTileProps) {
  return (
    <div className="flex flex-col w-48 bg-gray-200 m-2 rounded overflow-hidden">
      <img src={album.images[1].url} className="rounded self-center" />
      <span className="text-sm whitespace-nowrap">{album.name}</span>
      <span className="text-sm whitespace-nowrap">{album.artists[0].name}</span>
    </div>
  );
}
