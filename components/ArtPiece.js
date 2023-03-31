import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import { ColorBlock } from "./colorBlock.styled";
import CommentForm from "./CommentForm";
import { uid } from "uid";
import Comment from "./Comment";
import styled from "styled-components";

export default function ArtPiece({
  data,
  artPiecesInfo,
  onHandleArtPieceInfo,
  setEntries,
}) {
  const info = artPiecesInfo.find((info) => info.slug === data.slug) ?? {
    isFunny: false,
  };
  const { isFavorite } = info;

  return (
    <div className="art__single">
      <Link href={"/art-pieces"} className="button backwards">
        Back
      </Link>
      <h2>{data.name}</h2>
      <h3>Artist: {data.artist}</h3>
      <Image
        className="artwork"
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

      <ArtColors className="art__colors">
        {data.colors.map((color) => (
          <li key={uid()}>
            <ColorBlock hex={color} />
          </li>
        ))}
      </ArtColors>

      <CommentForm
        slug={data.slug}
        artPiecesInfo={artPiecesInfo}
        setEntries={setEntries}
      />

      {info.hasOwnProperty("comments") ? (
        <section>
          {info.comments.map((comment) => (
            <li key={comment.id}>
              <Comment data={comment} />
            </li>
          ))}
        </section>
      ) : null}
    </div>
  );
}

export const ArtColors = styled.div`
   {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;

    li {
      list-style: none;
      width: 80px;
      height: 80px;
      flex: 1 1 0;

      div {
        height: 100%;
        width: 100%;
      }
    }
  }
`;
