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

export async function createQuestionAPI({
  securityQuestion,
  securityAnswer,
}: {
  securityQuestion: string;
  securityAnswer: string;
}) {
  return axiosInstance.post("/profiles", {
    securityQuestion,
    securityAnswer,
  });
}
