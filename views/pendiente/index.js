import React, { Fragment, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-nextjs-toast'
import ReactTooltip from "react-tooltip";
import { useCookies } from 'react-cookie';
import { statusTicket } from '../../utils/lists';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';
import Color from '../../components/Colors';
import ModalRemove from './sureRemove';
import { Container, InnerContainer, InnerSidebar, Table, Paragraph, Main } from './style';

const PendentView = ({ me, data, refresh }) => {
  const [active, setActive] = useState({
    open: false,
    data: null,
    loading: false,
    error: null,
  });
  const [cookies] = useCookies(['authorization']);

  const handleRemove = async (id) => {
    setActive({ ...active, loading: true });
    const res = await fetch(`https://alan-api-node.herokuapp.com/api/ticket/${id}`, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json',
        'authorization': cookies.authorization,
      }
    });
    const json = await res.json();
    if (json.code !== 200) {
      setActive({ ...active, loading: false, error: json.data });
      toast.notify('Hubo un error!', {
        duration: 5,
        type: "error",
        title: "Error",
      });
    } else {
      setActive({ ...active, loading: false });
      refresh();
      toast.notify('El ticket fue eliminado con éxito', {
        duration: 5,
        type: "success",
        title: 'Eliminada!',
      });
      setActive({ ...active, open: false});
    }
  };

  const Rows = data.rows.filter((e) => e.active === true).map((e, index) => {
    const { id, full_name, phone, status, total } = e;
    if (index === 0) {
      return (
        <Fragment key={id}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Status</th>
              <th>Total</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-tip={full_name}><Paragraph width='200'>{full_name}</Paragraph></td>
              <td data-tip={phone}><Paragraph width='200'>{phone}</Paragraph></td>
              <td data-tip={status}><Paragraph width='100'>{statusTicket[status]}</Paragraph></td>
              <td data-tip={total}><Paragraph width='75'>{total}</Paragraph></td>
              <td>
                  <Button onClick={() => setActive({ ...active, open: true, data: e })} title='Eliminar' color={Color.red2} bg={Color.red4} />
              </td>
            </tr>
          </tbody>
        </Fragment>
      );
    }
    return (
      <tbody key={id}>
        <tr>
          <td data-tip={full_name}><Paragraph width='200'>{full_name}</Paragraph></td>
          <td data-tip={phone}><Paragraph width='200'>{phone}</Paragraph></td>
          <td data-tip={status}><Paragraph width='100'>{statusTicket[status]}</Paragraph></td>
          <td data-tip={total}><Paragraph width='75'>{total}</Paragraph></td>
          <td>
            <Button onClick={() => setActive({ ...active, open: true, data: e })} title='Eliminar' color={Color.red2} bg={Color.red4} />
          </td>
        </tr>
      </tbody>
    );
  });

  useEffect(() => {
    return () => {
      toast.remove();
    };
  }, []);

  return (
    <>
      <Header me={me} />
      <Container>
        <InnerSidebar>
          <Sidebar />
        </InnerSidebar>
        <Main>
          <InnerContainer>
            <Table>
              {Rows}
            </Table>
          </InnerContainer>
        </Main>
        <ReactTooltip backgroundColor='#262626' />
      </Container>
      {active.open && (
        <ModalRemove
          handleClose={() => setActive({ ...active, open: false })}
          data={active.data}
          handleRemove={handleRemove}
          loading={active.loading}
        />
      )}
      <ToastContainer align={"right"} position={"bottom"} />
    </>
  );
};

export default PendentView;