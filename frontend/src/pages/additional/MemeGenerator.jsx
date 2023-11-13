import React, { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import Input from '../../components/forms/Input';
import { memeService } from '../../services/meme';

function MemeGenerator() {
  const [memePath, setMemePath] = useState('');
  const [loading, setLoading] = useState(false);

  const memeRef = useRef(null);
  const topTextRef = useRef(null);
  const bottomTextRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const meme = memeRef.current.value;
    const topText = topTextRef.current.value;
    const bottomText = bottomTextRef.current.value;

    setLoading(true);
    setTimeout(() => {
      const imagePath = memeService.generateMemeUrl(meme, topText, bottomText);
      const image = new Image();
      image.src = imagePath;
      image.addEventListener('load', () => {
        setMemePath(imagePath);
        setLoading(false);
      });
      image.addEventListener('error', () => {
        toast.error('error loading image');
        setLoading(false);
        setMemePath('');
      });
    }, 0);
  };

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <select ref={memeRef} id="meme">
          <option value="10-Guy">10 Guy</option>
          <option value="1950s-Middle-Finger">1950s Middle Finger</option>
          <option value="1990s-First-World-Problems">1990s First World Problems</option>
          <option value="1st-World-Canadian-Problems">1st World Canadian Problems</option>
          <option value="2nd-Term-Obama">2nd Term Obama</option>
          <option value="Aaaaand-Its-Gone">Aaaaand Its Gone</option>
          <option value="Ace-Primo">Ace Primo</option>
          <option value="Actual-Advice-Mallard">Actual Advice Mallard</option>
          <option value="Adalia-Rose">Adalia Rose</option>
          <option value="Admiral-Ackbar-Relationship-Expert">Admiral Ackbar Relationship Expert</option>
          <option value="Advice-Dog">Advice Dog</option>
          <option value="Advice-Doge">Advice Doge</option>
          <option value="Advice-God">Advice God</option>
          <option value="Advice-Peeta">Advice Peeta</option>
          <option value="Advice-Tam">Advice Tam</option>
          <option value="Advice-Yoda">Advice Yoda</option>
        </select>
        <Input
          ref={topTextRef}
          type="text"
          name="top-text"
          placeholder="This text will appear on the top"
          defaultValue="Top"
        />
        <Input
          ref={bottomTextRef}
          type="text"
          name="bottom-text"
          placeholder="This text will appear on the bottom"
          defaultValue="Bottom"
        />

        <button type="submit" className="button button-green">Generate</button>
      </form>
      {loading ? <img src={`${process.env.PUBLIC_URL}/img/loading.png`} alt="load" /> : null}
      {!loading && memePath && <img src={memePath} alt="meme" onLoad={() => setLoading(false)} />}
    </>
  );
}

export default MemeGenerator;
