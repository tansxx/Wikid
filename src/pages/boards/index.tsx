import { useState, useEffect } from 'react';
import BestPosts from 'components/boards/BestPosts';
import BoardSearchBar from 'components/boards/BoardSearchBar';
import BoardTable from 'components/boards/BoardTable';
import BoardTableMobile from 'components/boards/BoardTableMobile';
import { getArticleList, ArticleQueryParam } from '@/apis/articleList';

export interface postType {
  updatedAt: string;
  createdAt: string;
  likeCount: number;
  image: string;
  title: string;
  writer: Writer;
  id: number;
}

export interface postListResponseType {
  totalCount: number;
  list: postType[];
}

export interface Writer {
  name: string;
  id: number;
}

export default function boards() {
  const [posts, setPosts] = useState<postType[]>([]);
  const [bestPosts, setBestPosts] = useState<postType[]>([]);
  const [totalCount, setTotalCount] = useState<number>(1);
  const [query, setQuery] = useState<ArticleQueryParam>({
    page: 1,
    orderBy: 'recent',
    keyword: '',
  });

  useEffect(() => {
    getArticleList(query)
      .then((data) => {
        setPosts(data.list);
        setTotalCount(data.totalCount);
      })
      .catch((err) => {
        alert('정보를 불러오지 못했습니다.');
      });
  }, [query]);

  useEffect(() => {
    getArticleList({ pageSize: 4, orderBy: 'like' })
      .then((data) => {
        setBestPosts(data.list);
      })
      .catch((err) => {
        alert('정보를 불러오지 못했습니다.');
      });
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
      <BestPosts bestPost={bestPosts} />
      <BoardSearchBar query={query} setQuery={setQuery} />

      {/* PC & 태블릿 */}
      <div className="hidden md:block">
        <BoardTable posts={posts} totalCount={totalCount} />
      </div>

      {/* 모바일 */}
      <div className="block md:hidden">
        <BoardTableMobile posts={posts} totalCount={totalCount} />
      </div>
    </div>
  );
}
