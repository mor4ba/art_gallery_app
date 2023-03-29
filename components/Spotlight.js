import Image from "next/image";

export default function Spotlight({ data }) {
  return (
    <div className="spotlight">
      <h1>SPOTLIGHT</h1>
      <h2>Artist: {data.artist}</h2>
      <Image
        src={data.imageSource}
        alt={`spotlight-image this Month: ${data.name} by ${data.artist}`}
        width="400"
        height="800"
      />
    </div>
  );
}
