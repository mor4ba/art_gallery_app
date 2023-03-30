import { useRouter } from "next/router";
import ArtPiece from "../../components/ArtPiece";

export default function ReturnArtPiece({ artData }) {
  const router = useRouter();
  const { slug } = router.query;
  const currentArtPiece = artData.find((art) => art.slug == slug);
  console.log(currentArtPiece);
  console.log(slug);
  return <ArtPiece data={currentArtPiece} />;
}
