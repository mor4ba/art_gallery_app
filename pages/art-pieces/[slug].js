import { useRouter } from "next/router";
import ArtPiece from "../../components/ArtPiece";

export default function ReturnArtPiece({
  artData,
  artPiecesInfo,
  onHandleArtPieceInfo,
  setEntries,
  entries,
}) {
  const router = useRouter();
  const { slug } = router.query;
  const currentArtPiece = artData.find((art) => art.slug == slug);
  return (
    <ArtPiece
      data={currentArtPiece}
      artPiecesInfo={artPiecesInfo}
      onHandleArtPieceInfo={onHandleArtPieceInfo}
      entries={entries}
      setEntries={setEntries}
    />
  );
}
