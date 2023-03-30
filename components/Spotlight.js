import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function Spotlight({
  data,
  artPiecesInfo,
  onHandleArtPieceInfo,
}) {
  //const spotlight = data[Math.floor(Math.random() * (data.length - 0) + 0)];
  const spotlight = data[2];
  const info = artPiecesInfo.find((info) => info.slug === spotlight.slug) ?? {
    isFunny: false,
  };
  const { isFavorite } = info;
  return (
    <div className="spotlight">
      <h1>SPOTLIGHT</h1>
      <h2>Artist: {spotlight.artist}</h2>
      <Image
        src={spotlight.imageSource}
        alt={`spotlight-image this Month: ${spotlight.name} by ${spotlight.artist}`}
        width="400"
        height="800"
      />
      <FavoriteButton
        onHandleArtPieceInfo={onHandleArtPieceInfo}
        currentSlug={spotlight.slug}
      />

      {isFavorite ? (
        <span>
          <Image src={"/../heart.svg"} width="40" height="40" alt="a Heart" />
        </span>
      ) : null}
    </div>
  );
}
