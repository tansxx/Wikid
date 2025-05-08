import { axiosInstance } from "./axios";


export interface ArticleQueryParam {
  page?: number;
  pageSize?: number;
  orderBy?: 'recent' | 'like';
  keyword?: string;
}

export async function getArticleList({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = '',
}: ArticleQueryParam = {}) {
  const response = await axiosInstance.get(`/articles`, {
    params: {
      page,
      pageSize,
      orderBy,
      keyword,
    },
  });

  return response.data;
}
