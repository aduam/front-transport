import React from 'react';
import { parseCookie } from '../lib/parseCookie';
import redirect from '../lib/redirect';

const url = 'https://alan-api-node.herokuapp.com/api/me';

 const isAuth = WrappComponent => {
  const NewComponent = props => {
    return <WrappComponent {...props } />;
  };

  NewComponent.getInitialProps = async ( ctx ) => {
    const { req } = ctx;
    const cookies = parseCookie(req)
    cookies.authorization
    const me = await fetch(url, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'authorization': cookies.authorization,
      }
    }).then(data => data.json());

    if (!me.data.me) {
      redirect(ctx, '/')
    }

    let propsParent;
    if (WrappComponent.getInitialProps) {
        propsParent = await WrappComponent.getInitialProps(ctx);
      }
    return { ...propsParent, me: me.data.me };
  };
  return NewComponent;
};
export default isAuth;