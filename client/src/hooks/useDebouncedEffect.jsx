import { useEffect } from "react";

// DRY: ดึง debounce logic มาไว้ที่เดียว
export default function useDebouncedEffect(effect, deps, delay = 300) {
  useEffect(() => {
    const timer = setTimeout(effect, delay);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(deps || []), delay]);
}