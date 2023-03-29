import ArtPiece from "../components/ArtPieces";
import Spotlight from "../components/Spotlight";
import useSWR from "swr";

export default function HomePage() {
  const { data, isLoading } = useSWR("https://example-apis.vercel.app/api/art");

  if (isLoading) return <h2>Is loading, no art pieces yet!</h2>;

  const artData = data;
  const spotlightArtData =
    artData[Math.floor(Math.random() * (artData.length - 0) + 0)];

  return (
    <div>
      <Spotlight data={spotlightArtData} />
      <ArtPiece data={artData} />
    </div>
  );
}
