import styles from "./LinkButton.module.css";
import Image from "next/image";
import Snackbar from "../mywikipage/SnackBar/SnackBar";
import { FC, useState } from "react";

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
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setShowSnackbar(true);
      setTimeout(() => setShowSnackbar(false), 3000);
    } catch (err) {
      console.error("복사 실패:", err);
    }
  };

  return (
    <>
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
        <span className={styles.linkText}>{label}</span>
      </button>

      {showSnackbar && <Snackbar message="내 위키 링크가 복사되었습니다." />}
    </>
  );
};

export default LinkButton;
