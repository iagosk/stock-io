export default function Main() {
  return (
    <main className="grid-cl-3 flex-column-center">
      <section id="home">
        <div className="introduction flex flex-row-center">
          <div className="text-content">
            <div className="title-home">
              <h1>Sto<span>c</span>k-io<span>.</span></h1>
            </div>
            <p className="text-home">O stock-io é um sistema de estoque projetado para restaurantes e bares. Gerencie os seus produtos com mais praticidade e tenha o controle total do seu estoque com apenas um click!</p>
          </div>
          <form className="email-block flex" action="">
            <input type="email" name="email" id="email" className="email-input" placeholder="Digite o seu e-mail" required />
            <input className="button-block" type="submit" value="Cadastrar-se no Stock-io" />
          </form>
        </div>
      </section>
      <section className="flex flex-row-center" id="resources">
        <div className="resources-content flex flex-column-center">
          <div className="title-resources flex">
            <img className="icon" src="../../public/icons/list-check.png" alt="Icone de Recursos" />
            <h1>Recursos</h1>
            <br />
          </div>
          <ul>
            <li>Controle de Colaboradores</li>
            <li>Gestão de Produtos</li>
            <li>Emissão de Checklist da lista de compras</li>
            <li>Emissão de arquivo PDF da lista de compras</li>
          </ul>
        </div>
      </section>
      <section id="products">
        <div className="products"></div>
      </section>
    </main>
  )
}