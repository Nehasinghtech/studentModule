function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      <span className="font-semibold">{rating}</span>

      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>{rating >= star ? "⭐" : "☆"}</span>
      ))}
    </div>
  );
}

export default StarRating;
