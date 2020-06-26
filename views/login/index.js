import { useState } from 'react';
import Router from 'next/router';
import { useFormik } from 'formik';
import { useCookies } from 'react-cookie';
import isLogged from '../../hocs/isLogged';
import { Container, Form } from './style';
import Button from '../../components/Button';
import Input from '../../components/Input';

const LoginView = props => {
  const [cookies, setCookie] = useCookies(['authorization']);
  const [state, setState] = useState({
    loading: false,
    token: cookies.name,
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      setState({ ...state, loading: true });
      const url = 'https://alan-api-node.herokuapp.com/api/login';
      fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(values), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => { console.error('Error:', error); setState({ ...state, loading: false }); })
      .then(response => {
        if (response.data.token) {
          const token = response.data.token;
          setCookie('authorization', token);
          setState({
            ...state,
            loading: false,
            token,
          });
          Router.push('/menu');
        }
      });
    },
  });

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Usuario</label>
      <Input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        required
      />
      <label htmlFor="password">Contraseña</label>
      <Input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        required
      />
      <Button
        type='submit'
        title='Ingresar'
        loading={state.loading}
        textLoading='Cargando'
      />
    </Form>
    </Container>
  );
};

export default isLogged(LoginView);