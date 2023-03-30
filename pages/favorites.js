import ArtPieceList from "../components/ArtPieceList";

export default function Favorites({
  favArtData,
  artPiecesInfo,
  onHandleArtPieceInfo,
}) {
  return (
    <>
      <h1>Favorites</h1>
      <ArtPieceList
        data={favArtData}
        artPiecesInfo={artPiecesInfo}
        onHandleArtPieceInfo={onHandleArtPieceInfo}
      />
    </>
  );
}
