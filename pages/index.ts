import { GetStaticProps } from 'next';

import HomePage from '../components/HomePage';
import { getSortedPostsData } from '../utils/getPosts';

export const getStaticProps: GetStaticProps = () => {
  const allPostsData = getSortedPostsData();

  return { props: { allPostsData } };
}

export default HomePage;
