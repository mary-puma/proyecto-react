import { useContext } from "react";
import { UserContext } from "../auth/context/UserContext";
import { UserForm } from "../components/UserForm";

export const RegisterPage = () => {
  const { initialUserForm } = useContext(UserContext);

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col">
          <UserForm />
        </div>
      </div>
    </div>
  );
};
