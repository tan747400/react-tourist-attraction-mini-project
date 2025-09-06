import { useState } from "react";

export default function HomePage() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="px-3 md:px-10 py-10">
      <h1 className="text-5xl md:text-6xl text-center text-blue-400 font-bold mb-10">
        เที่ยวไหนดี
      </h1>
    </div>
  );
}