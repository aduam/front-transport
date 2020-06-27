import Head from 'next/head';
import Link from 'next/link';
import isLogged from '../hocs/isLogged';
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

export default isLogged(Home);