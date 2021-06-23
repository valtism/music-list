import { atom } from "jotai";
import { AlbumObject } from "spotify-api-types";

interface Searches {
  [key: string]: AlbumObject[];
}

export const inputAtom = atom("");
export const indexAtom = atom(0);
export const resultsAtom = atom<AlbumObject[]>([]);
export const searchesAtom = atom<Searches>({});

export const updateInputAtom = atom(null, (get, set, input: string) => {
  set(inputAtom, input);
  set(indexAtom, 0);
  const searches = get(searchesAtom);
  if (searches[input]) {
    set(resultsAtom, searches[input]);
  }
});

interface SetAlbumsProps {
  albums: AlbumObject[];
  query: string;
}

export const setFetchedResultsAtom = atom(
  null,
  (get, set, { albums, query }: SetAlbumsProps) => {
    const searches = get(searchesAtom);
    const input = get(inputAtom);
    set(resultsAtom, searches[input] || albums);
    set(searchesAtom, { ...searches, [query]: albums });
  }
);

export const resetSearchAtom = atom(null, (get, set) => {
  set(inputAtom, "");
  set(resultsAtom, []);
});
