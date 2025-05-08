import { ChangeEvent } from 'react';
import Image from 'next/image';
import { ProfileQueryParam } from '@/apis/profile';

interface ProfileSearchBarProps {
  query: ProfileQueryParam;
  setQuery: (value: ProfileQueryParam) => void;
}

export default function WikiSearchBar({
  query,
  setQuery,
}: ProfileSearchBarProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery({
      ...query,
      name: e.target.value,
      page: 1,
    });
  };
  return (
    <>
      <div className="relative bg-[#F7F7FA] h-[40px] mb-[16px] box-border rounded-md mx-[20px] ">
        <label htmlFor="search" className="sr-only">
          search
        </label>
        <Image
          src="/assets/icons/ic_search.svg"
          alt="검색"
          width={22}
          height={22}
          className="inline-block absolute left-[20px] top-1/2 -translate-y-1/2 "
        />

        <input
          id="search"
          type="text"
          name="search"
          placeholder="이름을 검색해 주세요"
          className="w-full pl-[47px] md:pl-[58px] pr-[20px] py-[7px] rounded-md text-base placeholder:text-[#8F95B2] leading-[26px] text-[16px] bg-[#F7F7FA]"
          value={query.name || ''}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
