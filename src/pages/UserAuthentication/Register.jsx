import React, { useState, useEffect } from "react";
import { validateSignUp } from "../../utils/validate";
import User from "../../components/UserAuthentication/User";

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

  useEffect(() => {
    setError({
      name: false,
      phone: false,
      email: false,
      password: false,
    });
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateSignUp(user);
    console.log(validation);
    if (validation === true) {
      console.log(user);
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
