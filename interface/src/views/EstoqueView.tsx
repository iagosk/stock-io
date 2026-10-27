import SelectCategorias from "../components/SelectCategorias";
import SelectCategoriasSearch from "../components/SelectCategoriasSearch";
import edit_file from '../../public/icons/file-edit.png';
import trash from '../../public/icons/trash.png';
import { NavLink } from "react-router";

export default function EstoqueView() {
  return (
    <section className="view">
      <section className="estoque flex flex-column-center" id="home-estoque">
        <div className="title-estoque flex flex-column-center">
          <h1>Est<span>o</span>que<span>.</span></h1>
          <h4>Gerenciamento dos produtos.</h4>
        <div className="box-stock flex flex-row-center">
          <div className="search-box flex flex-row-center">
            <div className="inputs-search flex flex-row-center">
              <input type="search" className='input-form input-search' name="buscar-produto" id="buscar-produto" placeholder='Insira o código ou o nome do produto...' />
              <SelectCategoriasSearch />
            </div>
            <input type='button' className="button button-form" id='button-search' value="Buscar" />
          </div>
        </div>
        </div>
        <div className="area-table">
          <table>
            <thead>
              <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>Açaí</td>
                <td>0.00</td>
                <td>Cremes e sorvetes</td>
                <td className="table-buttons">
                  <img src={edit_file} alt="ícone de editar" />
                  <img src={trash} alt="ícone de apagar" />
                </td>
              </tr>
              <tr>
                <td>02</td>
                <td>Creme de Ninho</td>
                <td>0.00</td>
                <td>Cremes e sorvetes</td>
                <td className="table-buttons">
                  <img src={edit_file} alt="ícone de editar" />
                  <img src={trash} alt="ícone de apagar" />
                </td>
              </tr>
              <tr>
                <td>03</td>
                <td>Creme de Tapioca</td>
                <td>0.00</td>
                <td>Cremes e sorvetes</td>
                <td className="table-buttons">
                  <img src={edit_file} alt="ícone de editar" />
                  <img src={trash} alt="ícone de apagar" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section id="novo-produto" className="flex flex-row-center">
        <form className="form-register flex flex-column-center">
          <p>
            <h3 style={{ textAlign: "start" }}>Novo produto</h3>
            <br />
            <label htmlFor="nome"><h5>Nome:</h5></label>
            <input type="text" name="preco" id="nome" className="input-form" placeholder="Insira o nome do produto" required />
          </p>
          <p>
            <label htmlFor="preco"><h5>Preço:</h5></label>
            <input type="text" name="preco" id="preco" className="input-form" placeholder="Insira o preço do produto" required />
          </p>
          <p>
            <label htmlFor="categoria"><h5>Categoria:</h5></label>
            <SelectCategorias />
          </p>
          <p className="flex flex-column">
            <input className="button button-form" type="submit" value="Cadastrar" />
          </p>
        </form>
      </section>
      <section id="contagem" className="flex flex-column-center">
        <div className="checklist-box flex flex-column-center">
          <div className="title-estoque flex flex-column-center">
            <h1>Chec<span>k</span>list<span>.</span></h1>
            <h4>Checagem de estoque.</h4>
          </div>
          <NavLink to="/dashboard/contagem" className="button button-form">Iniciar checagem</NavLink>
        </div>
      </section>
      <section id="categorias" className="flex flex-row-center">
        <div className="categorias-box flex flex-column-center">
          <div className="title-categoria flex flex-column-center">
            <h1>Ca<span>t</span>egorias<span>.</span></h1>
            <h4>Catgorias de produtos.</h4>
            <div className="search-box flex flex-row-center" id="search-categorias">
              <div className="inputs-search flex flex-row-center">
                <input type="search" className='input-form input-search' name="criar-categorias" id="buscar-produto" placeholder='Nova categoria...' />
              </div>
              <input type='button' className="button button-form" id='button-search' value="Criar" />
            </div>
            <div className="area-table" style={{ marginTop: '40px' }}>
              <table className="table-categorias">
                <thead>
                  <tr>
                    <th>Categoria</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Gelateria</td>
                    <td className="table-buttons">
                      <img src={edit_file} alt="ícone de editar" />
                      <img src={trash} alt="ícone de apagar" />
                    </td>
                  </tr>
                  <tr>
                    <td>Cremes e Sorvetes</td>
                    <td className="table-buttons">
                      <img src={edit_file} alt="ícone de editar" />
                      <img src={trash} alt="ícone de apagar" />
                    </td>
                  </tr>
                  <tr>
                    <td>Bebidas</td>
                    <td className="table-buttons">
                      <img src={edit_file} alt="ícone de editar" />
                      <img src={trash} alt="ícone de apagar" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}