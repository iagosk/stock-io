import Form from 'react-bootstrap/Form';

function SelectCargosSearch() {
  return (
    <Form.Select className="input-search" id="search-cargos" aria-label="Default select example">
      <option>Todas os cargos</option>
      <option value="admin">admin</option>
      <option value="gestor">gestor</option>
      <option value="colaborador">colaborador</option>
    </Form.Select>
  );
}

export default SelectCargosSearch;