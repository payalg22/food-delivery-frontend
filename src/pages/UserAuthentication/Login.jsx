import React, { useContext, useEffect, useState } from "react";
import User from "../../components/UserAuthentication/User";
import { validateLogin } from "../../utils/validate";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../../services/user";
import AppContext from "../../context/AppContext";

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
  const { setUserInfo } = useContext(AppContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, []);

  useEffect(() => {
    setError({
      email: false,
      password: false,
    });
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateLogin(user);
    if (validation === true) {
      const response = await login(user);
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        const userData = await getUser();
        setUserInfo(userData.data);
        navigate("/home");
      } else {
        setError({ ...error, password: response.data.message });
      }
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
