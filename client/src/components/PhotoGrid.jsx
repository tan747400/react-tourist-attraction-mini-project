export default function PhotoGrid({ photos, title }) {
    if (!photos.length) return null;
    return (
      <div className="flex gap-2 mt-2">
        {photos.map((photo, i) => (
          <img
            key={i}
            className="w-24 h-24 object-cover rounded-lg"
            src={photo}
            alt={`${title} ${i + 1}`}
          />
        ))}
      </div>
    );
  }