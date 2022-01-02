import React, { useMemo, useState } from "react";

import Grid, { SortableItem } from "./Grid";
import AlbumTile from "./AlbumTile";
import PlaceholderTile from "./PlaceholderTile";
import { useAtomValue, useUpdateAtom } from "jotai/utils";
import {
  gridIdsAtom,
  removeAlbumAtom,
  onDragEndAtom,
  albumAtom,
} from "../state/albumState";

export default function AlbumGrid() {
  const ids = useAtomValue(gridIdsAtom);
  const onDragEnd = useUpdateAtom(onDragEndAtom);

  const [cols, setCols] = useState(3);

  return (
    <>
      {/* <input
        type="number"
        value={cols}
        onChange={(e) => setCols(Number(e.target.value))}
        className="bg-transparent"
      /> */}
      <Grid items={ids} onDragEnd={onDragEnd}>
        <ul
          className="grid grid-cols-3 grid-rows-3 bg-gray-50 dark:bg-gray-900 select-none"
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
    </>
  );
}

interface GridItemProps {
  id: string;
}

function GridItem({ id }: GridItemProps) {
  const album = useAtomValue(useMemo(() => albumAtom(id), [id]));
  const removeAlbum = useUpdateAtom(removeAlbumAtom);

  return (
    <SortableItem
      key={id}
      id={id}
      className="inline-flex overflow-hidden cursor-default focus:outline-none md:focus:ring focus:relative focus:z-10 ring-purple-300 dark:ring-purple-500 select-none"
      dragClassNames="opacity-30 focus:ring-0"
    >
      {album ? (
        <AlbumTile album={album} onCloseClick={() => removeAlbum(id)} />
      ) : (
        <PlaceholderTile />
      )}
    </SortableItem>
  );
}
