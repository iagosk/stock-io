import { useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router";

export default function DropdownEstoque() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", '');
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [location]);

  return (
    <Dropdown onSelect={(eventKey) => navigate(eventKey)}>
      <DropdownButton
        title="Estoque"
        variant="#ff3b0f"
        className="button-dropdown"
        data-bs-theme="dark"
      >
        <Dropdown.Item className="dropdown-item" eventKey="/dashboard/estoque#home-estoque">Estoque</Dropdown.Item>
        <Dropdown.Item className="dropdown-item" eventKey="/dashboard/estoque#novo-produto">Novo produto</Dropdown.Item>
        <Dropdown.Item eventKey="/dashboard/estoque#categorias">Categorias</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="/dashboard/estoque#contagem">Realizar contagem</Dropdown.Item>
      </DropdownButton>
    </Dropdown>
  );
}