import ArtPieceList from "../../components/ArtPieceList";

export default function ArtPiecesPage({
  artData,
  artPiecesInfo,
  onHandleArtPieceInfo,
  entries,
  setEntries,
}) {
  return (
    <ArtPieceList
      data={artData}
      artPiecesInfo={artPiecesInfo}
      onHandleArtPieceInfo={onHandleArtPieceInfo}
      setEntries={setEntries}
    />
  );
}
