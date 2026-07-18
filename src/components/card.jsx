import "./Card.css";

export default function Card({ title, description }) {
  return (
    <div className="card">
      <h1>{title}</h1>
      <button>Click Me</button>
      <p>{description}</p>
      <a href="#">Go Somewhere</a>
    </div>
  );
}