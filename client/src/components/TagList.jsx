// DRY: logic คลิก tag อยู่ที่เดียว ใช้ซ้ำได้
export default function TagList({ tags, onClickTag, currentKeyword }) {
    return (
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, idx) => (
          <div key={idx} className="flex items-center gap-1">
            {/* ถ้าเป็นตัวสุดท้ายและไม่ใช่แท็กแรก → แสดง "และ" แยกออกมา */}
            {idx === tags.length - 1 && idx !== 0 && (
              <span className="text-sm text-gray-500">และ</span>
            )}
  
            {/* ปุ่ม tag คลิกได้ */}
            <button
              type="button"
              onClick={() => onClickTag(tag)}
              className="text-sm text-gray-600 hover:text-blue-500"
              aria-pressed={currentKeyword.includes(tag)}
            >
              {tag}
            </button>
          </div>
        ))}
      </div>
    );
  }
  