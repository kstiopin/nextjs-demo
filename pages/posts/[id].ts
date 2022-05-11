import { GetStaticProps, GetStaticPaths } from 'next';

import Post from '../../components/Post';
import { getAllPostIds, getPostData } from '../../utils/getPosts';

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id
  const paths = getAllPostIds();

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id as string);

  return { props: { postData } };
}

export default Post;
