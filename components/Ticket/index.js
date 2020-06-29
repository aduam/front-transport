import React from 'react';
import { useForm } from "react-hook-form";
import Input from '../Input';
import Button from '../Button';
import { Container, Form } from './style';

const Ticket = (props) => {
  const { reset, register, handleSubmit, errors } = useForm();

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
        <Input id="Nombre" placeholder="Nombre" name="full_name" defaultValue="test" refi={register({ required: true })} required />
        <Input id="Dirección" placeholder="Dirección" name="address" defaultValue="test" refi={register({ required: true })} required />
        <Input id="Teléfono" placeholder="Teléfono" name="phone" defaultValue="test" refi={register({ required: true })} required />
        <Input id="Total" placeholder="Total" name="total" type="number" defaultValue="test" refi={register({ required: true })} required />
        <Input id="Cambio" placeholder="Cambio" name="change" type="number" defaultValue="test" refi={register({ required: true })} required />
        <Button title="Enviar" loading={props.loading} />
      </Form>
    </Container>
  );
};

export default Ticket;