import React from "react";
import Searchbox from "./components/Searchbox";
import { useAuth } from "./hooks/useAuth";
import Grid, { SortableItem } from "./components/Grid";
import { useAlbumState } from "./hooks/useAlbumState";
import AlbumTile from "./components/AlbumTile";

export default function App() {
  const auth = useAuth();
  const [albums, dispatch] = useAlbumState();

  return (
    <div className="font-nunito flex flex-col space-y-10 items-center pt-10 text-gray-900">
      <h1 className="font-work text-5xl bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
        Music List
      </h1>
      <Searchbox
        auth={auth}
        onAlbumSelect={(album) => dispatch({ type: "add", payload: album })}
      />
      <div>
        <Grid
          albums={albums}
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
          <div className="container mx-auto px-20">
            {albums.ids
              .map((id) => albums.entities[id])
              .map((album) => (
                <SortableItem key={album.id} id={album.id}>
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
    </div>
  );
}
