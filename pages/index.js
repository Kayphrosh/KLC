import Landing from './landing';
import Head from 'next/head';
const Home = () => {
  const render = () => {
    return <Landing />;
  };

  return render(
          <Head>
        <title>Kingdom Life Students' Fellowship | Home</title>
        <meta name="description" content="Consultancy Firm" />
        <link rel="canonical" href="https://www.suspadconsulting.com/" />
      </Head>
  );
};

export default Home;
