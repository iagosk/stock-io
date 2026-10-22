import Form from 'react-bootstrap/Form';

function SelectCategorias() {
  return (
    <Form.Select className="input-search" id="search-categorias" aria-label="Default select example">
      <option>Todas as categorias</option>
      <option value="gelateria">Gelateria</option>
      <option value="bebidas">Bebidas</option>
      <option value="cremes e sorvetes">Cremes e Sorvetes</option>
    </Form.Select>
  );
}

export default SelectCategorias;