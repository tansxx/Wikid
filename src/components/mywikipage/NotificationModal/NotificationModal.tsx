import React, { useEffect, useState } from "react";
import * as S from "./NotificationModal.style";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

interface Notification {
  id: number;
  content: string;
  createdAt: string;
}

export default function NotificationModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showOnlyUnread, setShowOnlyUnread] = useState(false);

  const fetchNotifications = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/notifications`, {
        params: { page: 1, pageSize: 100 },
      });
      setNotifications(res.data.list);
    } catch (err) {
      console.error("알림 불러오기 실패:", err);
    }
  };

  const deleteNotification = async (id: number) => {
    try {
      await axios.delete(`${API_BASE_URL}/notifications/${id}`);
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    } catch (err) {
      console.error("알림 삭제 실패:", err);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const visibleNotifications = showOnlyUnread ? notifications : notifications;

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
          <S.NotificationItem key={n.id} read={false}>
            <S.ItemText>{n.content}</S.ItemText>
            <S.ItemTime>{new Date(n.createdAt).toLocaleString()}</S.ItemTime>
            <S.DeleteButton onClick={() => deleteNotification(n.id)}>
              x
            </S.DeleteButton>
          </S.NotificationItem>
        ))}
      </S.NotificationList>
    </S.ModalContainer>
  );
}
