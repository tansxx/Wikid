import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { postType } from "@/pages/boards";
import { format, parseISO } from "date-fns";

const PAGE_SIZE = 10;
const PAGE_GROUP_SIZE = 5;

export default function BoardTable({
  posts,
  totalCount,
}: {
  posts: postType[];
  totalCount: number;
}) {
  const [pageNum, setPageNum] = useState<number[]>([]);
  const [totalPageNum, setTotalPageNum] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const totalPage = Math.ceil(totalCount / PAGE_SIZE);
    setTotalPageNum(totalPage);

    const groupStart =
      Math.floor((currentPage - 1) / PAGE_GROUP_SIZE) * PAGE_GROUP_SIZE + 1;
    const groupEnd = Math.min(groupStart + PAGE_GROUP_SIZE - 1, totalPage);

    const pages = [];
    for (let i = groupStart; i <= groupEnd; i++) {
      pages.push(i);
    }
    setPageNum(pages);
  }, [posts, currentPage, totalCount]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="leading-[26px] text-[16px] md:text-center">
        {posts.length === 0 ? (
          <div className="flex justify-center items-center min-h-[200px] text-[#8F95B2]">
            검색 결과가 없습니다.
          </div>
        ) : (
          <>
            <ul className="flex justify-between py-[12px] border-y border-[#E4E5F0] text-[#8F95B2] hidden md:flex">
              <li className="w-[10%]">번호</li>
              <li className="w-[45%]">제목</li>
              <li className="w-[15%]">작성자</li>
              <li className="w-[15%]">좋아요</li>
              <li className="w-[15%]">날짜</li>
            </ul>
            <ul className="mb-[30px] md:mb-[60px] text-[#474D66]">
              {posts.map((post) => (
                <li
                  key={post.writer.id}
                  className="py-[12px] border-b border-[#E4E5F0]"
                >
                  <dl className="flex relative flex-wrap">
                    <dd className="w-[10%] hidden md:block">{post.id}</dd>
                    <dd className="w-full md:w-[45%] block">
                      <Link href={`/boards/${post.writer.id}`}>
                        {post.title}
                      </Link>
                    </dd>
                    <dd className="w-inline md:w-[15%] text-[#8F95B2] md:text-[#474D66]">
                      {post.writer.name}
                    </dd>
                    <dd className="w-[15%] ml-[16px] text-[#8F95B2] md:text-[#474D66]">
                      {format(parseISO(post.createdAt), "yyyy.MM.dd")}
                    </dd>
                    <dd className="w-[15%] absolute right-0 bottom-0 text-[#8F95B2] md:text-[#474D66]">
                      <Image
                        src="/assets/icons/ic_heart.svg"
                        alt="좋아요"
                        width={16}
                        height={16}
                        className="inline-block md:hidden"
                      />
                      <span>{post.likeCount}</span>
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>

            <nav
              aria-label="Pagination"
              className="flex -space-x-px rounded-md shadow-xs gap-[11px] justify-center"
            >
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-[#8F95B2] shadow-[0px_4px_20px_0px_#00000014]"
                disabled={currentPage === 1}
              >
                <Image
                  src="/assets/icons/ic_arrow_left.svg"
                  alt="이전으로"
                  width={18}
                  height={18}
                  className="inline-block"
                />
                <span className="sr-only">Previous</span>
              </button>
              {pageNum.map((page) => (
                <button
                  type="button"
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`relative inline-flex items-center px-4 py-2 text-sm ${
                    page === currentPage ? "text-[#4CBFA4]" : "text-[#8F95B2]"
                  } rounded-md shadow-[0px_4px_20px_0px_#00000014]`}
                >
                  {page}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPageNum}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-[#8F95B2] rounded-md shadow-[0px_4px_20px_0px_#00000014]"
              >
                <Image
                  src="/assets/icons/ic_arrow_right.svg"
                  alt="다음으로"
                  width={18}
                  height={18}
                  className="inline-block"
                />
                <span className="sr-only">Next</span>
              </button>
            </nav>
          </>
        )}
      </div>
    </>
  );
}
