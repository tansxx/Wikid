import { axiosInstance } from "@/apis/axios";

export interface queryParam {
  page? : number,
  pageSize? : number,
  orderBy? : string,
  keyword? : string
}

export async function getArticleList({ page = 1, pageSize = 10, orderBy = 'recent', keyword = ''}: queryParam = {}) {
  const response = await axiosInstance.get(`/articles`, {
      params: {
        page,
        pageSize,
        orderBy,
        keyword
      }
    });

  return response.data;
}