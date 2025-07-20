import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validación básica del formulario
    if (!username || !password) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    // Aquí iría la lógica para llamar a la API de autenticación
    // Por ahora, simularemos una autenticación exitosa
    try {
      // Simula una petición a la API con un retraso
      await new Promise((resolve) => setTimeout(resolve, 500));

      if (username === "admin" && password === "passw123") {
        onLogin({ username: "admin" }); // Simula el retorno de datos del usuario
      } else {
        setError("Credenciales incorrectas.");
      }
    } catch (err) {
      setError("Error al intentar iniciar sesión. Intente de nuevo más tarde.");
      console.error("Error:", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button type="submit">Iniciar sesión</button>
      </form>
      <br></br>
      <p>Usuario: admin</p>
      <p>Contraseña: passw123</p>
      <p>Para probar, ingrese las credenciales anteriores.</p>
      <br></br>
      <p>Nota: Esta es una simulación de inicio de sesión. No se realiza ninguna autenticación real.</p>
    </div>
  );
};

export default LoginForm;
