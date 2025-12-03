import { useNavigate } from 'react-router-dom';

function Settings() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="settings-page">
      <div className="settings-container">
        <h1 className="settings-title">Настройки</h1>
        
        <div className="settings-section">
          <h2>Аккаунт</h2>
          <button onClick={handleLogout} className="btn-logout">
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;