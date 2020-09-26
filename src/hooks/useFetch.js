/* eslint-disable no-catch-shadow */
/* eslint-disable no-shadow */
import {useState} from 'react';

const useFetch = (
  endpoint,
  state = null,
  options = {},
  storeAction = null,
  baseURL = 'https://baseURL',
) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const [token, storeToken, removeToken] = useStorage('patricia_token');

  const predefinedOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  };

  options = {...predefinedOptions, options};

  const dispatchFetch = (body = {}) => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const token = state?.token;

        options = token ? {...options, token} : options;

        const res = await fetch(baseURL + endpoint, options);
        const json = await res.json();

        if (res.ok) {
          storeAction && storeAction(json?.data);
          setResponse(json?.data);
          setIsLoading(false);
        } else {
          setError(json);
          setResponse(null);
          setIsLoading(false);
        }
      } catch (error) {
        setError(error);
        setResponse(null);
        setIsLoading(false);
      }
    };

    fetchData();
  };

  return [response, error, isLoading, dispatchFetch];
};

export default useFetch;
