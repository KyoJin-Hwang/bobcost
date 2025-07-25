import { useEffect } from 'react';

export default function useWatchTimeout(
  watch: unknown,
  ms: number,
  callback: () => void
) {
  useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout>;

    if (watch) {
      timeOut = setTimeout(callback, ms);
    }

    return () => {
      if (timeOut) clearTimeout(timeOut);
    };
  }, [callback, ms, watch]);
}
