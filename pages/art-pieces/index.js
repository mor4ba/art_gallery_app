import ArtPieceList from "../../components/ArtPieceList";

export default function ArtPiecesPage({
  artData,
  artPiecesInfo,
  onHandleArtPieceInfo,
}) {
  return (
    <ArtPieceList
      data={artData}
      artPiecesInfo={artPiecesInfo}
      onHandleArtPieceInfo={onHandleArtPieceInfo}
    />
  );
}
