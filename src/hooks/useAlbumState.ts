import { AlbumObject } from "spotify-api-types";
import { atom } from "jotai";
import { useMemo } from "react";
import { selectAtom, useAtomValue } from "jotai/utils";

export const gridIdsAtom = atom(
  Array(9)
    .fill(null)
    .map((e, i) => i.toString())
);

export const albumsAtom = atom<{ [key: string]: AlbumObject | null }>(
  Object.fromEntries(
    Array(9)
      .fill(null)
      .map((e, i) => [i.toString(), null])
  )
);

export const albumAtom = (id: string | null) => {
  return atom((get) => get(albumsAtom)[id || ""]);
};

export const addAlbumAtom = atom(null, (get, set, album: AlbumObject) => {
  const gridIds = get(gridIdsAtom);
  const albums = get(albumsAtom);
  const firstEmptyId = gridIds.find((id) => albums[id] === null);
  if (firstEmptyId === undefined) {
    return;
  }
  set(albumsAtom, { ...albums, [firstEmptyId]: album });
});

interface SortAlbumsProps {
  from: string;
  to: string;
}

export const sortAlbumsAtom = atom(
  null,
  (get, set, { from, to }: SortAlbumsProps) => {
    const gridIds = get(gridIdsAtom);
    const fromIndex = gridIds.findIndex((id) => id === from);
    const toIndex = gridIds.findIndex((id) => id === to);
    const newIds = gridIds.slice();
    newIds[fromIndex] = to;
    newIds[toIndex] = from;
    set(gridIdsAtom, newIds);
  }
);

export const removeAlbumAtom = atom(null, (get, set, id: string) => {
  set(albumsAtom, { ...get(albumsAtom), [id]: null });
});

export function useAlbum(id: string | null) {
  return useAtomValue(
    useMemo(() => selectAtom(albumsAtom, (albums) => albums[id || ""]), [id])
  );
}
