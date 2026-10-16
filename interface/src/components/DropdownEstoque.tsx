import { Dropdown, DropdownButton } from "react-bootstrap";

export default function DropdownEstoque(props: any) {
  return (
    <>
      <DropdownButton
        title="Estoque"
        variant="#ff3b0f"
        className="button-dropdown"
        data-bs-theme="dark"
      >
        <Dropdown.Item className="dropdown-item" href="#/action-1">Novo produto</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Atualizar estoque</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Realizar contagem</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Excluir produto</Dropdown.Item>
      </DropdownButton>
    </>
  );
}