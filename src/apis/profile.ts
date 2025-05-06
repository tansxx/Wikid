import axiosInstance from "./axiosInstance";

export const createProfile = async (data: {
  securityQuestion: string;
  securityAnswer: string;
}) => {
  const response = await axiosInstance.post("/profiles", data);
  return response.data;
};

export const updateProfile = async (
  code: string,
  data: {
    nickname?: string;
    city?: string;
    mbti?: string;
    job?: string;
    bloodType?: string;
    nationality?: string;
    family?: string;
    birthday?: string;
    sns?: string;
    image?: string;
    content?: string;
    securityQuestion?: string;
    securityAnswer?: string;
  }
) => {
  const response = await axiosInstance.patch(`/profiles/${code}`, data);
  return response.data;
};

export const checkProfileEditInProgress = async (code: string) => {
  const response = await axiosInstance.get(`/profiles/${code}/ping`);
  return response.data;
};

export const notifyProfileEditing = async (
  code: string,
  securityAnswer: string
) => {
  const response = await axiosInstance.post(`/profiles/${code}/ping`, {
    securityAnswer,
  });
  return response.data;
};
