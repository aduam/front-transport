import Head from 'next/head';
import LoginView from '../views/login';
import isLogged from '../hocs/isLogged';

const Ingresar = (props) => {
  return (
    <>
      <Head>
        <title>Ingresar - transportes</title>
      </Head>
      <LoginView { ...props } />
    </>
  );
};

export default isLogged(Ingresar);