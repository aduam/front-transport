import Head from 'next/head';
import isLogged from '../hocs/isLogged';
import HomeView from '../views/home';

const Home = () => {
  return (
    <>
      <Head>
        <title>Inicio - transporte</title>
      </Head>
      <HomeView />
    </>
  );
};

export default isLogged(Home);