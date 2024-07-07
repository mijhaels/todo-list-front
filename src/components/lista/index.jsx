import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import TaskList from "./TaskList";
import { obtenerDato } from "../../Apis/httpServer";

export default () => {
  const [tareas, setTareas] = useState(null);
  useEffect(() => {
    obtenerDato(setTareas);
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Lista de Tareas
      </Typography>

      <TaskList tareas={tareas} />
    </Container>
  );
};
