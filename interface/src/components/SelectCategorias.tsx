import Form from 'react-bootstrap/Form';

function SelectCategorias() {
  return (
    <Form.Select  className="input-form" aria-label="Default select example" defaultValue="gelateria">
      <option>Selecione a categoria</option>
      <option value="gelateria">Gelateria</option>
      <option value="bebidas">Bebidas</option>
      <option value="cremes e sorvetes">Cremes e Sorvetes</option>
    </Form.Select>
  );
}

export default SelectCategorias;