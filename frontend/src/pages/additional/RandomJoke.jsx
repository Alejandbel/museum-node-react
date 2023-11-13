import React from 'react';
import { useQuery } from '../../hooks/useQuery';
import { jokeService } from '../../services/joke';

function RandomJoke() {
  const { isLoading, result, error } = useQuery(() => jokeService.getRandomJoke());

  if (error) {
    return null;
  }

  return !isLoading && (
    <p>{result.joke}</p>
  );
}

export default RandomJoke;
