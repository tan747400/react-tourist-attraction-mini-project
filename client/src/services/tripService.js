import axios from "axios";

// SRP: รับผิดชอบเรื่องคุยกับ API เท่านั้น
export async function getTrips(keyword = "") {
  const url = `http://localhost:4001/trips?keywords=${encodeURIComponent(keyword)}`;
  const res = await axios.get(url);
  // ป้องกัน shape เปลี่ยนแปลง
  return Array.isArray(res?.data?.data) ? res.data.data : [];
}
