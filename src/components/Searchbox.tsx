import React, { useMemo, useRef } from "react";
import clsx from "clsx";
import debounce from "lodash.debounce";
import { AlbumObject } from "spotify-api-types";
import { Auth, search } from "../api";
import { useSearchboxState } from "../hooks/useSearchboxState";
import useOnClickOutside from "../hooks/useClickOutside";
import { ReactComponent as EnterIcon } from "../images/enter.svg";
import { ReactComponent as SearchIcon } from "../images/search.svg";

interface SearchProps {
  auth: Auth;
  onAlbumSelect: (album: AlbumObject) => void;
}

export default function SearchBox({ auth, onAlbumSelect }: SearchProps) {
  const [state, dispatch] = useSearchboxState();
  const { input, index, albums, searches } = state;

  const debouncedSearch = useMemo(
    () =>
      debounce(async (query: string) => {
        const albums = await search(auth, query);
        dispatch({ type: "setAlbums", payload: { albums, query } });
      }, 300),
    [auth, dispatch]
  );

  const inputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useOnClickOutside<HTMLDivElement>(
    () => dispatch({ type: "blur" }),
    inputRef
  );

  return (
    <div className="w-96">
      <div className="relative group">
        <input
          ref={inputRef}
          autoCorrect="off"
          placeholder="Search"
          value={input}
          onChange={(e) => {
            const query = e.target.value;
            if (searches[query]) {
              // We have this search in memory. Cancel API call
              debouncedSearch.cancel();
            } else {
              debouncedSearch(query);
            }
            dispatch({ type: "setInput", payload: query });
          }}
          onFocus={async (e) => {
            e.target.select();
            if (!input) return;
            if (searches[input]) {
              dispatch({
                type: "setAlbums",
                payload: { albums: searches[input], query: input },
              });
            } else {
              const albums = await search(auth, input);
              dispatch({
                type: "setAlbums",
                payload: { albums, query: input },
              });
            }
          }}
          onKeyDown={(e) => {
            switch (e.key) {
              case "ArrowUp":
                e.preventDefault();
                return dispatch({ type: "arrowUp" });
              case "ArrowDown":
                e.preventDefault();
                return dispatch({ type: "arrowDown" });
              case "Enter":
                e.preventDefault();
                if (!albums[index]) return;
                onAlbumSelect(albums[index]);
                debouncedSearch.cancel();
                return dispatch({ type: "reset" });
              case "Escape":
                e.preventDefault();
                debouncedSearch.cancel();
                return dispatch({ type: "reset" });
              case "Tab":
              default:
                break;
            }
          }}
          className={clsx(
            "w-full border-2 border-gray-100 bg-gray-100 rounded-lg px-4 py-2",
            "hover:border-purple-100",
            "focus:bg-white focus:border-purple-100 focus:outline-none focus:rounded-b-none"
          )}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 pointer-events-none">
          <SearchIcon className="w-4 h-4 fill-current text-gray-400 group-hover:text-gray-600 group-focus-within:text-gray-600" />
        </div>
      </div>

      {!!albums.length && (
        <div
          ref={searchResultsRef}
          className="absolute w-96 bg-white shadow-lg overflow-auto rounded-b-lg border-2 border-t-0 border-purple-100 z-10"
        >
          <ul className="shadow">
            {albums.map((album, i) => (
              <SearchItem
                key={album.id}
                album={album}
                isHighlighted={i === index}
                onClick={() => {
                  onAlbumSelect(album);
                  dispatch({ type: "reset" });
                }}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

interface SearhItemProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  album: AlbumObject;
  isHighlighted: boolean;
}

function SearchItem({ album, isHighlighted, ...props }: SearhItemProps) {
  return (
    <li key={album.id}>
      <button
        className={clsx(
          "relative w-full flex items-center justify-between px-2 py-1.5 hover:bg-purple-100 overflow-hidden",
          isHighlighted && "bg-purple-100 shadow-inner"
        )}
        {...props}
      >
        <div className="flex items-center space-x-2 overflow-hidden">
          <img src={album.images[2].url} className="w-10 h-10 rounded" />
          <div className="flex flex-col items-start leading-5">
            <div title={album.name} className="whitespace-nowrap">
              {album.name}
            </div>
            <div
              title={album.artists[0].name}
              className="whitespace-nowrap text-gray-900 text-opacity-60"
            >
              {album.artists[0].name}
            </div>
          </div>
        </div>
        {isHighlighted && (
          <div className="absolute right-0 h-full flex items-center pointer-events-none">
            <div className="w-10 h-full bg-gradient-to-l from-purple-100" />
            <div className="h-full bg-purple-100 flex items-center">
              <EnterIcon className="w-4 h-4 px-4 mr-4 fill-current text-purple-600 text-opacity-80" />
            </div>
          </div>
        )}
      </button>
    </li>
  );
}
