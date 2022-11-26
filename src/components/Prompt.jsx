import { Box, Button, TextField } from "@mui/material";
import React from "react";

const Prompt = (props) => {
  const [value, setValue] = React.useState("Controlled");
  const date = Date();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <TextField
        id="outlined-multiline-flexible"
        label="Input"
        multiline
        maxRows={4}
        value={value}
        onChange={handleChange}
      />
      <Button
        onClick={() => {
          props.createEntry(value, date);
          setValue("");
        }}
        variant="contained"
      >
        Submit
      </Button>
    </>
  );
};

export default Prompt;
