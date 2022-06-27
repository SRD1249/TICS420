import {useState} from "react";

const useApi = (apiFunc: Function) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const get = async () => {
    setIsLoading(true);
    const response = await apiFunc();
    setError(!response.ok);
    setData(response.data);
    setIsLoading(false);
    return response;
  };

  return {data, error, isLoading, get};
};

export default useApi;

