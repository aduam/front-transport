import React from 'react';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import Colors from '../../components/Colors';
import { WrapButtons } from './style';

const RemoveTicketModal = ({ handleClose, data, handleRemove, loading }) => {
  return (
    <>
      <Modal handleClose={handleClose}>
        <p>Está seguro que quiere eliminar la boleta?</p>
        <table style={{ marginTop: 15, marginBottom: 15, }}>
          <tbody>
            <tr>
              <td>Nombre: </td>
              <td>{data.full_name}</td>
            </tr>
            <tr>
              <td>Total: </td>
              <td>{data.total}</td>
            </tr>
          </tbody>
        </table>
        <WrapButtons>
          <Button onClick={handleClose} color={Colors.gray4} bg={Colors.gray3} title='Cancelar' />
          <Button loading={loading} onClick={() => handleRemove(data.id)} color={Colors.red1} bg={Colors.red3} title='Eliminar' />
        </WrapButtons>
      </Modal>
    </>
  );
};

export default RemoveTicketModal;