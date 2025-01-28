"use client";

import { useState } from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";

const FormControlComp = () => {
  const [name, setName] = useState("");
  const [isError, setIsError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  if (name.length > 6) {
    setIsError(true);
    alert("error: allow 6 character for your name");
  } else {
    setIsError(false);
  }

  return (
    <div>
      <h2> Form Control</h2>
      <Box>
        <FormControl error={isError}>
          <TextField
            variant="outlined"
            placeholder="Name"
            onChange={handleName}
            error={isError}
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel>Name</InputLabel>
          <Input />
        </FormControl>

        <FormControl error variant="standard">
          <InputLabel htmlFor="component-error">Name</InputLabel>
          <Input id="compoent-error" aria-describedby="component-error-text" />
          <FormHelperText id="component-error-text"> Error </FormHelperText>
        </FormControl>
      </Box>
    </div>
  );
};

export default FormControlComp;
