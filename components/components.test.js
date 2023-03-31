import { render, screen } from "@testing-library/react";
import ArtPieceList from "./ArtPieceList";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

const mockData = [
  {
    slug: "something-as-a-slug",
    name: "something-as-a-name",
    src: "image-source",
  },
  {
    slug: "something-as-a-slug",
    name: "something-as-a-name",
    src: "image-source",
  },
  {
    slug: "something-as-a-slug",
    name: "something-as-a-name",
    src: "image-source",
  },
  {
    slug: "something-as-a-slug",
    name: "something-as-a-name",
    src: "image-source",
  },
  {
    slug: "something-as-a-slug",
    name: "something-as-a-name",
    src: "image-source",
  },
];

test("Each entry of ArtPieces is rendered in a list", () => {
  const result = ArtPieceList(mockData);
});
