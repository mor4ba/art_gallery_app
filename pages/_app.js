import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  const setUpFormData = (event) => {
    event.preventDefault();
    let data = Object.fromEntries(new FormData(event.target));
    var dateObj = new Date();
    var month = dateObj.toLocaleString("en-us", { month: "short" });
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    let newdate = `${month.toUpperCase()} ${day}, ${year}`;

    let obj = {
      head: data.input_head,
      text: data.input_text,
      date: newdate,
    };

    return obj;
  };

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

  function setUpEntryList(event, slug) {
    //retrieve Form data on Submit
    const data = setUpFormData(event);

    //add object data to "artPieceInfo array"
    setArtPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);
      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === slug
            ? { ...info, comments: [...info.comments, { ...data, id: uid() }] }
            : info
        );
      }
      return [
        ...artPiecesInfo,
        { slug, isFavorite: false, comments: [{ ...data, id: uid() }] },
      ];
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

  console.log("new:", artPiecesInfo);
  return (
    <>
      <GlobalStyle />
      <Header />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          artData={data}
          onHandleArtPieceInfo={handleArtPieceInfo}
          artPiecesInfo={artPiecesInfo}
          favArtData={filteredArtList}
          setEntries={setUpEntryList}
        />
      </SWRConfig>
    </>
  );
}
