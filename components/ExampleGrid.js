import styles from './example-grid.module.css';

const ExampleGrid = () => (
  <div className={styles.grid}>
    <a className={styles.card} href="https://nextjs.org/docs">
      <h3>Documentation &rarr;</h3>
      <p>Find in-depth information about Next.js features and API.</p>
    </a>

    <a className={styles.card} href="https://nextjs.org/learn">
      <h3>Learn &rarr;</h3>
      <p>Learn about Next.js in an interactive course with quizzes!</p>
    </a>

    <a className={styles.card} href="https://github.com/vercel/next.js/tree/master/examples">
      <h3>Examples &rarr;</h3>
      <p>Discover and deploy boilerplate example Next.js projects.</p>
    </a>

    <a className={styles.card} href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
      <h3>Deploy &rarr;</h3>
      <p>
        Instantly deploy your Next.js site to a public URL with Vercel.
      </p>
    </a>
  </div>
);

export default ExampleGrid;
