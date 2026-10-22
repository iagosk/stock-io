import Form from 'react-bootstrap/Form';

function SelectCargos() {
  return (
    <Form.Select className="input-form" aria-label="Default select example" defaultValue="colaborador">
      <option>Selecione o cargo</option>
      <option value="admin">admin</option>
      <option value="gestor">gestor</option>
      <option value="colaborador">colaborador</option>
    </Form.Select>
  );
}

export default SelectCargos;