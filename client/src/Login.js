import { useState, useEffect } from "react";
import { auth, provider, signInWithPopup, signOut } from "./firebase";

function Login() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));
      } else {
        localStorage.removeItem("user");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      localStorage.setItem("user", JSON.stringify(result.user));
    } catch (error) {
      console.error("Ошибка входа:", error);
    }
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("user");
      console.log("Вы вышли из системы");
    } catch (error) {
      console.error("Ошибка выхода:", error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Привет, {user.displayName}!</p>
          <button onClick={handleLogout}>Выйти</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Войти через Google</button>
      )}
    </div>
  );
}

export default Login;
