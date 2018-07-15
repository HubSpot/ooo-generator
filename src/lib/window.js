export const getViewportHeight = () =>
  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

export const getDocumentHeight = () => document.body.scrollHeight;
