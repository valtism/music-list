import React, { useRef } from "react";

import Title from "./components/Title";
import DarkModeToggle from "./components/DarkModeToggle";
import Searchbox from "./components/Searchbox";
import AlbumGrid from "./components/AlbumGrid";
import DownloadButton from "./components/DownloadButton";

import { useFetchAuth } from "./hooks/useFetchAuth";
import { useDarkMode } from "./hooks/useDarkMode";

export default function App() {
  useFetchAuth();
  useDarkMode();
  const exportRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative font-nunito flex flex-col space-y-10 items-center px-4 py-10 text-gray-900 selection:bg-pink-100 dark:selection:bg-pink-200/80 selection:text-purple-900">
      <div className="absolute top-2 right-2">
        <DarkModeToggle />
      </div>
      <Title>Music List</Title>
      <Searchbox />
      <AlbumGrid exportRef={exportRef} />
      <DownloadButton exportRef={exportRef} />
    </div>
  );
}
