import Layout from '../../components/Layout';
import Post from '../../components/Post';
import { getAllPostIds, getPostData } from '../../utils/getPosts';

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);

  return { props: { postData } };
}

export default Post;
