export const getAssetUrl = (url: string): string => {
  if (!url) return '';
  let fullUrl = url;
  if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('data:')) {
    if (!url.startsWith('/staging')) {
      fullUrl = `/staging${url.startsWith('/') ? '' : '/'}${url}`;
    }
  }
  return encodeURI(fullUrl);
};
