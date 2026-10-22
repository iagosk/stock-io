import { useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router";

export default function DropdownEquipe() {
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
        title="Equipe"
        variant="#ff3b0f"
        className="button-dropdown"
        data-bs-theme="dark"
      >
        <Dropdown.Item className="dropdown-item" eventKey="/dashboard/equipe#novo-colaborador">Novo colaborador</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="/dashboard/equipe#listar-colaboradores">Listar equipe</Dropdown.Item>
      </DropdownButton>
    </Dropdown>
  );
}