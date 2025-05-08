import { useState, useEffect } from 'react';
import WikiSearchBar from 'components/wikiList/WikiSearchBar';
import WikiSearchList from 'components/wikiList/WikiSearchList';
import { getProfileList, ProfileQueryParam } from '@/apis/profile';

export interface ProfileListResponse {
  list: ProfileType[];
  totalCount: number;
}

export interface ProfileType {
  id: number;
  name: string;
  code: string;
  image: string;
  city: string;
  nationality: string;
  job: string;
  updatedAt: string;
}

export default function WikiList() {
  const [profileInfo, setProfileInfo] = useState<ProfileType[]>([]);
  const [totalCount, setTotalCount] = useState<number>(1);
  const [query, setQuery] = useState<ProfileQueryParam>({
    page: 1,
    pageSize: 10,
    name: '',
  });

  useEffect(() => {
    getProfileList(query)
      .then((data) => {
        setProfileInfo(data.list);
        setTotalCount(data.totalCount);
      })
      .catch((err) => {
        alert('정보를 불러오지 못했습니다.');
      });
  }, [query]);

  return (
    <>
      <div className="mx-auto max-[54rem] py-16 lg:max-w-7xl lg:px-8 min-h-screen h-[100vh] box-border">
        <WikiSearchBar query={query} setQuery={setQuery} />
        <WikiSearchList
          profileInfo={profileInfo}
          totalCount={totalCount}
          query={query}
        />
      </div>
    </>
  );
}
