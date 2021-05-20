import { useReducer } from "react";
import { AlbumObject } from "spotify-api-types";
import omit from "lodash.omit";
export interface Albums {
  ids: string[];
  entities: { [key: string]: AlbumObject };
}

const initialState: Albums = { ids: [], entities: {} };

type ActionType =
  | { type: "add"; payload: AlbumObject }
  | {
      type: "sort";
      payload: { id: string; from: number; to: number };
    }
  | { type: "delete"; payload: string };

function reducer(state: typeof initialState, action: ActionType) {
  switch (action.type) {
    case "add":
      if (state.entities[action.payload.id]) return state;
      return {
        ids: state.ids.concat(action.payload.id),
        entities: { ...state.entities, [action.payload.id]: action.payload },
      };
    case "sort":
      return {
        ...state,
        ids: move(state.ids, action.payload.from, action.payload.to),
      };
    case "delete":
      return {
        ...state,
        ids: state.ids.filter((id) => id !== action.payload),
        entities: omit(state.entities, action.payload),
      };
    default:
      throw new Error();
  }
}

function move<T>(array: T[], from: number, to: number) {
  const clone = array.slice();
  clone.splice(to, 0, ...clone.splice(from, 1));
  return clone;
}

export function useAlbumState() {
  return useReducer(reducer, initialState);
}
