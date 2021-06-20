import create from "zustand";
import { AlbumObject } from "spotify-api-types";

export interface AlbumTiles {
  ids: string[];
  entities: { [key: string]: AlbumObject | null };
  add: (album: AlbumObject) => void;
  sort: (from: string, to: string) => void;
  remove: (id: string) => void;
}

export const useAlbumStore = create<AlbumTiles>((set) => ({
  ids: Array(9)
    .fill(null)
    .map((e, i) => i.toString()),
  entities: Object.fromEntries(
    Array(9)
      .fill(null)
      .map((e, i) => [i.toString(), null])
  ),
  add: (album: AlbumObject) =>
    set((state) => {
      const firstEmptyId = state.ids.find((id) => state.entities[id] === null);
      if (firstEmptyId === undefined) {
        return state;
      }
      return {
        ...state,
        entities: { ...state.entities, [firstEmptyId]: album },
      };
    }),
  sort: (from: string, to: string) =>
    set((state) => {
      const fromIndex = state.ids.findIndex((id) => id === from);
      const toIndex = state.ids.findIndex((id) => id === to);
      const newIds = state.ids.slice();
      newIds[fromIndex] = to;
      newIds[toIndex] = from;
      return {
        ...state,
        ids: newIds,
      };
    }),
  remove: (id: string) =>
    set((state) => ({
      ...state,
      entities: { ...state.entities, [id]: null },
    })),
}));
