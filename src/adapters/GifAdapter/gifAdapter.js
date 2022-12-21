export const gifAdapter = (data) => {
  return {
    id: data.id,
    title: data.title,
    url: data.images.downsized_large.url,
  };
};
