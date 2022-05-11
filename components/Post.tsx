import Head from 'next/head';

import utilStyles from '../styles/utils.module.css';
import { getDateString } from '../utils/getDateString';

import Layout from './Layout';

const Post = ({ postData }: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  }
}) => (
  <>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <Layout>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{getDateString(postData.date)}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  </>
);

export default Post;
