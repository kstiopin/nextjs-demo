import Head from 'next/head';
import Link from 'next/link';

import utilStyles from '../styles/utils.module.css';

import ExampleGrid from './ExampleGrid';
import Layout, { siteTitle } from './Layout';
import homeStyles from './home.module.css';

const HomePage = () => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <h1 className={homeStyles.title}>
        Getting familiar with NextJS and it's core features.
      </h1>

      <p className={homeStyles.description}>
        (This is a sample website - you'll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
    </section>

    <main className={homeStyles.main}>
      <Link href="/posts/first-post">
        Example page
      </Link>

      <h2 className={homeStyles.title}>
        Below is a list of useful resources.
      </h2>

      <ExampleGrid />
    </main>

    <footer>
      (This is a sample website - you'll be building a site like this on{' '}
      <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
    </footer>
  </Layout>
);

export default HomePage;
