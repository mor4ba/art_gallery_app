import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import { ColorBlock } from "./colorBlock.styled";
import CommentForm from "./CommentForm";
import { uid } from "uid";

export default function ArtPiece({
  data,
  artPiecesInfo,
  onHandleArtPieceInfo,
  setEntries,
  entries,
}) {
  const info = artPiecesInfo.find((info) => info.slug === data.slug) ?? {
    isFunny: false,
  };
  const { isFavorite } = info;

  return (
    <div className="art__single">
      <Link href={"/art-pieces"} className="button">
        Back
      </Link>
      <h2>{data.name}</h2>
      <h3>Artist: {data.artist}</h3>
      <Image
        src={data.imageSource}
        width="250"
        height="150"
        alt={`Image to the Art of ${data.name}`}
      />
      <div className="art__info">
        <p>Genre: {data.genre}</p>
        <p>Year: {data.year}</p>
      </div>
      <FavoriteButton
        onHandleArtPieceInfo={onHandleArtPieceInfo}
        currentSlug={data.slug}
        isFavorite={isFavorite}
      />

      <div className="art__colors">
        {data.colors.map((color) => (
          <li key={uid()}>
            <ColorBlock hex={color} />
          </li>
        ))}
      </div>

      <CommentForm
        slug={data.slug}
        artPiecesInfo={artPiecesInfo}
        entries={entries}
        setEntries={setEntries}
      />

      {/* {current.hasOwnProperty("comments") ? (
        <section>
          {current.comments.map((comment) => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </section>
      ) : null} */}
    </div>
  );
}
