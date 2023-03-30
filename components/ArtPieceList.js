import Image from "next/image";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieceList({
  data,
  artPiecesInfo,
  onHandleArtPieceInfo,
}) {
  return (
    <ul>
      {data.map((art) => {
        return (
          <li key={art.slug}>
            <ArtPiecePreview
              data={art}
              artPiecesInfo={artPiecesInfo}
              onHandleArtPieceInfo={onHandleArtPieceInfo}
            />
            ;
          </li>
        );
      })}
    </ul>
  );
}
