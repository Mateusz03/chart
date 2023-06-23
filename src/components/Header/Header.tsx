import React, { useState } from "react";
import { StyledInputText, StyledContainer, StyledButton } from "./Header.style";
import axios from "axios";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [name, setName] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    axios
      .post("http://localhost:8000/server.php", { data: "lol" })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <StyledContainer>
      <StyledInputText placeholder="canal" />
      <StyledInputText placeholder="quantity" />
      <StyledButton onClick={handleClick}>Add</StyledButton>
    </StyledContainer>
  );
};

export default Header;
