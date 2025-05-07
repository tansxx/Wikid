import axiosInstance from "./axiosInstance";

export async function loginAPI(data: { email: string; password: string }) {
  const response = await axiosInstance.post(`/auth/signIn`, data);
  return response.data;
}

export async function signupAPI(data: {
  email: string;
  password: string;
  name: string;
  passwordConfirmation?: string;
}) {
  console.log("✅ signupData:", data);
  try {
    const response = await axiosInstance.post("/auth/signUp", data);
    return response.data;
  } catch (error: any) {
    console.error("error.response.data:", error.response?.data);
  }
}

export async function changePasswordAPI(data: {
  currentPassword: string;
  password: string;
  passwordConfirmation: string;
}) {
  const response = await axiosInstance.patch("/users/me/password", data);
  return response.data;
}

export async function createQuestionAPI(data: {
  securityQuestion: string;
  securityAnswer: string;
}) {
  const response = await axiosInstance.post("/profiles", data);
  return response.data;
}
