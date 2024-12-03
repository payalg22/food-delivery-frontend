import React, { useState, useEffect } from "react";
import { validateSignUp } from "../../utils/validate";
import User from "../../components/authentication/User";
import { register } from "../../services/user";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    name: false,
    phone: false,
    email: false,
    password: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    setError({
      name: false,
      phone: false,
      email: false,
      password: false,
    });
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateSignUp(user);
    if (validation === true) {
      const res = await register(user);
      if (res.status === 201) {
        navigate("/login");
      } else {
        setError({ ...error, password: res.data.message });
      }
    } else {
      setError(validation);
    }
  };

  const fields = [
    {
      label: "Name",
      type: "text",
      placeholder: "eg. John A",
      value: user.name,
      onChange: (e) => {
        setUser({ ...user, name: e.target.value });
      },
      error: error.name,
    },
    {
      label: "Phone Number",
      type: "number",
      placeholder: "Enter your 10 digit mobile number",
      value: user.phone,
      onChange: (e) => {
        setUser({ ...user, phone: e.target.value });
      },
      error: error.phone,
    },
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

  return <User type="Register" fields={fields} action={handleSubmit} />;
}
