const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const getAssetUrl = (url: string): string => {
  if (!url) return '';
  let fullUrl = url;
  if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('data:')) {
    if (basePath && !url.startsWith(basePath)) {
      fullUrl = `${basePath}${url.startsWith('/') ? '' : '/'}${url}`;
    }
  }
  return encodeURI(fullUrl);
};
