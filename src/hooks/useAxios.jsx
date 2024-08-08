import { useState } from 'react';
import axios from 'axios';
const useAxios = async (config) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = async (data) => {
    setLoading(true);
    try {
      const result = await axios({ ...config, data });
      console.log(config);
      setResponse(result.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  return { response, error, loading, fetchData };
};
export default useAxios;
