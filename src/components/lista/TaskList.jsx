import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Card,
  CardContent,
  Box,
  Typography,
  Stack,
  Alert,
  Chip,
  Container,
  Divider,
} from "@mui/material";

export default function TaskList(props) {
  const { tareas } = props;

  return (
    <>
      {tareas !== null ? (
        <Card variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            {tareas.map((data, index) => (
              <Container key={index}>
                <Box display="flex" alignItems="center">
                  <Typography variant="h4" component="div">
                    {data.titulo}
                  </Typography>
                </Box>
                <Stack direction="row" spacing={1} style={{ padding: "2px" }}>
                  <Chip
                    label={data.completado ? "Completado" : "No completado"}
                    color={data.completado ? "success" : "warning"}
                  />

                  <Typography color="text.secondary" variant="h6">
                    {data.descripcion}
                  </Typography>
                </Stack>
                <Divider />
              </Container>
            ))}
          </CardContent>
        </Card>
      ) : null}
    </>
  );
}
