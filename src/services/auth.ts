import apiClient from "./apiClient";

export interface RegisterData {
  email: string;
  full_name: string;
  phone_number: string;
  password: string;
  role: string;
}

export const registerUser = async (
  data: RegisterData,
): Promise<void> => {
  // Trimite datele de înregistrare către microserviciul de autentificare
  await apiClient.post("/register", data);
};
