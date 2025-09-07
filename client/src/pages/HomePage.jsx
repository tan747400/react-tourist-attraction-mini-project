import { useEffect, useRef, useState } from "react";
import SearchBar from "../components/SearchBar";;

export default function HomePage() {
  const [keyword, setKeyword] = useState("");
  const inputRef = useRef(null);

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
    </div>
  );
}
