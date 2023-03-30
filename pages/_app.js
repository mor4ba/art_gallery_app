import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import React from "react";
import Header from "../components/Header";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  function handleArtPieceInfo(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);
      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }
      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }

  const { data, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (isLoading) return <div> we wait.</div>;

  const filteredArt = artPiecesInfo.filter((artPiece) => artPiece.isFavorite);

  const filteredArtList = data.filter((element) =>
    filteredArt.some((item) => element.slug === item.slug)
  );

  return (
    <>
      <GlobalStyle />
      <Header />
      {/* <Heart /> */}
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          artData={data}
          onHandleArtPieceInfo={handleArtPieceInfo}
          artPiecesInfo={artPiecesInfo}
          favArtData={filteredArtList}
        />
      </SWRConfig>
    </>
  );
}
