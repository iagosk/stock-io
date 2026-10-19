import users_icon from '../../public/icons/users.png';
import double_down from '../../public/icons/chevron-double-down.png';
import new_product from '../../public/icons/new-product.png';
import task_checklist from '../../public/icons/task-checklist.png';
import file_pdf from '../../public/icons/file-pdf.png';
import triangle_warning from '../../public/icons/triangle-warning.png';
import data_report from '../../public/icons/data-report.png';
import filter_list from '../../public/icons/filter-list.png';

export default function Main() {
  return (
    <div className="grid-cl-3 flex-column-center">
      <section id="home">
        <div className="introduction flex flex-row-center">
          <div className="text-content">
            <div className="title-home">
              <h1>Sto<span>c</span>k-io<span>.</span></h1>
            </div>
            <p className="text-home">O stock-io é um sistema de gestão de estoque projetado para restaurantes e bares. Gerencie os seus produtos com mais praticidade e tenha o controle total do seu estoque com apenas um click!</p>
          </div>
          <form className="email-block flex" action="">
            <input type="email" name="email" id="email" className="email-input" placeholder="Digite o seu e-mail" required />
            <input className="button-block" type="submit" value="Cadastrar-se no Stock-io" />
          </form>
          <a href="#resources" className="icon-down" >
            <img src={ double_down } alt="down icon" />
          </a>
        </div>
      </section>
      <section className="flex flex-row-center" id="resources">
        <div className="resources-content">
          <div className="title-resources flex">
            <h1>Recursos</h1>
          </div>
          <ul className="grid grid-start grid-cl-2">
            <li className="flex">
              <img src={ users_icon } alt="users icon" />
              Gestão de colaboradores cadastrados.
            </li>
            <li className="flex">
              <img src={ new_product } alt="new product icon" />
              Gestão de produtos cadastrados.
            </li>
            <li className="flex">
              <img src={ task_checklist } alt="task-checklist icon" />
              Emissão de checklist de compras.
            </li>
            <li className="flex">
              <img src={ file_pdf } alt="file-pdf icon" />
              Emissão de arquivo PDF da lista de compras.
            </li>
            <li className="flex">
              <img src={ task_checklist } alt="task-checklist icon" />
              Contagem de produtos em estoque.
            </li>
            <li className="flex">
              <img src={ triangle_warning } alt="triangle-warning icon" />
              Alerta para sinalizar produtos em falta de estoque.
            </li>
            <li className="flex">
              <img src={ data_report } alt="data-report icon" />
              Emissão de relatórios mensais.
            </li>
            <li className="flex">
              <img src={ filter_list } alt="filter-list icon" />
              Filtro de produtos por categoria.
            </li>
          </ul>
        </div>
      </section >
      <section id="products">
        <div className="products"></div>
      </section>
    </div >
  )
}