import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Danger from '../../public/icons/triangle-warning.png';

function ErrorSignup() {
  return (
    <Alert className='animationAlert block flex'>
      <div className="flex icon-danger"><img src={Danger} alt="icone users" /></div>
      <h5 className='title-alert'>Você já possui uma conta no Stock-io! realize o login para acessá-la.</h5>
    </Alert>
  );
}

export default ErrorSignup;