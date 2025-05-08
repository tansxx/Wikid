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
            <table className="w-full table-auto border-t border-[#E4E5F0] mb-10 text-left text-[#474D66] text-sm hidden md:table">
              <thead className="text-[#8F95B2]">
                <tr className="border-b border-[#E4E5F0]">
                  <th className="w-[10%] py-3">번호</th>
                  <th className="w-[45%]">제목</th>
                  <th className="w-[15%]">작성자</th>
                  <th className="w-[15%]">좋아요</th>
                  <th className="w-[15%]">날짜</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="border-b border-[#E4E5F0]">
                    <td className="py-3">{post.id}</td>
                    <td className="py-3">
                      <Link
                        href={`/posts/${post.writer.id}`}
                        className="text-blue-600 hover:underline"
                      >
                        <span className="text-[#474D66]">{post.title}</span>
                      </Link>
                    </td>
                    <td className="py-3">{post.writer.name}</td>
                    <td className="py-3">{post.likeCount}</td>
                    <td className="py-3">
                      {format(parseISO(post.createdAt), "yyyy.MM.dd")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* 페이징은 결과가 있을 때만 표시 */}
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
