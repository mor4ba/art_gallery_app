import Image from "next/image";

export default function Spotlight({ data }) {
  const spotlight = data[Math.floor(Math.random() * (data.length - 0) + 0)];

  return (
    <div className="spotlight">
      <h1>SPOTLIGHT</h1>
      <h2>Artist: {spotlight.artist}</h2>
      <Image
        src={spotlight.imageSource}
        alt={`spotlight-image this Month: ${spotlight.name} by ${spotlight.artist}`}
        width="400"
        height="800"
      />
    </div>
  );
}
