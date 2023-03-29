import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return (
    <>
      <GlobalStyle />
      <Header />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
