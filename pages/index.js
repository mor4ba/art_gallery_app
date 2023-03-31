import styled from "styled-components";

export default function HomePage() {
  return (
    <HomeContainer>
      <h1> Welcome to this beautiful Art gallery, this is home!</h1>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
   {
    position: relative;
    display: block;
    padding: 0 2rem;
    margin-top: 30%;

    h1 {
      font-family: Times-new-roman, serif;
      font-size: 4rem;
    }
  }
`;
