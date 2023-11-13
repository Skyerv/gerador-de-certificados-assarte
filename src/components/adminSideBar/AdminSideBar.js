import AuthService from "../../services/AuthService";
import Button from "../Button/Button";
import AdminSidebarCSS from "./AdminSideBar.module.css";
import { Link, Navigate, useLocation } from "react-router-dom";
const authService = new AuthService();
const AdminSidebar = () => {
  const { pathname } = useLocation();

  const handleLogout = async () => {
    try {
      await authService.signOut();
      Navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

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
        <li>
          <Link to="/login">
            <Button text="Logout" color="red" onClick={handleLogout} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
