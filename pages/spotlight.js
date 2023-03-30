import Spotlight from "../components/Spotlight";

export default function SpotlightPage({
  artData,
  onHandleArtPieceInfo,
  artPiecesInfo,
}) {
  return (
    <Spotlight
      data={artData}
      onHandleArtPieceInfo={onHandleArtPieceInfo}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
