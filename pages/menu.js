import Head from 'next/head';
import isAuth from '../hocs/isAuth';
import MenuView from '../views/menu';

const Menu = (props) => {
  return (
    <>
      <Head>
        <title>Menu - transporte</title>
      </Head>
      <MenuView { ...props } />
    </>
  );
}

export default isAuth(Menu);