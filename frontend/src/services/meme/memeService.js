class MemeService {
  /**
   * @param {string} meme
   * @param {string} top
   * @param {string} bottom
   * @returns {string}
   */
  generateMemeUrl(meme, top, bottom) {
    const url = new URL('https://apimeme.com/meme');
    url.searchParams.set('meme', meme);
    url.searchParams.set('top', top);
    url.searchParams.set('bottom', bottom);
    return url.toString();
  }
}

export const memeService = new MemeService();
