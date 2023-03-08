import { useEffect, useState } from "react";

type Status = "loading" | "loaded" | "error";

interface FetchProps<T> {
  data?: T;
  error?: string;
  status?: Status;
}

export const useFetchData = <T>(url: string): FetchProps<T> => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string>('');
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setStatus("loaded");
      } catch (error) {
        setStatus("error");
        setError("Ocorreu um erro");
        console.error(error);
      } finally {
        setStatus("loaded");
      }
    };
    fetchData()
  }, [url]);

  return { data, error, status };
};
