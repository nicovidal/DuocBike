import bikeApi from "../api/bikeApi";

export const useAlumnoStore = async () => {



  const startLoadingAlumnos = async () => {
    try {
      const { data } = await bikeApi.get("/alumnos");
      console.log({ data });
    } catch (error) {
      console.log("error cargar alumnos");
      console.log(error);
    }
  };

  return {
    //propiedades

    //metodos
    startLoadingAlumnos
  };
};
