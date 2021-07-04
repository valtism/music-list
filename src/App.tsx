import React from "react";

import Layout from "./components/Layout";
import Title from "./components/Title";
import Searchbox from "./components/Searchbox";
import AlbumGrid from "./components/AlbumGrid";
import DownloadButton from "./components/DownloadButton";
import DarkModeToggle from "./components/DarkModeToggle";

import { useFetchAuth } from "./hooks/useFetchAuth";
import { useDarkMode } from "./hooks/useDarkMode";

export default function App() {
  useFetchAuth();
  useDarkMode();

  return (
    <Layout>
      <Title>Album Charter</Title>
      <Searchbox />
      <AlbumGrid />
      <DownloadButton />
      <div className="absolute bottom-4 right-4">
        <DarkModeToggle />
      </div>
    </Layout>
  );
}
