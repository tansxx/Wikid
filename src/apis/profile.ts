import axiosInstance from "./axiosInstance";

interface CreateProfileRequest {
  securityQuestion: string;
  securityAnswer: string;
}

export async function createProfile(data: CreateProfileRequest) {
  const response = await axiosInstance.post("/profiles", data);
  return response.data;
}
