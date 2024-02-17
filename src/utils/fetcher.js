const fetcher = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch.");
  }

  return data;
};

export default fetcher;
