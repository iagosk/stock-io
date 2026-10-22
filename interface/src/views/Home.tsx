import { NavLink } from "react-router"

export default function Home() {
  return (
    <section className="flex flex-row-center">
      <NavLink to="estoque" className="dashboard-box" id='image-stock'>
        <div className="content-box flex flex-column flex-column-end">
          <p className="text-box flex flex-column-center">Gerencie os seus produtos na seção de estoque, você pode organizá-los em categorias e depois filtrá-los pelo nome da categoria em que o produto foi cadastrado.</p>
          <h3>Estoque</h3>
        </div>
      </NavLink>
      <NavLink to="equipe" className="dashboard-box" id='image-team'>
        <div className="content-box flex flex-column flex-column-end">
          <p className="text-box flex flex-column-center">Cadastre os seus colaboradores e aumente a sua equipe de controle de estoque.</p>
          <h3>Equipe</h3>
        </div>
      </NavLink>
      <NavLink to="relatorios" className="dashboard-box" id='image-reports'>
        <div className="content-box flex flex-column flex-column-end">
          <p className="text-box flex flex-column-center">Confira na seção de relatórios, quais os produtos possuem o maior número de vendas.</p>
          <h3>Relatórios</h3>
        </div>
      </NavLink>
    </section>
  )
}