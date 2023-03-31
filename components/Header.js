import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/spotlight"}>Spotlight</Link>
        <Link href={"/art-pieces"}>Pieces</Link>
        <Link href={"/favorites"}>Favorites</Link>
      </nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
   {
    width: 100%;
    padding: 1rem 0;
    background: lightgrey;

    nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 2rem;

      a {
        text-decoration: none;
        color: black;
        font-size: 1.2rem;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
`;
