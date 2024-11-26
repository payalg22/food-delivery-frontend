import React, { useEffect, useState } from "react";
import User from "../../components/UserAuthentication/User";
import { validateLogin } from "../../utils/validate";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: false,
    password: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    setError({
      email: false,
      password: false,
    });
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateLogin(user);
    console.log(validation);
    if (validation === true) {
      console.log(user);
        navigate("/home");
    } else {
      setError(validation);
    }
  };

  const fields = [
    {
      label: "Email",
      type: "text",
      placeholder: "Example@email.com",
      value: user.email,
      onChange: (e) => {
        setUser({ ...user, email: e.target.value });
      },
      error: error.email,
    },
    {
      label: "Password",
      type: "password",
      placeholder: "At least 8 characters",
      value: user.password,
      onChange: (e) => {
        setUser({ ...user, password: e.target.value });
      },
      error: error.password,
    },
  ];

  return <User type="Login" fields={fields} action={handleSubmit} />;
}
