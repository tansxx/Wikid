import React from "react";
import * as S from "./NotificationModal.style";

interface NotificationItemProps {
  id: number;
  text: string;
  read: boolean;
  time: string;
  onDelete: (id: number) => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  id,
  text,
  read,
  time,
  onDelete,
}) => {
  return (
    <S.NotificationItem read={read}>
      {!read && <S.UnreadDot />}
      <S.ItemText>{text}</S.ItemText>
      <S.ItemTime>{time}</S.ItemTime>
      <S.DeleteButton onClick={() => onDelete(id)}>×</S.DeleteButton>
    </S.NotificationItem>
  );
};

export default NotificationItem;
