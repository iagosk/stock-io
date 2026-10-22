import edit_file from '../../public/icons/file-edit.png';
import trash from '../../public/icons/trash.png';
import SelectCargosSearch from '../components/SelectCargosSearch';
import SelectCargos from '../components/SelectCargos';

export default function ColaboradoresView() {
  return (
    <section className='view'>
      <section className="colaboradores flex flex-column-center" id="listar-colaboradores">
        <div className="title-estoque flex flex-column-center">
          <h1>Eq<span>u</span>ipe<span>.</span></h1>
          <h4>Gerenciamento dos colaboradores.</h4>
        </div>
        <div className="search-box flex flex-row-center">
          <input type="search" className='input-form input-search' name="buscar-colaborador" id="buscar-colaborador" placeholder='Insira o nome do colaborador...' />
          <SelectCargosSearch />
          <input type='button' className="button button-form" id='button-search' value="Buscar" />
        </div>
        <div className="area-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Cargo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>Ruan</td>
                <td>ruan@email.com</td>
                <td>gestor</td>
                <td className="table-buttons">
                  <img src={edit_file} alt="ícone de editar" />
                  <img src={trash} alt="ícone de apagar" />
                </td>
              </tr>
              <tr>
                <td>02</td>
                <td>Josenildo</td>
                <td>josenildo@email.com</td>
                <td>gestor</td>
                <td className="table-buttons">
                  <img src={edit_file} alt="ícone de editar" />
                  <img src={trash} alt="ícone de apagar" />
                </td>
              </tr>
              <tr>
                <td>03</td>
                <td>Matheus</td>
                <td>matheus@email.com</td>
                <td>colaborador</td>
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
        <form className="flex flex-column-center">
          <p>
            <h3 style={{ textAlign: "start" }}>Novo colaborador</h3>
            <br />
            <label htmlFor="nome"><h5>Nome:</h5></label>
            <input type="text" name="preco" id="nome" className="input-form" placeholder="Insira o nome do colaborador..." required />
          </p>
          <p>
            <label htmlFor="e-mail"><h5>E-mail:</h5></label>
            <input type="email" name="email" id="email" className="input-form" placeholder="Insira o e-mail do colaborador..." required />
          </p>
          <p>
            <label htmlFor="categoria"><h5>Cargo:</h5></label>
            <SelectCargos />
          </p>
          <p className="flex flex-column">
            <input className="button button-form" type="submit" value="Cadastrar" />
          </p>
        </form>
      </section>
    </section>
  )
}