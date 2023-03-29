import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href={"/spotlight"}>Spotlight</Link>
        <Link href={"/"}>List of Art</Link>
      </nav>
    </header>
  );
}
