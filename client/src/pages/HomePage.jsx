import { useEffect, useRef, useState } from "react";
import SearchBar from "../components/SearchBar";
import TripCard from "../components/TripCard";
import Loading from "../components/state/Loading";
import ErrorState from "../components/state/Error";
import Empty from "../components/state/Empty";
import { getTrips } from "../services/tripService";
import useDebouncedEffect from "../hooks/useDebouncedEffect";

export default function HomePage() {
  const [trips, setTrips] = useState([]);
  const [status, setStatus] = useState("idle");
  const [keyword, setKeyword] = useState("");
  const inputRef = useRef(null);

  const fetchData = async (kw = "") => {
    try {
      setStatus("loading");
      const data = await getTrips(kw);
      setTrips(data);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useDebouncedEffect(() => {
    fetchData(keyword);
    inputRef.current?.focus();
  }, [keyword], 300);

  return (
    <div className="px-3 md:px-10 py-10">
      <h1 className="text-5xl md:text-6xl text-center text-blue-400 font-bold mb-10">
        เที่ยวไหนดี
      </h1>

      <div className="mb-10 w-full">
        <SearchBar
          inputRef={inputRef}
          value={keyword}
          onChange={setKeyword}
          label="ค้นหาที่เที่ยว"
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
        />
      </div>

      {status === "loading" && <Loading />}
      {status === "error" && <ErrorState />}
      {status === "success" && trips.length === 0 && <Empty />}

      {status === "success" && trips.length > 0 && (
        <div className="flex flex-col gap-6">
          {trips.map((item, i) => (
            <TripCard
              key={i}
              item={item}
              keyword={keyword}
              onAddKeyword={(tag) => {
                const tokens = keyword.trim().split(" ").filter(Boolean);
                if (!tokens.includes(tag)) {
                  setKeyword((prev) => (prev ? prev + " " + tag : tag));
                }
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}