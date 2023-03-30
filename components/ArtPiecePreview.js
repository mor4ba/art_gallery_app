import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ArtPiecePreview({
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
      <Link href={`/art-pieces/${data.slug}`}>
        <Image
          src={data.imageSource}
          width="250"
          height="150"
          alt={`Image to the Art of ${data.name}`}
        />
      </Link>
      <FavoriteButton
        onHandleArtPieceInfo={onHandleArtPieceInfo}
        currentSlug={data.slug}
      />
      {isFavorite ? (
        <span>
          <Image src={"/../heart.svg"} width="40" height="40" alt="a Heart" />
        </span>
      ) : null}
    </>
  );
}
