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

export const fetchArticles = async () => {
  const response = await instance.get("/articles", {
    params: {
      page: 1,
      pageSize: 100,
      orderBy: "recent",
    },
  });
  return response.data.list;
};
