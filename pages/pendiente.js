import Head from 'next/head';
import isAuth from '../hocs/isAuth';
import PendentView from '../views/pendiente';

const Pendiente = (props) => {
  return (
    <>
      <Head>
        <title>Boletas pendientes - transporte</title>
      </Head>
      <PendentView { ...props } />
    </>
  );
};

export default isAuth(Pendiente);