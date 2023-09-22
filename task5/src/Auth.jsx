import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    // Показать спиннер
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({ isLoading: false, isLoggedIn: true });
    }, 2000);
  };

  handleLogout = () => {
    // Показать спиннер
    this.setState({ isLoading: true });

    // Через 2 секунды снова отобразить кнопку Login и скрыть спиннер
    setTimeout(() => {
      this.setState({ isLoading: false, isLoggedIn: false });
    }, 2000);
  };

  render() {
    const { isLoading, isLoggedIn } = this.state;

    return (
      <div>
        {isLoading ? (
          <Spinner size="50px" />
        ) : isLoggedIn ? (
          <Logout onLogout={this.handleLogout} />
        ) : (
          <Login onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default Auth;
