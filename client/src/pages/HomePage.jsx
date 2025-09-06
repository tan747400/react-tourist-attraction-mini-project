import { useState, useRef } from "react";

export default function HomePage() {
  const [keyword, setKeyword] = useState("");
  const inputRef = useRef(null);

  return (
    <div className="px-3 md:px-10 py-10">
      <h1 className="text-5xl md:text-6xl text-center text-blue-400 font-bold mb-10">
        เที่ยวไหนดี
      </h1>

      {/* SearchBar (inline) */}
      <div className="mb-10 w-full">
        <label className="block w-full max-w-6xl mx-auto text-gray-700 text-base mb-2 text-left">
          ค้นหาที่เที่ยว
        </label>
        <input
          type="text"
          ref={inputRef}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
          className="block w-full max-w-6xl mx-auto p-3 border-b-2 border-gray-400 placeholder:text-center text-left"
        />
      </div>
    </div>
  );
}