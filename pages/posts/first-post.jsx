import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

import profilePic from '../../public/images/profile.jpeg';

const FirstPost = () => {
  const onScriptLoad = () => {
    console.log(`script loaded correctly, window.FB has been populated`);
  };

  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={onScriptLoad}
      />
      <h1>First Post</h1>
      <Image
        src={profilePic}
        alt="Picture of the author"
        width={50}
        height={50}
      />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};

export default FirstPost;
