const attempt = (fn, fallback = 0) => (...args) =>
  typeof document !== 'undefined' && typeof window !== 'undefined'
    ? fn(...args)
    : fallback;

export const getViewportHeight = attempt(() =>
  Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
);

export const getDocumentHeight = attempt(() =>
  document ? document.body.scrollHeight : 0
);
