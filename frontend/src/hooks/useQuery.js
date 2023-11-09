import { useEffect, useState } from 'react';

/**
 * @template T
 * @param {() => Promise<T>} fn
 * @param {{deps?: Array<*>}} [params]
 * @return {{isLoading: boolean, result: T, error: unknown, refetch: () => void}}
 */
export function useQuery(fn, { deps = [] } = {}) {
  const [refetchCount, setRefetchCount] = useState(0);
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
  }, [...deps, refetchCount]);

  const refetch = () => {
    setRefetchCount((count) => count + 1);
  };

  return {
    isLoading: loading, result: fnResult, error, refetch,
  };
}
