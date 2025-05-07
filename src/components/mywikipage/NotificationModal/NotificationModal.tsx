import React, { useState } from "react";
import * as S from "./NotificationModal.style";

interface Notification {
  id: number;
  message: string;
  read: boolean;
  time: string;
}

const initialNotifications: Notification[] = [
  { id: 1, message: "내 위키가 수정되었습니다.", read: false, time: "1분 전" },
  { id: 2, message: " 내 위키가 수정되었습니다.", read: true, time: "25분 전" },
];

export default function NotificationModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [showOnlyUnread, setShowOnlyUnread] = useState(false);

  const visibleNotifications = showOnlyUnread
    ? notifications.filter((n) => !n.read)
    : notifications;

  const handleDelete = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <S.ModalContainer>
      <S.ModalHeader>
        <S.Title>알림 {notifications.length}개</S.Title>
        <S.CloseButton onClick={onClose}>x</S.CloseButton>
      </S.ModalHeader>

      <S.Tabs>
        <S.Tab
          active={!showOnlyUnread}
          onClick={() => setShowOnlyUnread(false)}
        >
          전체
        </S.Tab>
        <S.Tab active={showOnlyUnread} onClick={() => setShowOnlyUnread(true)}>
          안 읽은
        </S.Tab>
      </S.Tabs>

      <S.NotificationList>
        {visibleNotifications.map((n) => (
          <S.NotificationItem key={n.id} read={n.read}>
            <S.ItemText>{n.message}</S.ItemText>
            <S.ItemTime>{n.time}</S.ItemTime>
            <S.DeleteButton onClick={() => handleDelete(n.id)}>
              x
            </S.DeleteButton>
          </S.NotificationItem>
        ))}
      </S.NotificationList>
    </S.ModalContainer>
  );
}
