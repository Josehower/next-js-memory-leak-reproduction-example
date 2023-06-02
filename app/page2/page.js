import Image from 'next/image';
import alpaca from '../../public/alpaca.webp';

// import styles from './page.modules.css';

export default async function Home() {
  return (
    <main>
      <h2>image with next/image. width and height</h2>
      {/*
        The Next.js Image component will perform
        some optimizations such as:
        - Blocking the space on the page for the image
          before it loads (to reduce shift of content)
        - Image optimization (reduction in quality to
          deliver images faster)
        - etc
      */}
      <Image src="/alpaca.webp" alt="alpaca" width="200" height="300" />
      <h2>image with next/image. using import</h2>
      {/*
        This is a way of avoiding having to find
        the width and height and writing them
        manually in your JSX
      */}
      <Image src={alpaca} alt="alpaca" />
      <h2>image with img HTML tag (not recommended)</h2>
      {/*
        You can also use the normal img
        tag if you do not want these optimizations
      */}
      <img src="/alpaca.webp" alt="alpaca" />
    </main>
  );
}
