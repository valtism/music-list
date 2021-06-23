import React, { useMemo, useRef } from "react";
import clsx from "clsx";
import debounce from "lodash.debounce";
import { AlbumObject } from "spotify-api-types";
import { useAtom } from "jotai";
import { useAtomValue, useUpdateAtom } from "jotai/utils";

import { Auth, search } from "../api";
import useOnClickOutside from "../hooks/useClickOutside";
import {
  resultsAtom,
  indexAtom,
  inputAtom,
  searchesAtom,
  setFetchedResultsAtom,
  updateInputAtom,
  resetSearchAtom,
} from "../hooks/useSearchboxState";

import { ReactComponent as EnterIcon } from "../images/enter.svg";
import { ReactComponent as SearchIcon } from "../images/search.svg";

interface SearchProps {
  auth: Auth;
  onAlbumSelect: (album: AlbumObject) => void;
}

export default function SearchBox({ auth, onAlbumSelect }: SearchProps) {
  const input = useAtomValue(inputAtom);
  const [index, setIndex] = useAtom(indexAtom);
  const [results, setResults] = useAtom(resultsAtom);
  const searches = useAtomValue(searchesAtom);

  const setInput = useUpdateAtom(updateInputAtom);
  const setFetchedResults = useUpdateAtom(setFetchedResultsAtom);
  const resetSearch = useUpdateAtom(resetSearchAtom);

  const debouncedSearch = useMemo(
    () =>
      debounce(async (query: string) => {
        const albums = await search(auth, query);
        setFetchedResults({ albums, query });
      }, 300),
    [auth, setFetchedResults]
  );

  const inputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useOnClickOutside<HTMLUListElement>(
    () => setResults([]),
    inputRef
  );

  const previousIndex = index <= 0 ? results.length - 1 : index - 1;
  const nextIndex = index >= results.length - 1 ? 0 : index + 1;

  return (
    <div
      className="w-full max-w-sm"
      onKeyDown={(e) => {
        switch (e.key) {
          case "ArrowUp":
            e.preventDefault();
            setIndex(previousIndex);
            break;
          case "ArrowDown":
            e.preventDefault();
            setIndex(nextIndex);
            break;
          case "Tab":
            e.preventDefault();
            setIndex(e.shiftKey ? previousIndex : nextIndex);
            break;
          case "Enter":
            e.preventDefault();
            if (!results[index]) return;
            onAlbumSelect(results[index]);
            resetSearch();
            break;
          case "Escape":
            e.preventDefault();
            resetSearch();
            break;
          default:
            break;
        }
      }}
    >
      <div className="relative group">
        <input
          ref={inputRef}
          autoCorrect="off"
          placeholder="Search"
          value={input}
          onChange={(e) => {
            const query = e.target.value;
            if (!searches[query]) {
              debouncedSearch(query);
            }
            setInput(query);
          }}
          onFocus={async (e) => {
            e.target.select();
            if (!input) return;
            if (searches[input]) {
              setFetchedResults({ albums: searches[input], query: input });
            } else {
              const albums = await search(auth, input);
              setFetchedResults({ albums, query: input });
            }
          }}
          className={clsx(
            "w-full border-2 border-gray-100 bg-gray-100 rounded-lg px-4 py-2 text-gray-900/90",
            "hover:border-purple-100",
            "focus:bg-white focus:border-purple-100 focus:outline-none caret-purple-600/90",
            results.length &&
              "rounded-b-none bg-white border-purple-100 outline-none"
          )}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <SearchIcon
            className={clsx(
              "w-4 h-4 fill-current text-gray-400",
              "group-hover:text-purple-500/80 group-focus-within:text-purple-500/80"
            )}
          />
        </div>
      </div>

      {!!results.length && (
        <ul
          ref={searchResultsRef}
          className="absolute z-10 w-[calc(100%-32px)] max-w-sm bg-white shadow-xl overflow-auto rounded-b-lg border-2 border-t-0 border-purple-100 divide-y-2 divide-purple-100"
        >
          {results.map((album, i) => (
            <SearchItem
              key={album.id}
              album={album}
              isHighlighted={i === index}
              onClick={() => {
                onAlbumSelect(album);
                resetSearch();
              }}
            />
          ))}
        </ul>
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
          "group relative w-full flex items-center justify-between px-2 py-1.5",
          "hover:bg-purple-100 overflow-hidden focus:outline-none",
          isHighlighted && "bg-purple-100"
        )}
        {...props}
      >
        <div className="relative w-full flex items-center space-x-2 overflow-hidden">
          <img src={album.images[2].url} className="w-10 h-10 rounded" />
          <div className="flex flex-col items-start leading-5">
            <div title={album.name} className="whitespace-nowrap">
              {album.name}
            </div>
            <div
              title={album.artists[0].name}
              className="whitespace-nowrap text-gray-900/60"
            >
              {album.artists[0].name}
            </div>
          </div>
          {!isHighlighted && (
            <div className="absolute h-full w-4 right-0 bg-gradient-to-l from-white group-hover:from-purple-100" />
          )}
        </div>
        {isHighlighted && (
          <div className="hidden md:flex absolute right-0 h-full items-center pointer-events-none">
            <div className="w-10 h-full bg-gradient-to-l from-purple-100" />
            <div className="h-full bg-purple-100 flex items-center px-4">
              <EnterIcon className="w-4 h-4 fill-current text-purple-600/60 flex-shrink-0" />
            </div>
          </div>
        )}
      </button>
    </li>
  );
}
