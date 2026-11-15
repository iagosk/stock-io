import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Danger from '../../public/icons/triangle-warning.png';

function ErrorLogin() {
  return (
    <Alert className='animationAlert block flex block-login'>
      <div className="flex icon-danger"><img src={Danger} alt="icone users" /></div>
      <h5 className='title-alert'>Dados inválidos: e-mail ou senha incorretos.</h5>
    </Alert>
  );
}

export default ErrorLogin;