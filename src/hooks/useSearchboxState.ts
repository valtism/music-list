import { useReducer } from "react";
import { AlbumObject } from "spotify-api-types";

interface Searches {
  [key: string]: AlbumObject[];
}

const initialState = {
  input: "",
  index: 0,
  albums: [] as AlbumObject[],
  searches: {} as Searches,
};

type ActionType =
  | { type: "setInput"; payload: string }
  | { type: "setAlbums"; payload: { albums: AlbumObject[]; query: string } }
  | { type: "arrowUp" }
  | { type: "arrowDown" }
  | { type: "blur" }
  | { type: "reset" };

function reducer(state: typeof initialState, action: ActionType) {
  switch (action.type) {
    case "setInput":
      return {
        ...state,
        input: action.payload,
        index: 0,
        albums: state.searches[action.payload] || state.albums,
      };
    case "setAlbums":
      return {
        ...state,
        albums: action.payload.albums,
        searches: {
          ...state.searches,
          [action.payload.query]: action.payload.albums,
        },
      };
    case "arrowUp": {
      const { index, albums } = state;
      return {
        ...state,
        index: index <= 0 ? albums.length - 1 : index - 1,
      };
    }
    case "arrowDown": {
      const { index, albums } = state;
      return {
        ...state,
        index: index >= albums.length - 1 ? 0 : index + 1,
      };
    }
    case "blur":
      return { ...state, albums: [] };
    case "reset":
      return { ...state, input: "", albums: [] };
    default:
      throw new Error();
  }
}

export function useSearchboxState() {
  return useReducer(reducer, initialState);
}
