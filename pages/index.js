import HomePage from '../components/HomePage';
import { getSortedPostsData } from '../utils/getPosts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return { props: { allPostsData } };
}

export default HomePage;
