import Head from 'next/head';
import isAuth from '../hocs/isAuth';
import BoletaView from '../views/boleta';

const Boleta = (props) => {
  return (
    <>
      <Head>
        <title>Boleta - transporte</title>
      </Head>
      <BoletaView { ...props } />
    </>
  );
};

export default isAuth(Boleta);