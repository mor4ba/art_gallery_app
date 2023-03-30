import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ArtPiece({
  data,
  artPiecesInfo,
  onHandleArtPieceInfo,
}) {
  const info = artPiecesInfo.find((info) => info.slug === data.slug) ?? {
    isFunny: false,
  };
  const { isFavorite } = info;

  return (
    <>
      <h2>title: {data.name}</h2>
      <h3>Artist: {data.artist}</h3>
      <Image
        src={data.imageSource}
        width="250"
        height="150"
        alt={`Image to the Art of ${data.name}`}
      />
      <div className="art__info">
        <p>Genre: {data.genre}</p>
        <p>Year: {data.year}</p>
      </div>
      <FavoriteButton
        onHandleArtPieceInfo={onHandleArtPieceInfo}
        currentSlug={data.slug}
      />
      {isFavorite ? (
        <span>
          <Image src={"/../heart.svg"} width="40" height="40" alt="a Heart" />
        </span>
      ) : null}

      <Link href={"/art-pieces"} className="button">
        Back
      </Link>
    </>
  );
}
