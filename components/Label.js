export default function Label({ id, name, text }) {
  return (
    <label htmlFor={id} name={name}>
      {text}
    </label>
  );
}
