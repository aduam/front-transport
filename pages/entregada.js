import React, { useState } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-fetch';
import isAuth from '../hocs/isAuth';
import { parseCookie } from '../lib/parseCookie';
import DeliveredView from '../views/delivered';

const url = 'https://alan-api-node.herokuapp.com/api/ticket/delivered';

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
  console.log('error: ', data.FetchError);
  return { data };
}

const Delivered = (props) => {
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
      <DeliveredView me={props.me} data={data} refresh={refresh} />
    </>
  );
};

Delivered.getInitialProps = (ctx) => fetchData(ctx);

export default isAuth(Delivered);