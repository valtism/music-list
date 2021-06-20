import React, { useRef } from "react";
import { toJpeg } from "html-to-image";
import clsx from "clsx";

import Searchbox from "./components/Searchbox";
import AlbumTile from "./components/AlbumTile";
import { useAlbumStore } from "./hooks/useAlbumStore";
import Grid, { SortableItem } from "./components/Grid";
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
      <div ref={exportRef} className="bg-white">
        <Grid
          items={ids}
          onDragEnd={({ active, over }) => {
            if (!over) return;
            if (active.id === over.id) return;
            sort(active.id, over.id);
          }}
        >
          <ul className="container leading-[0px] w-[90vw] h-[90vw] max-w-[576px] max-h-[576px]">
            {ids.map((id) => {
              const album = entities[id];
              return (
                <SortableItem
                  key={id}
                  id={id}
                  className={clsx(
                    "inline-block focus:outline-none cursor-default w-1/3 h-1/3"
                  )}
                  dragClassNames="opacity-30"
                >
                  {album ? (
                    <AlbumTile album={album} onCloseClick={() => remove(id)} />
                  ) : (
                    <div className="h-full w-full bg-gray-200 p-2 rounded">
                      <div className="h-full w-full bg-gray-400 rounded"></div>
                    </div>
                  )}
                </SortableItem>
              );
            })}
          </ul>
        </Grid>
      </div>
      <Export exportRef={exportRef} />
    </div>
  );
}

interface ExportProps {
  exportRef: React.RefObject<HTMLElement>;
}

function Export({ exportRef }: ExportProps) {
  return (
    <button
      onClick={async () => {
        if (!exportRef.current) return;
        const jpg = await toJpeg(exportRef.current);
        download(jpg, "chart.jpg");
      }}
    >
      Download
    </button>
  );
}

function download(dataurl: string, filename: string) {
  const a = document.createElement("a");
  a.href = dataurl;
  a.setAttribute("download", filename);
  a.click();
}
