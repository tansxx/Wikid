import { axiosInstance } from './axios';

export interface ProfileQueryParam {
  page?: number;
  pageSize?: number;
  name?: string;
}

export async function getProfileList({
  page = 1,
  pageSize = 10,
  name,
}: ProfileQueryParam = {}) {
  const response = await axiosInstance.get(`/profiles`, {
    params: {
      page,
      pageSize,
      name,
    },
  });

  return response.data;
}
