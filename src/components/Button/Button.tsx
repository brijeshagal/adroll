import React from "react";

interface ButtonProps {
  label: string;
}

const Button: (props: ButtonProps) => JSX.Element = ({ label }) => {
  return <button>{label}</button>;
};

export default Button;