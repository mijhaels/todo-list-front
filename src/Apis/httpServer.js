import * as axios from "axios";

const login = async (data, navigate) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/todo/usuario/login",
      data
    );

    if (response.data.success) {
      navigate("/home");
    }
  } catch (error) {
    console.log(error);
  }
};

const obtenerDato = async (setTareas) => {
  try {
    const response = await axios.get("http://localhost:8080/todo/tareas", {});

    if (response.data.success) {
      setTareas(response.data.data);
    }
  } catch (error) {
    console.log(error);
  }
};

export { login, obtenerDato };
