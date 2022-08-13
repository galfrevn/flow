const fetcher = (url: string) => fetch(url).then((response) => response.json());
export default fetcher;
