import Head from 'next/head';
import Link from 'next/link';
import HomeView from '../views/home';

const Home = props => {
  return (
    <>
      <Head>
        <title>Inicio - transporte</title>
      </Head>
      <HomeView />
      <Link href="/ingresar">
      <a>
        Ingresar
      </a>
      </Link>
    </>
  );
};

export default Home;