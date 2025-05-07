import instance from "./axiosInstance";

const BASE_URL = "/articles";

export const createArticle = async (data: {
  title: string;
  content: string;
  image?: string;
}) => {
  return await instance.post(`${BASE_URL}`, data);
};

export const fetchArticleList = async (
  params: {
    page?: number;
    pageSize?: number;
    orderBy?: "recent" | "like";
    keyword?: string;
  } = {}
) => {
  return await instance.get(`${BASE_URL}`, {
    params,
  });
};
