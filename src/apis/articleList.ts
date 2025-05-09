import axiosInstance from "./axiosInstance";

export interface ArticleQueryParam {
  page?: number;
  pageSize?: number;
  orderBy?: "recent" | "like";
  keyword?: string;
}

export const getArticleList = async (query: ArticleQueryParam) => {
  const { data } = await axiosInstance.get("/articles", {
    params: {
      page: query.page ?? 1,
      pageSize: query.pageSize ?? 10,
      orderBy: query.orderBy ?? "recent",
      keyword: query.keyword ?? "",
    },
  });
  return data;
};
