import React from 'react';
import { useDispatch } from 'react-redux';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title>
        Login <small>oiew</small>
      </Title>
      <Paragrafo>Lorem aute ad laboris .</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
