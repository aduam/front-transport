import Head from 'next/head';
import isLogged from '../hocs/isLogged';
import LoginView from '../views/login';

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