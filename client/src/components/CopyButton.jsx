import { LinkIcon } from "@heroicons/react/24/outline";

export default function CopyButton({ url }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Copied to clipboard!");
    } catch {
      alert("ไม่สามารถคัดลอกลิงก์ได้");
    }
  };

  return (
    <button
      onClick={handleCopy}
      title="Copy link"
      aria-label="Copy link"
      className="order-3 self-end mt-3
                 w-12 h-12 md:w-14 md:h-14
                 rounded-full bg-white
                 border-2 border-sky-400
                 ring-2 ring-sky-200
                 flex items-center justify-center
                 hover:bg-sky-50 active:scale-95
                 transition
                 md:absolute md:bottom-3 md:right-3 md:mt-0"
    >
      {/* เอียงขวา 45° ด้วย Tailwind (transform + arbitrary var) */}
      <LinkIcon
        className="w-6 h-6 md:w-7 md:h-7 text-sky-500 origin-center transform [--tw-rotate:45deg]"
        strokeWidth={2}
      />
    </button>
  );
}
