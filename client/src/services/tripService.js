// import axios from "axios";

// // SRP: รับผิดชอบเรื่องคุยกับ API เท่านั้น
// export async function getTrips(keyword = "") {
//   const url = `http://localhost:4001/trips?keywords=${encodeURIComponent(keyword)}`;
//   const res = await axios.get(url);
//   // ป้องกัน shape เปลี่ยนแปลง
//   return Array.isArray(res?.data?.data) ? res.data.data : [];
// }

import axios from "axios";

// ถ้ารันบน localhost (ตอน dev) → ใช้พอร์ต 4001
// ถ้ารันบน Vercel (โดเมนจริง) → ใช้ Render
const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:4001"
    : "https://YOUR-BACKEND.onrender.com";

export async function getTrips(keyword = "") {
  const url = `${API_URL}/trips?keywords=${encodeURIComponent(keyword)}`;
  const res = await axios.get(url);
  return Array.isArray(res?.data?.data) ? res.data.data : [];
}