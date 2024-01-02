export default function debounce(fn: (...args: unknown[]) => void, ms = 300) {
  let timeoutId: NodeJS.Timeout | undefined;
  return function (...args: unknown[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), ms);
  };
}
