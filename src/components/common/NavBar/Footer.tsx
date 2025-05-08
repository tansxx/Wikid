import React from "react";

function Footer() {
  return (
    <footer className="bg-gray600 p-[70px]">
      <span className="mb-2.5 block text-textlgBold text-white ">
        Copyright ⓒ Wikied. All Rights Reserved <br />
      </span>
      <div className="mb-5 flex flex-col gap-1">
        <span className="text-textmdRegular text-white text-sm ">
          사업자등록번호 000-00-00000 | 통신판매신고 제2020-서울-00000호 | 대표
          : 이지은
        </span>
        <span className="text-textmdRegular text-white text-sm ">
          서울특별시 중구 청계천로 123, 위키드빌딩
        </span>
      </div>
      <div className="flex flex-row  gap-[15px]">
        <span className=" text-white sm:text-textmdMedium text-[12px]">
          서비스 이용약관
        </span>
        <span className=" text-white sm:text-textmdMedium text-[12px]">
          개인정보 취급방침
        </span>
        <span className=" text-white sm:text-textmdMedium text-[12px]">
          전자금융거래 기본약관
        </span>
      </div>
    </footer>
  );
}

export default Footer;
