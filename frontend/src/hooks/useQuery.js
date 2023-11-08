import { useEffect, useState } from 'react';

/**
 * @template T
 * @param {() => Promise<T>} fn
 * @return {{isLoading: boolean, result: T, error: unknown}}
 */
export function useQuery(fn) {
  const [loading, setLoading] = useState(true);
  const [fnResult, setFnResult] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fn().then((result) => {
      setLoading(false);
      setFnResult(result);
    }).catch((err) => {
      setError(err);
    });
  }, []);

  return { isLoading: loading, result: fnResult, error };
}
