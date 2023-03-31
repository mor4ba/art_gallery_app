import styled from "styled-components";

export default function Comment({ data }) {
  return (
    <StyledComment className="entry">
      <time className="entry__date">{data.date}</time>
      <div className="entry__content">
        <h2 className="entry__heading">{data.head}</h2>

        <p className="entry__notes">{data.text}</p>
      </div>
    </StyledComment>
  );
}

const StyledComment = styled.article`
   {
    text-align: left;
    width: 100%;
    padding: 1.5rem 0;
    border-bottom: 2px solid lightgrey;
    margin-bottom: 1rem;
    position: relative;

    h2 {
      font-style: bold;
      padding-right: 2.5rem;
    }

    p {
      padding-right: 2.5rem;
    }
  }
`;
