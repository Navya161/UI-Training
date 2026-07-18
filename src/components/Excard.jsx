import { useState } from "react";
import "./Excard.css";

function Excard() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500"
        alt="Nature"
      />

      <h2>Nature post</h2>

      <button onClick={() => setLiked(!liked)}>
        {liked ? "Like" : "Unlike"}
      </button>
    </div>
  );
}

export default Excard;