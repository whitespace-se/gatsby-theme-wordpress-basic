import Axios from "axios";
import { useState, useEffect, useRef } from "react";

const axios = Axios.create({
  baseURL: process.env.GATSBY_API_URL,
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export default function useDataApi(initialData) {
  const [data, setData] = useState(initialData);
  const [request, setRequest] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Cancel requests if the component is unmounted
   */
  const cancellationRef = useRef({});
  useEffect(() => {
    cancellationRef.current.cancelToken = new Axios.CancelToken((c) => {
      cancellationRef.current.cancelRequest = c;
    });
    return () => {
      cancellationRef.current.unmounted = true;
      if (cancellationRef.current.cancelRequest) {
        cancellationRef.current.cancelRequest();
      }
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      setIsLoading(true);
      try {
        if (!process.env.GATSBY_API_URL) {
          throw new Error("GATSBY_API_URL not set");
        }
        const result = await axios({
          method: request.data ? "post" : "get",
          ...request,
          cancelToken: cancellationRef.current.cancelToken,
        });
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        if (!cancellationRef.current.unmounted) {
          setError(error);
          setIsLoading(false);
        }
      }
    };
    if (request && !cancellationRef.current.unmounted) {
      fetchData();
    }
  }, [request]);

  return [{ data, isLoading, isError: !!error, error }, setRequest];
}
