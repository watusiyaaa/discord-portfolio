import "./button.css";

export default function Button({ text, onClick = "" }) {
  return (
    <button className="info-button" onClick={onClick}>
      <span className="top-key"></span>
      <span className="text">{text}</span>
      <span className="bottom-key-1"></span>
      <span className="bottom-key-2"></span>
    </button>
  );
}
