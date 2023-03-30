import Image from "next/image";
import Link from "next/link";

export default function ArtPiece({ data }) {
  return (
    <>
      <h2>title: {data.name}</h2>
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
      <Link href={"/art-pieces"} className="button">
        Back
      </Link>
    </>
  );
}
