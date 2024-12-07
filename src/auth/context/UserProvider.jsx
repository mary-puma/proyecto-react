import { useState } from "react";
import { UserContext } from "./UserContext";

// Define el UserProvider que envuelve el formulario con el contexto
export const UserProvider = ({ children }) => {
  // Estado inicial del formulario de usuario
  const initialUserForm = {
    id: "",
    lastName: "",
    firstName: "",
    password: "",
    email: "",
  };

  // Estado para el formulario de usuario
  const [userForm, setUserForm] = useState(initialUserForm);

  // Función para manejar la adición de un nuevo usuario
  const handlerAddUser = (newUserForm) => {
    // Lógica para agregar usuario (puedes ajustarlo según tus necesidades)
    console.log("User added:", newUserForm);
    setUserForm(initialUserForm); // Reiniciar el formulario
  };

  return (
    <UserContext.Provider value={{ initialUserForm, handlerAddUser }}>
      {children}
    </UserContext.Provider>
  );
};
