import Head from 'next/head';
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

export default Ingresar;