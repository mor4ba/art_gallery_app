import Image from "next/image";

export default function FavoriteButton({
  onHandleArtPieceInfo,
  currentSlug,
  isFavorite,
}) {
  return (
    <button
      className="button favorite"
      onClick={() => {
        onHandleArtPieceInfo(currentSlug);
      }}
    >
      {isFavorite ? "not anymore.." : "i love this artwork!"}

      {isFavorite ? (
        <span>
          <Image src={"/../heart.svg"} width="40" height="40" alt="a Heart" />
        </span>
      ) : null}
    </button>
  );
}
