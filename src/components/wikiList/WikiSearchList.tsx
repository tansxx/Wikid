import { useState, useEffect } from "react";
import Image from "next/image";
import IcLink from "@/assets/icons/ic_link.svg";
import { ProfileType } from "@/pages/wikiList";
import { ProfileQueryParam } from "@/apis/profileList";
import Snackbar from "../myWikiPage/SnackBar/SnackBar";

interface WikiSearchListProps {
  profileInfo: ProfileType[];
  totalCount: number;
  query: ProfileQueryParam;
}

export default function WikiSearchList({
  profileInfo,
  totalCount,
  query,
}: WikiSearchListProps) {
  const [pageNum, setPageNum] = useState<number[]>([]);
  const [totalPageNum, setTotalPageNum] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    const totalPage = totalCount / 10 + 1;
    setTotalPageNum(totalPage);

    const pages = [];
    for (
      let i = Math.floor(currentPage / 5) * 5 + 1;
      i <= Math.floor(currentPage / 5 + 1) * 5;
      i++
    ) {
      if (i <= totalPageNum) {
        pages.push(i);
      }
    }
    setPageNum(pages);
  }, [profileInfo]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* 검색 결과 있음 메시지 */}
      {query.name && profileInfo.length > 0 && (
        <p className="px-[20px] mb-[40px] md:mb-[50px] lg:mb-[57px] text-[#8F95B2]">
          “{query.name}”님을 총{" "}
          <span className="text-[#4CBFA4]">{totalCount}</span>명 찾았습니다.
        </p>
      )}

      {/* 검색 결과 없을 때 */}
      {query.name && profileInfo.length === 0 ? (
        <div className="h-full flex items-center flex-col gap-[32px] justify-center">
          <p className="text-[#8F95B2] ">
            “{query.name}”과 일치하는 검색 결과가 없어요.
          </p>
          <Image
            src="/assets/images/img_nodata.png"
            alt=""
            width={144}
            height={144}
            className="inline-block"
          />
        </div>
      ) : (
        <>
          <div
            className="
          relative p-[20px] overflow-x-auto overflow-y-hidden mb-[50px] md:mb-[60px] lg:mb-[100px]
        "
          >
            <div className="flex flex-col gap-4 w-full md:gap-5 md:flex-wrap lg:gap-4 lg:w-full lg:flex-nowrap overflow-visible">
              {profileInfo.map((profile) => (
                <div
                  key={profile.id}
                  className="relative flex flex-col justify-between flex-shrink-0 rounded-lg
                  pt-[21px] pr-[25px] pb-[21px] pl-[105px]
                  md:flex-row md:py-[24px] md:pr-[36px] md:pl-[153px]
                  shadow-[0px_4px_20px_0px_#00000014]"
                >
                  <div className="text-lg">
                    <a href="#">
                      <img
                        alt={profile.name}
                        src={profile.image || "/assets/icons/ic_profile.svg"}
                        className="absolute left-[25px] top-1/2 -translate-y-1/2 w-[60px] h-[60px] object-cover object-top rounded-full md:w-[85px] md:h-[85px] rounded-full"
                      />
                      <h3
                        className="
                          font-semibold text-[#474D66]
                          mb-[10px] leading-[24px] text-[20px]
                          md:mb-[14px] md:leading-[32px] md:text-[24px]"
                      >
                        {profile.name}
                      </h3>
                      <div
                        className="flex justify-between
                           mb-[14px]
                           md:mb-0
                          "
                      >
                        <div className="">
                          <span
                            className="
                              block text-[#8F95B2]
                              mb-[6px] leading-[17px] text-[12px]
                              md:mb-0 md:leading-[24px] md:text-[14px]
                              "
                          >
                            {profile.city}, {profile.nationality}
                          </span>
                          <span
                            className="
                              block text-[#8F95B2]
                              mb-[6px] leading-[17px] text-[12px]
                              md:mb-0 md:leading-[24px] md:text-[14px]
                              "
                          >
                            {profile.job}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div
                    className="w-full py-[4px] pl-[10px] pr-[14px] bg-[#EEF9F6] rounded-full w-auto self-start md:self-end whitespace-nowrap sm:w-auto
                    "
                  >
                    <IcLink className="inline align-[-6px] mr-2" color="#000" />
                    <button
                      type="button"
                      title={profile.code}
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `https://www.wikied.kr/${profile.code}`
                        );
                        setShowSnackbar(true);
                        setTimeout(() => setShowSnackbar(false), 2000);
                      }}
                      className="w-[88%] leading-[18px] md:text-[14px] text-[#4CBFA4] whitespace-nowrap truncate md:w-auto text-left"
                    >
                      https://www.wikied.kr/{profile.code.slice(0, 8)}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
                alt="이전으로"
                width={18}
                height={18}
                className="inline-block"
              />
              <span className="sr-only">Next</span>
            </button>
            {showSnackbar && <Snackbar message="링크가 복사되었습니다! ✨" />}
          </nav>
        </>
      )}
    </>
  );
}
