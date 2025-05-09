import { useRouter } from 'next/router';
import { useState, ChangeEvent, KeyboardEvent } from 'react';
import styles from './SearchForm.module.css';
import Image from 'next/image';

interface SearchFormProps {
  placeholder?: string;
  initialValue?: string;
  onSearch?: (query: string) => void;
}

export default function SearchForm({
  placeholder = '검색어를 입력하세요',
  initialValue = '',
  onSearch,
}: SearchFormProps) {
  const router = useRouter();
  const [value, setValue] = useState<string>(initialValue);

  const triggerSearch = () => {
    if (!value.trim()) {
      onSearch ? onSearch('') : router.push('/');
    } else {
      const query = value.trim();
      onSearch ? onSearch(query) : router.push(`/search?q=${query}`);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      e.preventDefault();
      triggerSearch();
    }
  };

  return (
    <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.searchBox}>
        <Image
          src="/type=search.png"
          alt="검색"
          width={20}
          height={20}
          className={styles.searchIcon}
          onClick={triggerSearch}
        />
        <input
          type="text"
          className={styles.searchInput}
          name="q"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </form>
  );
}
