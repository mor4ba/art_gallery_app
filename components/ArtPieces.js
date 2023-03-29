import Image from "next/image";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPiece({ data }) {
  return (
    <ul>
      {data.map((art) => {
        return (
          <li key={art.slug}>
            <ArtPiecePreview data={art} />;
          </li>
        );
      })}
    </ul>
  );
}
