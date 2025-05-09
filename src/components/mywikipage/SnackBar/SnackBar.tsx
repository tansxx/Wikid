import React from "react";
import * as S from "./SnackBar.style";

interface SnackbarProps {
  message: string;
}

export default function Snackbar({ message }: SnackbarProps) {
  return (
    <S.SnackbarWrapper>
      <S.SnackbarContent>
        <S.Icon src="/assets/icons/ic_check.svg" alt="check icon" />
        <span>{message}</span>
      </S.SnackbarContent>
    </S.SnackbarWrapper>
  );
}
