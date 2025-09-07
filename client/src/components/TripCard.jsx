import TagList from "./TagList";
import PhotoGrid from "./PhotoGrid";
import CopyButton from "./CopyButton";

export default function TripCard({ item, keyword, onAddKeyword }) {
  return (
    <div className="relative flex flex-col md:flex-row items-start gap-4 p-4 shadow-sm hover:shadow-md transition">
      {item.photos?.[0] && (
        <img
          className="rounded-3xl w-full md:w-[350px] h-[250px] object-cover order-1"
          src={item.photos[0]}
          alt={item.title}
        />
      )}

      <div className="flex flex-col flex-1 order-2">
        <h2 className="mb-2">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold hover:underline"
          >
            {item.title}
          </a>
        </h2>

        <p className="text-gray-700 mb-2">
          {item.description.length > 100
            ? item.description.slice(0, 100) + "..."
            : item.description}
        </p>

        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline mb-2"
        >
          อ่านต่อ
        </a>

        <TagList
          tags={item.tags || []}
          onClickTag={onAddKeyword}
          currentKeyword={keyword}
        />

        <PhotoGrid photos={item.photos?.slice(1, 4) || []} title={item.title} />
      </div>

      <CopyButton url={item.url} />
    </div>
  );
}
