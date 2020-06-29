import React, { useState } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-fetch';
import isAuth from '../hocs/isAuth';
import { parseCookie } from '../lib/parseCookie';
import PendentView from '../views/pendiente';

const url = 'https://alan-api-node.herokuapp.com/api/ticket';

async function fetchData(ctx) {
  const req = ctx ? ctx.req : undefined;
  const cookies = parseCookie(req)
  cookies.authorization
  const res = await fetch(url, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      'authorization': cookies.authorization,
    }
  });
  const data = await res.json();
  return { data };
}

const Pendiente = (props) => {
  const [data, setData] = useState(props.data.data);
  async function refresh() {
    const refreshedProps = await fetchData();
    setData(refreshedProps.data.data);
  }
  return (
    <>
      <Head>
        <title>Boletas pendientes - transporte</title>
      </Head>
      <PendentView me={props.me} data={data} refresh={refresh} />
    </>
  );
};

Pendiente.getInitialProps = (ctx) => fetchData(ctx);

export default isAuth(Pendiente);