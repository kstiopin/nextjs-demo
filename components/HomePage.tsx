import Head from 'next/head';
import Link from 'next/link';

import utilStyles from '../styles/utils.module.css';

import ExampleGrid from './ExampleGrid';
import Layout, { siteTitle } from './Layout';
import homeStyles from './home.module.css';
import { getDateString } from '../utils/getDateString';

const HomePage = ({ allPostsData }: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[]
}) => (
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

    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>{getDateString(date)}</small>
          </li>
        ))}
      </ul>
      <h2 className={utilStyles.headingLg}>Static APIs</h2>
      <Link href='/api/hello'>Hello API example</Link>
    </section>

    <main className={homeStyles.main}>
      <h2 className={homeStyles.title}>
        Below is a list of useful resources.
      </h2>

      <ExampleGrid />
    </main>

    <footer>
      (Developed as part of DevCon 2022.)
    </footer>
  </Layout>
);

export default HomePage;
