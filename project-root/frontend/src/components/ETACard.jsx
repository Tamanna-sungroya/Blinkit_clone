const ETACard = ({ countdown }) => {
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;
  return (
    <div className="p-3 border rounded-lg bg-yellow-100 mb-4">
      <p>ETA: {minutes}:{seconds.toString().padStart(2, "0")} ⏳</p>
    </div>
  );
};
export default ETACard;
