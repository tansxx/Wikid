import styles from "./LinkButton.module.css";
import Image from "next/image";
import { FC } from "react";

interface LinkButtonProps {
  label: string;
  link: string;
  textColor?: string;
}

const LinkButton: FC<LinkButtonProps> = ({
  label,
  link,
  textColor = "#4CBFA4",
}) => {
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(link);
      alert("링크가 복사되었습니다!");
    } catch (err) {
      console.error("복사 실패:", err);
    }
  };

  return (
    <button
      className={styles.linkButton}
      onClick={handleClick}
      style={{ color: textColor }}
    >
      <Image
        src="/assets/icons/ic_link.svg"
        alt="링크 아이콘"
        width={20}
        height={20}
      />
      {label}
    </button>
  );
};

export default LinkButton;
