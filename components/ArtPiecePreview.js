import Image from "next/image";

export default function ArtPiecePreview({ data }) {
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
    </>
  );
}
