import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import React from "react";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (isLoading) return <div> we wait.</div>;

  return (
    <>
      <GlobalStyle />
      <Header />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} artData={data} />
      </SWRConfig>
    </>
  );
}
