export default function FavoriteButton({ onHandleArtPieceInfo, currentSlug }) {
  return (
    <button
      className="button favorite"
      onClick={() => {
        onHandleArtPieceInfo(currentSlug);
      }}
    >
      I love this piece of art!
    </button>
  );
}
