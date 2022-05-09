import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

import Layout from '../../components/Layout';

const FirstPost = () => {
  const onScriptLoad = () => {
    console.log(`script loaded correctly, window.FB has been populated`);
  };

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={onScriptLoad}
      />
      <h1>First Post</h1>
      <h2>Has Facebook SDK available</h2>
    </Layout>
  );
};

export default FirstPost;
