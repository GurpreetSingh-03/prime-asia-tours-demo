export const getAssetUrl = (url: string): string => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
    return url;
  }
  if (url.startsWith('/staging')) {
    return url;
  }
  return `/staging${url.startsWith('/') ? '' : '/'}${url}`;
};
