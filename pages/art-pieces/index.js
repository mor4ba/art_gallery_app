import ArtPieceList from "../../components/ArtPieceList";

export default function ArtPiecesPage({
  artData,
  artPiecesInfo,
  onHandleArtPieceInfo,
  entries,
  setEntries,
}) {
  return (
    <>
      <h1>All Pieces</h1>
      <ArtPieceList
        data={artData}
        artPiecesInfo={artPiecesInfo}
        onHandleArtPieceInfo={onHandleArtPieceInfo}
        setEntries={setEntries}
      />
    </>
  );
}
