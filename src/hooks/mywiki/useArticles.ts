import { useEffect, useState } from "react";
import { fetchArticles } from "@/apis/article";

export interface Article {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  code?: string;
}

export function useArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data || []);
      } catch (err: any) {
        setError(err.message || "게시글 불러오기 실패");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return { articles, loading, error };
}
