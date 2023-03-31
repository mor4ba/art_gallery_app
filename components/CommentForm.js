import Button from "./Button";
import Label from "./Label";
import styled from "styled-components";

export default function CommentForm({ setEntries, slug }) {
  return (
    <StyledForm onSubmit={(event) => setEntries(event, slug)}>
      <Label id="input_head" name="input_head" text="Headline" />
      <input id="input_head" type="text" name="input_head" required />
      <Label id="input_text" name="input_text" text="Content" />
      <textarea
        required
        type="text"
        id="input_text"
        name="input_text"
        cols={20}
        rows={8}
      />
      <Button type="submit" disabled={false} text="Create" />
    </StyledForm>
  );
}

const StyledForm = styled.form`
   {
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    margin-bottom: 3rem;

    label {
      margin-bottom: 0.5rem;
    }

    input,
    textarea {
      margin-bottom: 2rem;
    }

    textarea {
      padding: 1rem;
    }
  }
`;
