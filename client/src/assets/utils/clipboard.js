// src/utils/clipboard.js
export async function copyText(text) {
  if (!navigator || !navigator.clipboard || !navigator.clipboard.writeText) {
    throw new Error("Clipboard API not supported");
  }
  await navigator.clipboard.writeText(text);
}
