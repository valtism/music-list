import React, { forwardRef, Suspense, useRef } from "react";
import clsx from "clsx";
import { AlbumObject } from "spotify-api-types";
import { useAtomValue, useUpdateAtom } from "jotai/utils";

import useOnClickOutside from "../hooks/useClickOutside";
import {
  indexAtom,
  inputAtom,
  searchAtom,
  onClickOutsideAtom,
  onInputChangeAtom,
  onKeyDownAtom,
  onResultClickAtom,
} from "../state/searchboxState";

import { ReactComponent as EnterIcon } from "../images/enter.svg";
import { ReactComponent as SearchIcon } from "../images/search.svg";
import { ReactComponent as SpinnerIcon } from "../images/spinner.svg";

export default function SearchBox() {
  const onKeyDown = useUpdateAtom(onKeyDownAtom);
  const onClickOutside = useUpdateAtom(onClickOutsideAtom);

  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useOnClickOutside<HTMLUListElement>(
    onClickOutside,
    inputRef
  );

  return (
    <div className="w-full max-w-sm" onKeyDown={onKeyDown}>
      <SearchInput inputRef={inputRef} />
      <Suspense
        fallback={
          <ResultsListBox>
            <li className="flex items-center justify-center h-12">
              <SpinnerIcon className="animate-spin h-5 w-5 text-gray-500" />
            </li>
          </ResultsListBox>
        }
      >
        <ResultsList resultsRef={resultsRef} />
      </Suspense>
    </div>
  );
}

interface SearchInputProps {
  inputRef: React.RefObject<HTMLInputElement>;
}
function SearchInput({ inputRef }: SearchInputProps) {
  const input = useAtomValue(inputAtom);
  const onInputChange = useUpdateAtom(onInputChangeAtom);

  return (
    <div className="relative group">
      <input
        ref={inputRef}
        autoCorrect="off"
        spellCheck="false"
        placeholder="Search"
        value={input}
        onChange={onInputChange}
        className={clsx(
          "w-full border-2 rounded-lg px-4 py-2 focus:outline-none",
          "bg-purple-100 text-gray-900/90 border-purple-100 caret-purple-600/90",
          "dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:caret-purple-200/90",
          "hover:border-purple-200 focus:border-purple-200 focus:bg-white",
          "dark:hover:border-gray-500 dark:focus:border-gray-400/30 dark:focus:bg-gray-900",
          !!input && "rounded-b-none bg-white border-purple-100 outline-none"
        )}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
        <SearchIcon
          className={clsx(
            "w-4 h-4 fill-current",
            "text-gray-400 group-hover:text-purple-500/80 group-focus-within:text-purple-500/80",
            "dark:text-gray-500 group-hover:text-purple-400 group-focus-within:text-purple-400"
          )}
        />
      </div>
    </div>
  );
}

interface ResultsListProps {
  resultsRef: React.RefObject<HTMLUListElement>;
}

function ResultsList({ resultsRef }: ResultsListProps) {
  const index = useAtomValue(indexAtom);
  const results = useAtomValue(searchAtom);
  const onResultClick = useUpdateAtom(onResultClickAtom);

  if (!results?.length) return null;

  return (
    <ResultsListBox ref={resultsRef}>
      {results.map((album, i) => (
        <Result
          key={album.id}
          isHighlighted={i === index}
          album={album}
          onClick={() => onResultClick(album)}
        />
      ))}
    </ResultsListBox>
  );
}

interface ResultsListBoxProps {
  children: React.ReactNode;
}
export const ResultsListBox = forwardRef<HTMLUListElement, ResultsListBoxProps>(
  function myFunc(props, ref) {
    return (
      <ul
        ref={ref}
        className={clsx(
          "absolute z-10 w-[calc(100%-32px)] max-w-sm shadow-xl overflow-auto",
          "rounded-b-lg border-2 border-t-0 divide-y-2",
          "bg-white text-gray-900 border-purple-200 divide-purple-200",
          "dark:bg-gray-900 dark:text-white dark:border-gray-400/30 dark:divide-gray-400/30"
        )}
      >
        {/* eslint-disable-next-line react/prop-types */}
        {props.children}
      </ul>
    );
  }
);

interface ResultProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  album: AlbumObject;
  isHighlighted: boolean;
}

function Result({ album, isHighlighted, ...props }: ResultProps) {
  return (
    <li key={album.id}>
      <button
        className={clsx(
          "group relative w-full flex items-center justify-between px-2 py-1.5",
          "hover:bg-purple-100 dark:hover:bg-gray-700 overflow-hidden",
          isHighlighted && "bg-purple-100 dark:bg-gray-700"
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
              className="whitespace-nowrap text-gray-900/60 dark:text-white/60"
            >
              {album.artists[0].name}
            </div>
          </div>
          {!isHighlighted && (
            <div className="absolute h-full w-4 right-0 bg-gradient-to-l from-white  dark:from-gray-900 group-hover:from-purple-100 dark:group-hover:from-gray-700/30" />
          )}
        </div>
        {isHighlighted && (
          <div className="hidden md:flex absolute right-0 h-full items-center pointer-events-none">
            <div className="w-10 h-full bg-gradient-to-l from-purple-100 dark:from-gray-700" />
            <div className="h-full flex items-center px-4 bg-purple-100 dark:bg-gray-700">
              <EnterIcon className="w-4 h-4 fill-current text-purple-600/60 dark:text-purple-300/100 flex-shrink-0" />
            </div>
          </div>
        )}
      </button>
    </li>
  );
}
