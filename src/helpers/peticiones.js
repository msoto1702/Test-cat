export const noticias = async () => {
  const resp = await fetch(
    `https://newsapi.org/v2/top-headlines?category=technology&apiKey=c56d3507bee8426b96c23afbc0b1b5bf&country=ar`
  );
  const data = await resp.json();
  return data.articles;
};
