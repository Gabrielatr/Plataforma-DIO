import axios from "axios";
import { IFormData } from "./types";

const api = axios.create({
    baseURL: "http://localhost:8001",
});

const registerUser = async (formData: IFormData) => {
    try {
      const response = await api.post("/users", {formData});
      return response.data;
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao registrar o usuário.");
    }
  };
  
export { api, registerUser };