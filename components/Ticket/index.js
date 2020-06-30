import React from 'react';
import { useForm } from "react-hook-form";
import Input from '../Input';
import Button from '../Button';
import { Container, Form } from './style';

const Ticket = (props) => {
  const { reset, register, handleSubmit } = useForm();

  const onSubmit = async (e) => {
    const res = await props.handleClick(e);
    console.log('res::: ', res)
    if (!!res) {
      reset({
        full_name: null,
        address: null,
        phone: null,
        total: null,
        change: null,
      });
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nombre de la persona a entregar</label>
        <Input id="name" placeholder="Nombre" name="full_name" defaultValue="test" refi={register({ required: true })} required />
        <label htmlFor="address">Dirección</label>
        <Input id="address" placeholder="Dirección" name="address" defaultValue="test" refi={register({ required: true })} required />
        <label htmlFor="phone">Teléfono</label>
        <Input id="phone" placeholder="Teléfono" name="phone" defaultValue="test" refi={register({ required: true })} required />
        <label htmlFor="total">Total</label>
        <Input id="total" placeholder="Total" name="total" type="number" defaultValue="test" refi={register({ required: true })} required />
        <label htmlFor="change">Cambio</label>
        <Input id="change" placeholder="Cambio" name="change" type="number" defaultValue="test" refi={register({ required: true })} required />
        <Button title="Enviar" loading={props.loading} />
      </Form>
    </Container>
  );
};

export default Ticket;