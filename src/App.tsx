import React, { useRef } from "react";

import Searchbox from "./components/Searchbox";
import AlbumTile from "./components/AlbumTile";
import { useAlbumStore } from "./hooks/useAlbumStore";
import Grid, { SortableItem } from "./components/Grid";
import DownloadButton from "./components/DownloadButton";
import { useAuth } from "./hooks/useAuth";

export default function App() {
  const auth = useAuth();
  const ids = useAlbumStore((state) => state.ids);
  const entities = useAlbumStore((state) => state.entities);
  const add = useAlbumStore((state) => state.add);
  const sort = useAlbumStore((state) => state.sort);
  const remove = useAlbumStore((state) => state.remove);
  const exportRef = useRef<HTMLDivElement>(null);

  return (
    <div className="font-nunito flex flex-col space-y-10 items-center pt-10 text-gray-900">
      <h1 className="font-work text-5xl bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-stripes motion-reduce:animate-none filter drop-shadow-lg">
        Music List
      </h1>
      <Searchbox auth={auth} onAlbumSelect={(album) => add(album)} />
      <div>
        <div ref={exportRef} className="bg-white">
          <Grid
            items={ids}
            onDragEnd={({ active, over }) => {
              if (!over) return;
              if (active.id === over.id) return;
              sort(active.id, over.id);
            }}
          >
            <ul
              style={{
                lineHeight: 0,
                width: "90vw",
                height: "90vw",
                maxWidth: 576,
                maxHeight: 576,
              }}
            >
              {ids.map((id) => {
                const album = entities[id];
                return (
                  <SortableItem
                    key={id}
                    id={id}
                    className="inline-flex w-1/3 h-1/3 overflow-hidden cursor-default focus:outline-none focus:ring-4 focus:relative ring-purple-300"
                    dragClassNames="opacity-30 focus:ring-0"
                  >
                    {album ? (
                      <AlbumTile
                        album={album}
                        onCloseClick={() => remove(id)}
                      />
                    ) : (
                      <div className="flex flex-1 bg-gray-200 bg-opacity-90">
                        {/* <div className="flex-1 bg-gray-400 rounded"></div> */}
                      </div>
                    )}
                  </SortableItem>
                );
              })}
            </ul>
          </Grid>
        </div>
      </div>
      <div className="pb-10">
        <DownloadButton exportRef={exportRef} />
      </div>
    </div>
  );
}
