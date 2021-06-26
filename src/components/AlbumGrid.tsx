import React from "react";

import Grid, { SortableItem } from "./Grid";
import AlbumTile from "./AlbumTile";
import { useAtomValue, useUpdateAtom } from "jotai/utils";
import {
  gridIdsAtom,
  removeAlbumAtom,
  sortAlbumsAtom,
  useAlbum,
} from "../state/albumState";

interface AlbumGridProps {
  exportRef: React.RefObject<HTMLDivElement>;
}
export default function AlbumGrid({ exportRef }: AlbumGridProps) {
  const ids = useAtomValue(gridIdsAtom);
  const sortAlbums = useUpdateAtom(sortAlbumsAtom);

  return (
    <div className="m-0">
      <div ref={exportRef} className="bg-white">
        <Grid
          items={ids}
          onDragEnd={({ active, over }) => {
            if (!over) return;
            if (active.id === over.id) return;
            sortAlbums({
              from: active.id,
              to: over.id,
            });
          }}
        >
          <ul
            className="grid grid-cols-3 grid-rows-3 bg-gray-50 dark:bg-gray-900"
            style={{
              lineHeight: 0,
              width: "90vw",
              height: "90vw",
              maxWidth: 576,
              maxHeight: 576,
            }}
          >
            {ids.map((id) => (
              <GridItem key={id} id={id} />
            ))}
          </ul>
        </Grid>
      </div>
    </div>
  );
}

interface GridItemProps {
  id: string;
}

function GridItem({ id }: GridItemProps) {
  const album = useAlbum(id);
  const removeAlbum = useUpdateAtom(removeAlbumAtom);

  return (
    <SortableItem
      key={id}
      id={id}
      className="inline-flex overflow-hidden cursor-default focus:outline-none focus:ring-4 focus:relative focus:z-10 ring-purple-300"
      dragClassNames="opacity-30 focus:ring-0"
    >
      {album ? (
        <AlbumTile album={album} onCloseClick={() => removeAlbum(id)} />
      ) : (
        <div className="group flex flex-1 p-2 bg-gray-50 dark:bg-gray-900">
          <div className="flex-1 rounded-lg border-2 border-dashed border-purple-600/50 group-hover:border-purple-600/90 dark:border-purple-400/60 dark:group-hover:border-purple-400/90"></div>
        </div>
      )}
    </SortableItem>
  );
}
