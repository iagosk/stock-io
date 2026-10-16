import { Dropdown, DropdownButton } from "react-bootstrap";

export default function DropdownColaboradores() {
  return (
    <>
      <DropdownButton
        title="Colaboradores"
        variant="#ff3b0f"
        className="button-dropdown"
        data-bs-theme="dark"
      >
        <Dropdown.Item className="dropdown-item" href="#/action-1">Novo colaborador</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Listar colaboradores</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Excluir colaborador</Dropdown.Item>
      </DropdownButton>
    </>
  );
}