import React from 'react';
import MemeGenerator from './MemeGenerator';
import RandomJoke from './RandomJoke';
import Stack from '../../components/Stack';

function AdditionalPage() {
  return (
    <Stack>
      <RandomJoke />
      <MemeGenerator />
    </Stack>
  );
}

export default AdditionalPage;
