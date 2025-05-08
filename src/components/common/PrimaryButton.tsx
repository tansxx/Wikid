import styles from "./PrimaryButton.module.css";

interface PrimaryButtonProps {
  label?: string;
  onClick?: () => void;
  height?: number;
  width?: number | string;
  variant?: "filled-green" | "filled-gray" | "outlined-green" | "outlined-gray";
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function PrimaryButton({
  label = "버튼",
  onClick,
  height = 48,
  width = "auto",
  variant = "filled-green",
  type = "button",
  disabled = false,
  children,
}: PrimaryButtonProps) {
  const getVariantStyle = () => {
    switch (variant) {
      case "filled-green":
        return {
          backgroundColor: "#4CBFA4",
          color: "#FFFFFF",
          border: "none",
        };
      case "filled-gray":
        return {
          backgroundColor: "#C6CADA",
          color: "#FFFFFF",
          border: "none",
        };
      case "outlined-green":
        return {
          backgroundColor: "transparent",
          color: "#4CBFA4",
          border: "1px solid #4CBFA4",
        };
      case "outlined-gray":
        return {
          backgroundColor: "transparent",
          color: "#666666",
          border: "1px solid #C6CADA",
        };
      default:
        return {};
    }
  };

  return (
    <button
      type={type}
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      style={{
        height: `${height}px`,
        width: typeof width === "number" ? `${width}px` : width,
        ...getVariantStyle(),
      }}
    >
      {children ?? label}
    </button>
  );
}
