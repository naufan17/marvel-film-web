import axiosInstance from "../config/Api";

const getToken = async () => {
  await axiosInstance.get('/sanctum/csrf-cookie');
}

export const loginApi = async (email: string, password: string): Promise<string> => {
  await getToken();

  try {
    const token = await axiosInstance.post('/api/login', { email, password });
    return token.data.data.access_token;
  } catch (error) {
    throw new Error("User not found")
  }
}

export const logoutApi = async () => {
  try {
    await axiosInstance.post('/api/logout');
  } catch (error) {
    throw new Error("User not found")
  }
}