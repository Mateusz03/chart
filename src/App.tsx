import React, { useState } from "react";
import axios from "axios";
import { Header } from "./components/provider.components";
import { StyledApp, StyledForm } from "./App.style";

function App() {
  const handleSubmit = () => {};

  return (
    <StyledApp>
      <Header />
      <StyledForm onSubmit={handleSubmit}></StyledForm>
      {/* <form
          action="http://localhost:8000/server.php"
          method="post"
          onSubmit={(event) => handleSubmit(event)}
        >
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => handleChange(event)}
          />
          <br />
          <button type="submit">Submit</button>
        </form> */}
      {/* <h1>{result}</h1> */}
    </StyledApp>
  );
}

export default App;
