import axiosInstance from "../config/Api";

const getToken = async () => {
  await axiosInstance.get('/sanctum/csrf-cookie');
}

export const loginUser = async (email: string, password: string): Promise<string> => {
  await getToken();

  try {
    const result = await axiosInstance.post('/api/login', { email, password });
    sessionStorage.setItem('token', result.data.access_token);
    return result.data.access_token;
  } catch(error) {
    throw new Error('User not found');
  }
}

export const logoutUser = async (): Promise<boolean> => {
  try {
    await axiosInstance.post('/api/logout');
    return true;
  } catch(error) {
    throw new Error('Failed to logout');
  }
}