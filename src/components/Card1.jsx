
import "./Card1.css";

export default function Card({ title, price, features }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{price}</p>
      <ul>
        {/* features = ["feature1", "feature2", "feature3"] */}
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </ul>
    </div>
  );
}