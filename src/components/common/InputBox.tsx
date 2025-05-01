import { useState } from 'react';
import styles from './InputBox.module.css';

type InputBoxProps = {
  placeholder?: string;
  initialValue?: string;
  onChange?: (value: string) => void;
};

export default function InputBox({
  placeholder = '입력해 주세요',
  initialValue = '',
  onChange,
}: InputBoxProps) {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className={styles.inputBox}>
      <input
        type="text"
        className={styles.inputField}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}
