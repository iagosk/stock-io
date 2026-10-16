export default function PasswordResetView() {
  return (
    <form className="flex flex-column-center">
      <h2>Sto<span>c</span>k-io<span>.</span></h2>
      <h3>Redefine a sua senha</h3>
      <h4>
        Insira o endereço de e-mail verificado da sua conta de usuário e enviaremos um link para redefinir sua senha.
      </h4>
      <p className="flex flex-column">
        <label htmlFor="email"><h5>E-mail</h5></label>
        <input type="email" name="email" id="email" className="input-form" placeholder="Insira seu endereço de e-mail" />
      </p>
      <p className="flex flex-column">
        <input className="button button-form" type="submit" value="Enviar e-mail para redefinir a senha" />
      </p>
    </form>
  )
}
