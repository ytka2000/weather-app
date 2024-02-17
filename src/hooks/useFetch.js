import { useEffect, useState } from "react";

import fetcher from "../utils/fetcher";

const useFetch = (url, options, initialData) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const fetchedData = await fetcher(url, options);
        setData(fetchedData);
      } catch (e) {
        setError(e.message || "Failed to fetch.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [options, url]);

  return { data, isLoading, error };
};

export default useFetch;
