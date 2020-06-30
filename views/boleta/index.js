import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-nextjs-toast'
import { useCookies } from 'react-cookie';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Ticket from '../../components/Ticket';
import { Container, InnerContainer, InnerSidebar } from './style';

const url = 'https://alan-api-node.herokuapp.com/api/ticket';

const BoletaView = ({ me, router }) => {
  const [cookies] = useCookies(['authorization']);
  const [menu, setMenu] = useState(false);
  const [state, setState] = useState({
    loading: false,
    error: false,
    data: null,
  });
  const handleClick = async (e) => {
    setState({ ...state, loading: true });
    const total = parseFloat(e.total).toFixed(2);
    const change = parseFloat(e.change).toFixed(2);
    if (!total || !change){
      toast.notify('El total o cambio no son correctos!', {
        duration: 8,
        type: "error",
        title: "Error",
      });
      return false;
    }
    const obj = {
      full_name: e.full_name,
      address: e.address,
      total,
      change,
      phone: e.phone,
    };
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers:{
        'Content-Type': 'application/json',
        'authorization': cookies.authorization,
      }
    });
    const data = await res.json();
    if (data.code !== 200) {
      setState({ ...state, loading: false, error: true });
      toast.notify('Hubo un error!', {
        duration: 8,
        type: "error",
        title: "Error",
      });
      return false;
    } else {
      setState({ ...state, data: data.data, loading: false });
      toast.notify('Su solicitud a sido enviada con éxito! revisé las boletas pendientes', {
        duration: 10,
        type: "success",
        title: "Boleta agregada",
      });
      return true;
    }
  };

  useEffect(() => {
    return () => {
      // Limpiar la suscripción
      toast.remove();
    };
  }, []);

  return (
    <>
      <Header me={me} setMenu={setMenu} menu={menu} />
      <Container>
        <InnerSidebar menu={menu}>
          <Sidebar setMenu={setMenu} menu={menu} />
        </InnerSidebar>
        <InnerContainer>
          <Ticket handleClick={handleClick} loading={state.loading} />
        </InnerContainer>
        <ToastContainer align={"right"} position={"bottom"} />
      </Container>
    </>
  );
};

export default BoletaView;