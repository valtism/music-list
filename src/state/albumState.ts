import { AlbumObject } from "spotify-api-types";
import { atom } from "jotai";
import { DragEndEvent } from "@dnd-kit/core";

export const gridIdsAtom = atom(
  Array(9)
    .fill(null)
    .map((_, i) => i.toString())
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

export const onDragEndAtom = atom(
  null,
  (get, set, { active, over }: DragEndEvent) => {
    if (!over) return;
    if (active.id === over.id) return;
    const gridIds = get(gridIdsAtom);
    const fromIndex = gridIds.findIndex((id) => id === active.id);
    const toIndex = gridIds.findIndex((id) => id === over.id);
    const newIds = gridIds.slice();
    newIds[fromIndex] = over.id;
    newIds[toIndex] = active.id;
    set(gridIdsAtom, newIds);
  }
);

export const removeAlbumAtom = atom(null, (get, set, id: string) => {
  set(albumsAtom, { ...get(albumsAtom), [id]: null });
});
