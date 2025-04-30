import axios from "@/libs/axios";

export async function loginAPI(data: { email: string; password: string }) {
  const response = await axios.post(`/api/14-5/auth/signIn`, data);
  return response.data;
}

export async function signupAPI(data: {
  email: string;
  password: string;
  name: string;
  passwordConfirmation?: string;
}) {
  const response = await axios.post("/api/14-5/auth/signUp", data);
  return response.data;
}

export async function changePasswordAPI(data: {
  currentPassword: string;
  password: string;
  passwordConfirmation: string;
}) {
  const response = await axios.patch("/api/14-5/users/me/password", data);
  return response.data;
}

export async function createQuestionAPI(data: {
  securityQuestion: string;
  securityAnswer: string;
}) {
  const response = await axios.post("/api/14-5/profiles", data);
  return response.data;
}
