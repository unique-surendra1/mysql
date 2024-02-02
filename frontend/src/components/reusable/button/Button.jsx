import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const ContainedButton = ({ text }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button type="submit" variant="contained" className="bg-blue-800 mt-10">
        {text}
      </Button>
    </Stack>
  );
};

export const OutlinedButton = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
};
