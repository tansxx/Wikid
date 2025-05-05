import { ChangeEvent, useState, useEffect } from 'react';
import BestPosts from "components/boards/BestPosts";
import BoardSearchBar from "components/boards/BoardSearchBar";
import BoardTable from "components/boards/BoardTable";
import { getArticleList, queryParam } from "@/apis/boardsAPI";


export interface postType {
  "updatedAt": string,
  "createdAt": string,
  "likeCount": number,
  "image" : string,
  "title" : string,
  "writer": {
    "name": string,
    "id": number
  },
  "id": number
}

export interface postListResponseType {
  totalCount: number;
  list: postType[];
}

export default function boards () {
  const [posts, setPosts] = useState<postType[]>([]);
  const [bestPosts, setBestPosts] = useState<postType[]>([]);
  const [totalCount, setTotalCount] = useState<Number>(1);
  const [query, setQuery] = useState<queryParam>({page:1, orderBy:'recent', keyword:''});

  useEffect (() => {
    getArticleList(query).then((data) => {
      setPosts(data.list);  // 상태 업데이트
      setTotalCount(data.totalCount);  // 상태 업데이트
    })
    .catch((err) => {
      console.error("Error:", err);
    });
  }, [query]);

  useEffect (() => {
    getArticleList({pageSize:4, orderBy:'like'}).then((data) => {
      setBestPosts(data.list);  // 상태 업데이트
    })
    .catch((err) => {
      console.error("Error:", err);
    });
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
      <BestPosts  bestPost={bestPosts}></BestPosts>
      <BoardSearchBar query={query} setQuery={setQuery}></BoardSearchBar>
      <BoardTable posts={posts} totalCount={totalCount} ></BoardTable>
    </div>
  )
}