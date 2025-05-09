import {
  InputWrapper,
  Label,
  Input,
} from "@/components/myWikiPage/ProfileForm/ProfileInput/ProfileInput.styles";

interface ProfileInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "date";
  disabled?: boolean;
  isEditMode?: boolean;
}

export default function ProfileInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
  isEditMode = false,
}: ProfileInputProps) {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        $isEditMode={isEditMode}
      />
    </InputWrapper>
  );
}
