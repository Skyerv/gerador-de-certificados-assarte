import Nav from "../../components/nav/Nav";
import Button from "../../components/Button/Button";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfiguration.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setAuthUser(user);
      console.log(authUser);
      navigate("/professor");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);

      switch (errorCode) {
        case "auth/invalid-email":
          setError("Email inválido");
          break;
        case "auth/wrong-password":
          setError("Senha inválida");
          break;
        case "auth/missing-password":
          setError("Faltou colocar a senha");
          break;
        default:
          setError("Email ou senha inválido");
      }
    }
  };

  useEffect(() => {
    const checkAutoLogin = async () => {
      try {
        const user = await auth.onAuthStateChanged((user) => {
          if (user) {
            setAuthUser(user);
            navigate("/professor");
          }
        });
        if (!user) {
          setError(null);
        }
      } catch (error) {
        console.error("Auto login error:", error);
      }
    };

    checkAutoLogin();
  }, [navigate]);

  return (
    <div className="login-container">
      <Nav />
      <div className="login-body">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={login}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Senha:</label>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button text="Logar" type="submit" />
            {error ? <p className="error">{error}</p> : null}
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
