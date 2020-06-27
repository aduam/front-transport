import React from 'react';
import { useForm } from "react-hook-form";
import Input from '../Input';
import Button from '../Button';
import { Container, Form } from './style';

const Ticket = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input id="Nombre" placeholder="Nombre" name="name" defaultValue="test" refi={register({ required: true })} required />
        <Input id="Dirección" placeholder="Dirección" name="address" defaultValue="test" refi={register({ required: true })} required />
        <Input id="Teléfono" placeholder="Teléfono" name="phone" defaultValue="test" refi={register({ required: true })} required />
        <Input id="Total" placeholder="Total" name="total" defaultValue="test" refi={register({ required: true })} required />
        <Input id="Cambio" placeholder="Cambio" name="change" defaultValue="test" refi={register({ required: true })} required />
        <Button title="Enviar" />
      </Form>
    </Container>
  );
};

export default Ticket;