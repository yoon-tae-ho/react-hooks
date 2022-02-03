import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  if (!opts.url) {
    return;
  }
  const refetch = () => {
    setState({
      loading: true,
      error: null,
      data: null,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState((current) => {
          return {
            ...current,
            loading: false,
            data,
          };
        });
      })
      .catch((error) => {
        setState((current) => {
          return {
            ...current,
            loading: false,
            error,
          };
        });
      });
  }, [trigger]);
  return { ...state, refetch };
};

export default useAxios;
