import axios from 'axios';

class JokeService {
  /**
   * @returns {Promise<{joke: string}>}
   */
  async getRandomJoke() {
    const { data } = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
    return data;
  }
}

export const jokeService = new JokeService();
