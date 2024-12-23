import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import { loginUser } from './authProcess'; // Импортируем функцию loginUser

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false, // Состояние для отслеживания открытости меню
      email: '',
      password: '',
      error: '',
      isAuthenticated: false, // Состояние для отслеживания авторизации
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen, // Переключаем состояние меню
    }));
  };

  handleInputChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleLogin = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ error: "Please enter both email and password." });
      return;
    }

    loginUser(email, password)
      .then((user) => {
        console.log('User logged in:', user);
        this.setState({ 
          isAuthenticated: true, // Помечаем пользователя как авторизованного
          isOpen: false, // Закрываем меню после успешного входа
          error: '', // Очищаем ошибку
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  handleLogout = () => {
    // Логика выхода, сбрасываем состояние
    localStorage.removeItem("userEmail");
    this.setState({ 
      isAuthenticated: false, 
      email: '',
      password: '',
      error: '',
    });
  };

  render() {
    const { isAuthenticated, isOpen, email, password, error } = this.state;

    return (
      <div className="auth-container">
        {/* Если пользователь авторизован, показываем кнопку "Профіль", иначе - "Вхід" */}
        {isAuthenticated ? (
          <Link to="/Profile">
            <button className="authBtn">
              <h1>Профіль</h1>
            </button>
          </Link>
        ) : (
          <button className="authBtn" onClick={this.toggleMenu}>
            <h1>Вхід</h1>
          </button>
        )}

        {/* Вкладка с формой входа */}
        {isOpen && !isAuthenticated && (
          <div className="auth">
            <form id="authForm" onSubmit={this.handleLogin}>
              <h1>Авторизація</h1>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={this.handleInputChange}
                required
              />
              <br />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={this.handleInputChange}
                required
              />
              <br />
              <button id="login" type="submit">Login</button>
              {error && <div className="error">{error}</div>}
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Auth;
