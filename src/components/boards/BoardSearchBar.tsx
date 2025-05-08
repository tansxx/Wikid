import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Dropdown from '@/components/boards/DropDownMenu';
import { ArticleQueryParam } from '@/apis/article';

interface BoardSearchBarProps {
  query: ArticleQueryParam;
  setQuery: (value: ArticleQueryParam) => void;
}

export default function BoardSearchBar({
  query,
  setQuery,
}: BoardSearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('최신순');
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickDropDown = (orderBy) => {
    const displayWord = orderBy === 'like' ? '좋아요순' : '최신순';
    setSelectedItem(displayWord);
    setIsOpen(false);
    setQuery({ ...query, orderBy });
  };

  const handleKeywordChange = () => {
    if (inputRef.current) {
      setQuery({ ...query, keyword: inputRef.current.value });
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-[20px] rounded-md flex-wrap gap-[20px] md:gap-0">
        <div className="relative bg-[#F7F7FA] w-[calc(100%-100px)] md:w-[calc(100%-220px)] lg:w-[calc(100%-260px)] h-[40px] box-border rounded-md">
          <label htmlFor="search" className="sr-only">
            search
          </label>
          <Image
            src="/assets/icons/ic_search.svg"
            alt="검색"
            width={22}
            height={22}
            className="inline-block absolute left-[20px] top-1/2 -translate-y-1/2"
          />

          <input
            id="search"
            type="text"
            name="search"
            placeholder="제목을 검색해 주세요"
            className="w-full pl-[47px] md:pl-[58px] pr-[20px] py-[7px] rounded-md text-base placeholder:text-[#8F95B2] leading-[26px] text-[16px] bg-[#F7F7FA]"
            ref={inputRef}
          />
        </div>

        <button
          type="button"
          onClick={handleKeywordChange}
          className="w-[80px] h-[45px] px-4 py-2 bg-[#4CBFA4] text-white rounded-md leading-[24px] text-[14px] font-semibold"
        >
          검색
        </button>

        <Dropdown
          isOpen={isOpen}
          onToggle={() => {
            setIsOpen((prev) => !prev);
          }}
          selectedLabel={selectedItem}
        >
          <button
            onClick={() => {
              onClickDropDown('recent');
            }}
            className="w-full px-4 py-3 rounded-md text-left text-[14px] leading-[24px] text-[#474D66]"
          >
            최신순
          </button>
          <button
            onClick={() => {
              onClickDropDown('like');
            }}
            className="w-full px-4 py-3 rounded-md text-left text-[14px] leading-[24px] text-[#474D66]"
          >
            좋아요순
          </button>
        </Dropdown>
      </div>
    </>
  );
}
