import {useState} from "react";

const useApi = <T>(apiFunc: Function) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

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
//Proyec20

