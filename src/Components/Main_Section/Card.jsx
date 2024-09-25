export default function Card({ text, image }) {
  return (
    <div className="card">
      <p>{text}</p>
      <img src={image} />
    </div>
  );
}
