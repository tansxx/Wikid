import React from "react";
import NotificationItem from "./NotificationItem/NotificationItem";
import * as S from "./NotificationModal.style";
import CloseButton from "@/components/common/CloseButton";

type Notification = {
  id: number;
  message: string;
  time: string;
  isNew: boolean;
};

interface Props {
  notifications: Notification[];
  onClose: () => void;
  onDelete: (id: number) => void;
}

const NotificationModal: React.FC<Props> = ({
  notifications,
  onClose,
  onDelete,
}) => {
  return (
    <S.ModalWrapper>
      <S.ModalHeader>
        <span>알림 {notifications.length}개</span>
        <CloseButton onClose={onClose} />
      </S.ModalHeader>
      <S.NotificationList>
        {notifications.map((item) => (
          <NotificationItem
            key={item.id}
            {...item}
            onDelete={() => onDelete(item.id)}
          />
        ))}
      </S.NotificationList>
    </S.ModalWrapper>
  );
};

export default NotificationModal;
