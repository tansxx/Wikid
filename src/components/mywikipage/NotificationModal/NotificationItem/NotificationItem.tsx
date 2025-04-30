import React from "react";
import * as S from "./NotificationItem.style";
import CloseButton from "@/components/common/CloseButton";

interface Props {
  message: string;
  time: string;
  isNew: boolean;
  onDelete: () => void;
}

const NotificationItem: React.FC<Props> = ({
  message,
  time,
  isNew,
  onDelete,
}) => {
  return (
    <S.ItemWrapper>
      <S.Dot color={isNew ? "#0085FF" : "#FF472E"} />
      <S.Content>
        <S.Message>{message}</S.Message>
        <S.Time>{time}</S.Time>
      </S.Content>
      <S.DeleteBtnWrapper>
        <CloseButton onClose={onDelete} />
      </S.DeleteBtnWrapper>
    </S.ItemWrapper>
  );
};

export default NotificationItem;
