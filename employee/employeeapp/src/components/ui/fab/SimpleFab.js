import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";

import React from "react";
import { useNavigate } from "react-router-dom";

export default function SimpleFab({ fab }) {
  const navigate = useNavigate();
  const fabStyle = {
    position: "fixed",
    bottom: 16,
    right: 16,
  };

  return (
    <Fab
      onClick={() => navigate(fab.url)}
      size="medium"
      sx={fabStyle}
      color="primary"
      aria-label="add"
    >
      {fab.icon === "add" && <AddIcon />}
      {fab.icon === "list" && <ListIcon />}
    </Fab>
  );
}
