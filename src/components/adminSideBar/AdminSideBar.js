import AdminSidebarCSS from "./AdminSideBar.module.css";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className={AdminSidebarCSS.sidebar}>
      <h4>Tela do Admin</h4>
      <ul>
        <li>
          <Link
            to="/admin-info"
            className={
              pathname === "/admin-info" ? AdminSidebarCSS.selected : ""
            }
          >
            Informações da feira
          </Link>
        </li>
        <li>
          <Link
            to="/admin-gerenciar-professores"
            className={
              pathname === "/admin-gerenciar-professores"
                ? AdminSidebarCSS.selected
                : ""
            }
          >
            Gerenciar Professores
          </Link>
        </li>
        <li>
          <Link
            to="/admin-deletar-dados"
            className={
              pathname === "/admin-deletar-dados"
                ? AdminSidebarCSS.selected
                : ""
            }
          >
            Deletar Dados
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
