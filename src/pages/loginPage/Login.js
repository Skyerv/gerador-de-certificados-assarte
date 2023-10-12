import Nav from "../../components/nav/Nav";
import Button from "../../components/Button/Button";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <Nav />
      <div className="login-body">
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label>Senha:</label>
              <input type="password" placeholder="Password" />
            </div>
            <Link to="/professor">
              <Button text="Logar" />
            </Link>
          </form>
          <p>
            Não tem conta?{" "}
            <Link to="/cadastrar" className="link">
              Cadastre aqui
            </Link>
          </p>
        </div>
        <div className="login-image">
          <img src="/images/loginRegisterImage.png" alt="Login" />
        </div>
      </div>
    </div>
  );
}

export default Login;
