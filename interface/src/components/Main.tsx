export default function Main() {
  return (
    <div className="grid-cl-3 flex-column-center">
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
        <div className="resources-content">
          <div className="title-resources flex">
            <h1>Recursos</h1>
          </div>  
            <ul className="grid grid-center grid-cl-2">
              <li>Gestão de colaboradores cadastrados</li>
              <li>Gestão de produtos cadastrados</li>
              <li>Emissão de checklist de compras</li>
              <li>Emissão de arquivo PDF da lista de compras</li>
              <li>Contagem de produtos em estoque</li>
              <li>Notificação para sinalizar produto em falta no estoque</li>
              <li>Lembrete produto em falta no estoque</li>
            </ul>
        </div>
      </section>
      <section id="products">
        <div className="products"></div>
      </section>
    </div>
  )
}