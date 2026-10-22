import { useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router";

export default function DropdownRelatorios() {
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
    <Dropdown onSelect={(eventKey:any) => navigate(eventKey || '/dashboard')}>
      <DropdownButton
        title="Relatórios"
        variant="#ff3b0f"
        className="button-dropdown"
        data-bs-theme="dark"
      >
        <Dropdown.Item className="dropdown-item" eventKey="/dashboard/relatorios#relatorio-semanal">Relatório Semanal</Dropdown.Item>
        <Dropdown.Item eventKey="/dashboard/relatorios#relatorio-mensal">Relatório Mensal</Dropdown.Item>
      </DropdownButton>
    </Dropdown>
  );
}