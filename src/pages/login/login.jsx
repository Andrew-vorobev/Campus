import React from "react";
import "./login.css";
import { Button } from "@mui/material";
import kompuslogo from "../../assets/images/kompuslogo.png";
import { useNavigate } from "react-router-dom";
import { SITE_URL } from "../../utils/const";
import Fade from "react-reveal/Fade";

function Login() {
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  React.useEffect(() => {
    let timer;
    if (errorMessage) {
      timer = setTimeout(() => {
        resetErrorMessage();
      }, 4000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [errorMessage]);
  const handleLogin = () => {
    if (password === "урфу") {
      // Верное значение кодового слова, переход к следующей странице
      navigate(SITE_URL.DASHBOARD);
    } else {
      // Неправильное значение кодового слова, вывод сообщения об ошибке
      setErrorMessage("Неправильное кодовое слово");
    }
  };
  const resetErrorMessage = () => {
    setErrorMessage("");
  };
  return (
    <div className="d-flex justify-content-center align-items-center parent-login vh-100">
      <div className="image">
        <img src={kompuslogo} alt="" />
      </div>
      <Fade>
        <div className="def-content Login">
          <h3 className="content-title text-center">Вход</h3>
          <p className="LoginTitle text-center">
            Введите кодовое слово, отправленное вам на <br />
            <a href="#" className="email text-center">
              email@example.com
            </a>
          </p>
          <div className="LoginInput">
            <input
              type="password"
              placeholder="Кодовое слово"
              onChange={handlePasswordChange}
            />
          </div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ flexDirection: "column" }}
          >
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <Button
              variant="contained"
              className="btn-red LoginBtn"
              onClick={handleLogin}
            >
              Войти
            </Button>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Login;
