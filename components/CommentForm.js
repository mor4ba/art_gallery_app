import Button from "./Button";
import Label from "./Label";

export default function CommentForm({ artPiecesInfo, setEntries, slug }) {
  return (
    <form onSubmit={(event) => setEntries(event, slug)}>
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
    </form>
  );
}
