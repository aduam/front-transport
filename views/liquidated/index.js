import React, { Fragment, useState } from 'react';
import ReactTooltip from "react-tooltip";
import { statusTicket } from '../../utils/lists';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Container, InnerContainer, InnerSidebar, Table, Paragraph, Main } from './style';

const LiquidatedView = ({ me, data, router }) => {
  const [menu, setMenu] = useState(false);
  const totalRows = data.rows.filter((e) => e.active === true);
  const Rows = totalRows.map((e, index) => {
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-tip={full_name}><Paragraph width='200'>{full_name}</Paragraph></td>
              <td data-tip={phone}><Paragraph width='200'>{phone}</Paragraph></td>
              <td data-tip={status}><Paragraph width='100'>{statusTicket[status]}</Paragraph></td>
              <td data-tip={total}><Paragraph width='75'>{total}</Paragraph></td>
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
        </tr>
      </tbody>
    );
  });

  return (
    <>
      <Header me={me} setMenu={setMenu} menu={menu} />
      <Container>
        <InnerSidebar menu={menu}>
          <Sidebar setMenu={setMenu} menu={menu} />
        </InnerSidebar>
        <Main>
          {totalRows.length < 1 ? (
            <p>No hay datos</p>
          ) : (
            <InnerContainer>
              <Table>
                {Rows}
              </Table>
            </InnerContainer>
          )}
        </Main>
        <ReactTooltip backgroundColor='#262626' />
      </Container>
    </>
  );
};

export default LiquidatedView;