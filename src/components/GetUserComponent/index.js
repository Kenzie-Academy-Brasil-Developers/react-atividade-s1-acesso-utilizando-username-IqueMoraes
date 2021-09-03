import { useState } from "react";

function GetUserComponent({ setUser, setIsLoggedIn }) {
  const [userInput, setUserInput] = useState("");

  function HandleLogin(x) {
    setUser(x);
    setIsLoggedIn(true);
  }

  return (
    <form>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={() => HandleLogin(userInput)}>Acessar com o nome</button>
    </form>
  );
}

export default GetUserComponent;
