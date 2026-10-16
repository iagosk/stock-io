import { Dropdown, DropdownButton } from "react-bootstrap";

export default function DropdownProfile(props: any) {
  return (
    <>
      <DropdownButton
        title={
          <img className="profile-icon" src="../../public/icons/user.png" alt="user icon" />
        }
        variant="#ff3b0f"
        className="button-dropdown"
        data-bs-theme="dark"
      >
        <Dropdown.Item className="dropdown-item" href="#/action-1">Atualizar perfil</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Trocar de conta</Dropdown.Item>

        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Sair</Dropdown.Item>
      </DropdownButton>
    </>
  );
}