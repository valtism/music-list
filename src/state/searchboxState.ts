import { atom } from "jotai";

import { debounce } from "../util/debounce";
import { addAlbumAtom } from "./albumState";
import { authAtom } from "./appState";
import { Auth, search } from "../api";

export const inputAtom = atom("");
export const indexAtom = atom(0);

export const searchAtom = atom(async (get) => {
  const input = get(inputAtom);
  const auth = get(authAtom);
  if (!input) return;
  return debouncedFetch(auth, input);
});

const debouncedFetch = debounce(async (auth: Auth, query: string) => {
  return await search(auth, query);
}, 300);

export const onClickOutsideAtom = atom(null, (_, set) => {
  set(inputAtom, "");
  set(indexAtom, 0);
});

export const onInputChangeAtom = atom(
  null,
  (_, set, event: React.ChangeEvent<HTMLInputElement>) => {
    set(inputAtom, event.target.value);
    set(indexAtom, 0);
  }
);

export const onKeyDownAtom = atom(
  null,
  async (get, set, event: React.KeyboardEvent<HTMLDivElement>) => {
    const input = get(inputAtom);
    const index = get(indexAtom);
    const results = await get(searchAtom, true);

    const incrementIndex = () => {
      if (!results) return;
      set(indexAtom, index >= results.length - 1 ? 0 : index + 1);
    };

    const decrementIndex = () => {
      if (!results) return;
      set(indexAtom, index <= 0 ? results.length - 1 : index - 1);
    };

    const resetInput = () => {
      set(inputAtom, "");
      set(indexAtom, 0);
    };

    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
        decrementIndex();
        break;
      case "ArrowDown":
        event.preventDefault();
        incrementIndex();
        break;
      case "Tab":
        if (!input) return;
        event.preventDefault();
        event.shiftKey ? decrementIndex() : incrementIndex();
        break;
      case "Enter":
        event.preventDefault();
        if (!results) return;
        set(addAlbumAtom, results[index]);
        resetInput();
        break;
      case "Escape":
        event.preventDefault();
        resetInput();
        break;
      default:
        break;
    }
  }
);
