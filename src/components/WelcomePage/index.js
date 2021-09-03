function WelcomePage({ user, setIsLoggedIn }) {
  function HandleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <>
      <h3>Bem-vindo, {user}</h3>
      <button onClick={HandleLogout}>Sair</button>
    </>
  );
}

export default WelcomePage;
