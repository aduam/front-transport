import { useState } from 'react';
import Router from 'next/router';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-nextjs-toast';
import { useCookies } from 'react-cookie';
import isLogged from '../../hocs/isLogged';
import { Container, Form } from './style';
import Button from '../../components/Button';
import Input from '../../components/Input';

const LoginView = () => {
  const [cookies, setCookie] = useCookies(['authorization']);
  const { register, handleSubmit } = useForm();
  const [state, setState] = useState({
    loading: false,
    token: cookies.name,
  });

  const onSubmit = values => {
    setState({ ...state, loading: true });
    const url = 'https://alan-api-node.herokuapp.com/api/login';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(values),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => {
      setState({ ...state, loading: false });
    })
    .then(response => {
      if (response.code !== 200) {
        setState({ ...state, loading: false });
        toast.notify('Error al ingresar el correo o contraseña', {
          duration: 5,
          type: "error",
          title: 'Error',
        });
      } else if (response.data.token) {
        const token = response.data.token;
        setCookie('authorization', token);
        setState({
          ...state,
          loading: false,
          token,
        });
        toast.remove();
        Router.push('/menu');
      }
    });
  };

  return (
    <>
      <ToastContainer align={"right"} position={"bottom"} />
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Usuario</label>
        <Input
          id="email"
          name="email"
          type="email"
          refi={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Dirección de correo invalida!"
            }
          })}
        />
        <label htmlFor="password">Contraseña</label>
        <Input
          id="password"
          name="password"
          type="password"
          refi={register({
            required: true,
          })}
        />
        <Button
          type='submit'
          title='Ingresar'
          loading={state.loading}
          textLoading='Cargando'
        />
      </Form>
      </Container>
    </>
  );
};

export default isLogged(LoginView);