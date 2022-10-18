import React from "react";
import { Button } from "./styles";

export const Buttons = ({ color, text, link, disabled }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Button color={color} disabled={disabled}>
        {text}
      </Button>
    </a>
  );
};
