import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export default function Employee({
  employee,
  handleRemove,
  setSelectedEmployee,
}) {
  const navigate = useNavigate();

  const handleSelectedEmployee = (emp) => {
    setSelectedEmployee(emp);
    navigate(`/employees/update/${emp.id}`);
  };

  return (
    <ListItem key={employee.id}>
      <ListItemAvatar>
        <Avatar>{employee?.firstName[0]} </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={`${employee.firstName} ${employee.lastName}`}
        secondary={`${employee.salary} per month`}
      />

      <Button
        variant="contained"
        startIcon={<SendIcon />}
        onClick={() => handleSelectedEmployee(employee)}
      >
        Select
      </Button>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={() => handleRemove(employee.id)}
      >
        Remove
      </Button>
    </ListItem>
  );
}
