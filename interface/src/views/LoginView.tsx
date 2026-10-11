export default function LoginView() {
    return (
        <form className="flex flex-column-center">
            <h2>Sto<span>c</span>k-io<span>.</span></h2>
            <h3>Faça login no stock-io</h3>
            <p className="flex flex-column">
                <label htmlFor="email"><h5>E-mail</h5></label>
                <input type="email" name="email" id="email" className="input-form" />
            </p>
            <p className="flex flex-column">
                <label htmlFor="senha"><h5>Senha</h5></label>
                <input type="password" name="senha" id="senha" className="input-form" />
            </p>
            <p className="flex flex-column">
                <input className="button button-form" type="submit" value="Entrar" />
            </p>
            <p>ou</p>
        </form>
    )
}