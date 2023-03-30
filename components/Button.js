export default function Button({ text, children, classes, event }) {
  return (
    <button className={classes} onClick={event}>
      {text}
      {children}
    </button>
  );
}
