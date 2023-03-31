import Image from "next/image";
import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

export default function ArtPieceList({
  data,
  artPiecesInfo,
  onHandleArtPieceInfo,
}) {
  return (
    <StyledUl>
      {data.map((art) => {
        return (
          <li key={art.slug}>
            <ArtPiecePreview
              data={art}
              artPiecesInfo={artPiecesInfo}
              onHandleArtPieceInfo={onHandleArtPieceInfo}
            />
          </li>
        );
      })}
    </StyledUl>
  );
}

const StyledUl = styled.ul`
   {
    display: flex;
    margin: 0 auto;
    margin-top: 3rem;
    flex-direction: column;
    width: fit-content;
    gap: 4rem;

    h2,
    h3 {
      line-height: 1.4;
      margin-bottom: 0.5rem;
    }

    li {
      display: flex;
      flex-direction: column;
      position: relative;

      a img {
        width: 100%;
        object-fit: contain;
        height: auto;
        box-shadow: 1px 1px 17px -1px black;
      }

      a {
        margin-bottom: 0.5rem;
      }
    }
  }
`;
