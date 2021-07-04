import React from "react";
import { bool, func } from "prop-types";

export default function Burger({ open, setOpen }) {
  return (
    <button className="Burger" open={open} onClick={() => setOpen(!open)}>
      <div className={open ? "open" : "close"} />
      <div className={open ? "open" : "close"} />
      <div className={open ? "open" : "close"} />
    </button>
  );
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
