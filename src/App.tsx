import React from "react";

import Layout from "./components/Layout";
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

  return (
    <Layout>
      <Title>Music List</Title>
      <Searchbox />
      <AlbumGrid />
      <DownloadButton />
      <div className="absolute bottom-4 right-4">
        <DarkModeToggle />
      </div>
    </Layout>
  );
}
