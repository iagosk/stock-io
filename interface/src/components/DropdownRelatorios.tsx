import { Dropdown, DropdownButton } from "react-bootstrap";

export default function DropdownRelatorios() {
  return (
    <>
      <DropdownButton
        title="Relatórios"
        variant="#ff3b0f"
        className="button-dropdown"
        data-bs-theme="dark"
      >
        <Dropdown.Item className="dropdown-item" href="#/action-1">Relatório Semanal</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Relatório Mensal</Dropdown.Item>
      </DropdownButton>
    </>
  );
}